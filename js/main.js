$(document).ready(function () {
    // Slider Carosel
    $('.single-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // Project Carosel
    $('.project-active').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    })
    // Blog active
    $('.blog-active').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //Brand Active
    $('.brand-acrive').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 6
            },
            600: {
                items: 6
            },
            1000: {
                items: 6
            }
        }
    })
});
$(document).ready(function(){
    
    
})