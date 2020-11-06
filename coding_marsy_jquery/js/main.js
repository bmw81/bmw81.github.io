$(document).ready(function() {
    // Плавная прокрутка меню:
    $('nav a[href^="#"]').click(function() {
        let t = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(t).offset().top
        }, 500);
        // Активация ссылки:
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu').toggle(500);
        $('.menu__burger').toggleClass('close');
        return false;
    })
    // Мобильное меню:
    $('.menu__burger').click(function() {
        $('.menu').toggle(500);
        $(this).toggleClass('close');
    })
});