// Присваиваем переменной функцию из библиотеки с аргументом - контейнером элементов, которые нужно фильтровать:
var mixer = mixitup ('.container-filter');
// Работа с меню:
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        // Сохраняем значение href в переменной
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top //Можно вычесть высоту меню
            }, 500);
            return false;
    });
});