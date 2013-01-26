/*
 * Simple Login Registration Node.js App
 * This app use Express 3, Mongoose 3, Underscore and MongoDB database
 *
 *
 * Author By Equan Pr.
 * http://www.junwatu.com
 *
 * License :  Whatever you want! :D
 */

var express = require("express"),
    engines = require('consolidate'),
    app = express(),
    mongoose = require('mongoose'),
    dbmessage = '',
    apptitle = 'NodeJs Login Registration',

/*
 * UserSchema
 *
 */
    UserSchema = new mongoose.Schema({
        username:'string',
        password:'string',
        email:'string'
    });

app.configure(function () {
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(express.cookieParser());

    app.use(express.static(__dirname + '/app'));

    app.engine('html', engines.underscore);

    /*
     Set views directory. DO NOT set this with the same static directory!.
     */
    app.set('views', __dirname + '/app/views');
    app.set('view engine', 'html');
    app.set('PORT', 3000);

    // MongoDB for development
    app.set('MONGODB_DEV','mongodb://localhost/contacts');

    /**
     * MongoDB for production
     *
     * HardCode for demo purpose only
     */
    app.set('MONGODB_PROD','mongodb://usernam:password@domainmu.com:212/contacts');

    /**
     * NODE_ENV=development
     */
    if ('development' == app.get('env')) {
        app.set('MONGODB_CONN', app.get('MONGODB_DEV'));
    }

    /**
     * NODE_ENV=production
     */
    if ('production' == app.get('env')) {
        app.set('MONGODB_CONN', app.get('MONGODB_PROD'));
    }

});

/* ==================================
 * MongoDB connection using Mongoose
 */

var db = mongoose.createConnection(app.get('MONGODB_CONN')),
    User = db.model('users', UserSchema);

db.on('connected', function () {
    console.log('Aplikasi terhubung dengan database.');
    dbmessage = 'Aplikasi terhubung dengan database.';
});

db.on('error', function () {
    console.error.bind(console, 'Connection error!');
    dbmessage = 'Koneksi ke MongoDB error!';
});

app.get("/", function (req, res) {
    res.render('index', {
        title: apptitle,
        message:''
    });
});

app.listen(app.get('PORT'));
console.log('NodeStar');
console.log("Server Port: " + app.get('PORT'));
