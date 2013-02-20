/**
 * Title Here
 *
 * Description :
 * Date: 2/17/13
 * Time: 10:45 AM
 *
 * Author By : Equan Pr
 * http://www.junwatu.com
 */
$(function() {
    // Setup drop down menu
    $('.dropdown-toggle').dropdown();

    // Fix input element click problem
    $('.dropdown input, .dropdown label').click(function(e) {
        e.stopPropagation();
    });
});