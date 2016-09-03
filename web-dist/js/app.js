$(document).ready(function () {

    // Handling the navigation links

    $('.nav-item').click(function () {
        var scrollElement = $(this).find('.nav-link').data('link'),
            scrollPosition = $(scrollElement).offset().top - 100;

        $('html, body').animate({
            scrollTop: scrollPosition
        }, 500);
    });
});