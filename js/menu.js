$('.contact').mouseover(function () {
    $('#toggle-menu').removeClass('toggle-menu-start');
        $('#toggle-menu').removeClass('toggle-menu-close');
        $('#toggle-menu').addClass('toggle-menu-open');
});

$('.contact').mouseout(function () {
    $('#toggle-menu').removeClass('toggle-menu-open');
    $('#toggle-menu').addClass('toggle-menu-close');
});