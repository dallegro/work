//index.js


$(document).ready(function () {
    $("nav ul.gnb").hide();
    $(".menu_btn").click(function () {
        $("nav ul.gnb").stop().slideToggle();
    });
}); //jQuery