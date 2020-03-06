$(document).ready(function(){

        // Home sliders
        if ($('.home__slider_list')) {
            $('.home__slider_list').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                fade: true,
                speed: 2000,
            });
        }
        if ($('.home__portfolio_slider_list')) {
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
            });
        }

        // Popup Search
        $('#header__popup_search_btn').click(function(e) {
            $('#popup_search').css({ "bottom": "0" });
        });
        $('#side__popup_search_btn').click(function(e) {
            $('#popup_search').css({ "bottom": "0" });
        });
        $('.popup_search_close').click(function(e) {
            $('.popup_search').css({ "bottom": "100%" });
        });
    }
);