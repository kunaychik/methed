$(document).ready(function () {
    let slickInitialized = false; // Флаг для отслеживания состояния слайдера

    function initSlick() {
        if (window.innerWidth < 767 && !slickInitialized) {
            $('.about-us__list').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                adaptiveHeight: true,
                autoplay: true,
				autoplaySpeed: 3000,
				speed: 1200,
            });
            slickInitialized = true;
        } else if (window.innerWidth >= 767 && slickInitialized) {
            $('.about-us__list').slick('unslick');
            slickInitialized = false;
        }
    }

    initSlick();

    $(window).on('resize', function () {
        initSlick();
    });
});
