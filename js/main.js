$(document).ready(function() {

    // $('a[href="#"]').click( (e) => e.preventDefault() );

    // Home sliders
    if ($('.home__slider_list').length) {
        $('.home__slider_list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.home__slider_prev'),
            nextArrow: $('.home__slider_next'),
            // autoplay: true,
            fade: true,
            speed: 1000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        autoplay: true,
                        infinite: true
                    }
                },
            ]
        });
    }
    if ($('.home__portfolio_slider_list').length) {
        //custom function showing current slide
        let $status = $('.home__portfolio_slider_pagination');
        let $slickElement = $('.home__portfolio_slider_list');

        $('.home__portfolio_slider_list').slick({
            infinite: false,
            // dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.home__portfolio_slider_prev'),
            nextArrow: $('.home__portfolio_slider_next'),
            // customPaging : function() {
            //     $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //         //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            //         let slideNumber = '0' + ((currentSlide ? currentSlide : 0) + 1);
            //         $status.text(slideNumber + '/' + slick.slideCount);
            //         for (let i = 0; i < slideCount; i++) {
            //             $status.text(i + '/' + slick.slideCount);
            //             let span = $('<span class="home__portfolio_slider_pagination_item"></span>').text(slideNumber);
            //             $status.append(span);
            //         }
            //     });
            // },
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        autoplay: true,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1.5,
                        arrows: false,
                        autoplay: true
                    }
                }
            ]
        });
    }

    // Menu open
    $('#side__menu_btn').click(function() {
        $(this).toggleClass('open');
        $('#menu').toggleClass('open');
        $('#menu').hasClass('open')
            ? $('body').css({ overflow: 'hidden' })
            : $('body').css({ overflow: 'visible' });
    });

    // Popup Search
    $('#header__popup_search_btn').click(function() {
        $('#popup_search').toggleClass('visible');
        $('#popup_search').hasClass('visible')
            ? $('body').css({ overflow: 'hidden' })
            : $('body').css({ overflow: 'visible' });
    });
    $('#side__popup_search_btn').click(function() {
        $('#popup_search').toggleClass('visible');
        $('#popup_search').hasClass('visible')
            ? $('body').css({ overflow: 'hidden' })
            : $('body').css({ overflow: 'visible' });
    });
    $('#popup_search__close').click(function() {
        $('#popup_search').toggleClass('visible');
        $('#popup_search').hasClass('visible')
            ? $('body').css({ overflow: 'hidden' })
            : $('body').css({ overflow: 'visible' });
    });

    // Popup Callback
    $('#header__callback').click(function() {
        $('#popup_callback').toggleClass('visible');
        $('#popup_callback').hasClass('visible')
            ? $('body').css({ overflow: 'hidden' })
            : $('body').css({ overflow: 'visible' });
    });
    $('#popup_callback__close').click(function() {
        $('#popup_callback').toggleClass('visible');
        $('#popup_callback').hasClass('visible')
            ? $('body').css({ overflow: 'hidden' })
            : $('body').css({ overflow: 'visible' });
    });

    // var scroll = new SmoothScroll('a[href*="#"]', {
    //     speed: 500,
    //     speedAsDuration: true
    // });

    // Adding border bottom to header
    if ( $('#contacts').length || $('#dealers').length || $('#error').length || $('#news').length || $('#portfolio').length
        || $('#instructions').length || $('#repair').length || $('#about').length || $('#service').length || $('#production').length ) {
    
        $('.header__nav_search_callback').css( "border-bottom", "1px solid #333333" );
    }
});