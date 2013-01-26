== NodeStar ==

Koneksi NodeJs dengan MongoDB menggunakan Mongoose.

Instalasi

1. Set environment variabel

    $ export NODE_ENV=development

2. Jalankan database MongoDB sesuai dengan sistem anda.

Jika MongoDB tidak berjalan pada komputer lokal, setting parameter
bisa diset pada file server.js

    app.set('MONGODB_HOST', 'domainmu.com');
    app.set('MONGODB_PORT', '27017');
    app.set('MONGODB_USERNAME', 'usernamemu');
    app.set('MONGODB_PASSWORD', 'passwordmu');

3. Untuk menjalankan server node ketik

    $ node server.js

