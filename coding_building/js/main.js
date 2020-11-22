// Фильтр на мобильных устройствах
const sidebarToggleBtn = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.onclick = function () {
    console.log('Yes!');
    // Sidebar mobile active
    sidebar.classList.toggle('sidebar--mobile-active');
}

// Показать еще 3 карточки
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.onclick = function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })
}

// Показать/скрыть контент внутри виджетов
const widget = document.querySelectorAll('.widget');

widget.forEach(function (widget) {
    widget.addEventListener('click', function (e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})

// Location - кнопка Любая
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

// Клик по кнопке Любая и отключение других чекбоксов
checkBoxAny.addEventListener('change', function () {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        })
    }
})

// Клик по кнопкам верхнего ряда и отключение кнопки Любая
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        checkBoxAny.checked = false;
    })
})

// Добавление 3-х чекбоксов по клику на кнопке "Показать еще"
const btnShowMoreChecks = document.querySelector('.widget__show-hidden');
const hiddenChecks = document.querySelectorAll('.checkbox--hidden');


btnShowMoreChecks.onclick = function () {
    hiddenChecks.forEach(function (item) {
        item.style.display = "block";
    })
    btnShowMoreChecks.remove();
}