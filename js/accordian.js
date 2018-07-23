$('.accordion').each(function () {
    $(this).click(function () {
        $(this).next().slideToggle();
    });
});