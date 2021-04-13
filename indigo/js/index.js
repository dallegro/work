//index.js


$(document).ready(function () {
    $("nav ul.gnb").hide();
    $("span.menu-toggle-btn").click(function () {
        $("nav ul.gnb").stop().slideToggle();
    });
});
