$(document).ready(function () {
    $('.burger__link,.navigation__burger >.menu__item').click(function (event) {
        $('.burger__link, .navigation__burger').toggleClass('activate');
        //при клике на кнопку .burger__link к body добавляеться класс со свойством overflow: hidden;
        $('body').toggleClass('activate');

        if ($(".navigation__burger").hasClass('activate')) {
            $('<div class="overlay">&nbsp;</div>').prependTo($('body'));
        } else {
            $('.overlay').remove();
        }
    });

    $('.autopark__slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/prefArrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/nextArrow.svg"></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });

});