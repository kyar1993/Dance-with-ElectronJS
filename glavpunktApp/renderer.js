document.addEventListener("DOMContentLoaded", function() {
    window.$ = window.jQuery;

    if(!$("div").is(".user-profile")) {
        console.log('не авторизован!!!');

        var form = $('#authform');
        var formL = $(form).find('input#login')[0];
        var formP = $(form).find('input#password')[0];
        var formSubmitBtn = $(form).find(':submit')[0];

        $(formL).val('kyav');
        $(formP).val('F$5^td_mm');
        $(formSubmitBtn).click()
    }

    console.log('юзер уже авторизован!!!');
});
