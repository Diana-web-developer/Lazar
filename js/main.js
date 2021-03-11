// плавная прокрутка по Гаврилову
$(document).ready(function () {
    $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });


    // кнопка наверх Гав
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $('#scroll_top').show();
        } else {
            $('#scroll_top').hide();
        }
    });

    $('#scroll_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });



    // добавление тени у header я
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("shadow");
        }
        else {
            $('.shadow').removeClass("shadow");
        }
    });

    // бургер рыж
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__link').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });




    






});