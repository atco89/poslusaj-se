$(document).ready(function () {


    jQuery("#carousel").owlCarousel({
        autoplay: false,
        lazyLoad: true,
        loop: true,
        margin: 20,
        dots: true,
        /*
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        navText: ["<img src='assets/images/arrow-left.png' class='img-fluid'>", "<img src='assets/images/arrow-right.png' class='img-fluid'>"],
        responsive: {
            0: {
                items: 1,
                dots: true,

            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 3
            }
        }
    });

    jQuery("#carousel2").owlCarousel({
        autoplay: false,
        lazyLoad: true,
        loop: true,
        margin: 20,
        dots: true,
        /*
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        navText: ["<img src='assets/images/arrow-left.png' class='img-fluid'>", "<img src='assets/images/arrow-right.png' class='img-fluid'>"],
        responsive: {
            0: {
                items: 1,
                dots: true,

            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 3
            }
        }
    });


    jQuery("#carousel3").owlCarousel({
        autoplay: false,
        lazyLoad: true,
        loop: true,
        margin: 20,
        dots: true,
        /*
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
                items: 1,
                dots: true,

            },

            600: {
                items: 1
            },

            1024: {
                items: 1
            },

            1366: {
                items: 1
            }
        }
    });

    jQuery("#carousel4").owlCarousel({
        autoplay: false,
        lazyLoad: true,
        loop: true,
        margin: 20,
        dots: true,
        /*
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
                items: 1,
                dots: true,

            },

            600: {
                items: 1
            },

            1024: {
                items: 1
            },

            1366: {
                items: 1
            }
        }
    });

    jQuery("#carousel5").owlCarousel({
        autoplay: false,
        lazyLoad: true,
        loop: true,
        margin: 20,
        dots: true,
        /*
       animateOut: 'fadeOut',
       animateIn: 'fadeIn',
       */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
                items: 2,
                dots: true,

            },

            600: {
                items: 2
            },

            1024: {
                items: 2
            },

            1366: {
                items: 3
            }
        }
    });


    $(".nav-item .nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    })
    $(".navbar-toggler").click(function () {
        $(this).parents(".header").toggleClass("red-bg");

    })


    $(window).scroll(function () {
        var sticky = $('.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    // Select all links with hashes
    $('.nav-link')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });
});