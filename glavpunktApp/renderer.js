

console.log('111111');
window.$ = window.jQuery = require('jquery');

$(function() {
    console.log( "ready!" );

    var body = $('body');

    var aa = document.getElementById('authform');

    console.log(aa);
    // console.log(form.find('input'));
});


