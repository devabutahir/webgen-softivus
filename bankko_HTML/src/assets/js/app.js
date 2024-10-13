// preloader
// show navbar on scroll up
// toggle mobile menu
// mobile menu functions
// circle text animation
// all slider
// Odometer
// accordion item
// select 2 js
// progress bar
// password show hide
// Show current year on footer
// range slider
// apex charts
// back to top
// aos animation

"use strict"

// preloader
setTimeout(() => {
    if (document.querySelector(".preloader")) {
        document.querySelector(".preloader").style.display = "none"
    }
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
    // show navbar on scroll up
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", function () {
            if (this.window.scrollY > 150) {
                header.classList.add("bg-primary4");
            } else {
                header.classList.remove("bg-primary4");
            }
        });
    }

    // menu active class
    const navLinks = document.querySelectorAll('.menu-link a');
    const currentUrl = window.location.href;
    if (navLinks) {
        navLinks.forEach(link => {
            if (link.href === currentUrl) {
                link.classList.add('active');
                // Add active class to the parent menu-item if it exists
                let parentMenuItem = link.closest('.menu-item');
                if (parentMenuItem) {
                    parentMenuItem.classList.add('active');
                    if (parentMenuItem.parentElement.closest(".menu-item")) {
                        parentMenuItem.parentElement.closest(".menu-item").classList.add('active')
                    }
                }
            }
        });
    }

    // toggle mobile menu
    $(".menu-toggle-btn").click(function () {
        $(this).find("i").toggleClass("ti-menu-2 ti-x");
        $(".navbar-area").toggleClass("open");
    });

    // mobile menu functions
    const menuLinks = document.querySelectorAll(".menu-item button");
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            link.parentElement.classList.toggle("active");
        });
    });

    // circle text animation
    let circleText = document.querySelector(".circle-text p");
    if (circleText) {
        circleText.innerHTML = circleText.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`).join("");
    }

    // all slider
    if (document.querySelector(".banner-3d-swiper")) {
        var swiper = new Swiper(".banner-3d-swiper", {
            paginationClickable: true,
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            speed: 1000,
            autoplay: {
                delay: 3000,
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 140,
                depth: 150,
                modifier: 1,
                slideShadows: false,
            },
        });
    }

    if (document.querySelector(".banner-text-slider")) {
        var swiper = new Swiper(".banner-text-slider", {
            slidesPerView: .8,
            loop: true,
            speed: 5000,
            autoplay: {
                delay: 1,
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1.2,
                },
                991: {
                    slidesPerView: 1.5,
                },
                1200: {
                    slidesPerView: 1.8,
                },
                1440: {
                    slidesPerView: 2,
                },
                1800: {
                    slidesPerView: 3,
                }
            }
        });
    }

    if (document.querySelector(".service-slider")) {
        var swiper = new Swiper(".service-slider", {
            slidesPerView: 1.5,
            spaceBetween: 24,
            centeredSlides: true,
            loop: true,
            speed: 8000,
            autoplay: {
                delay: 1,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2.5,
                },
                991: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 3.5,
                },
                1600: {
                    slidesPerView: 4.5,
                }
            }
        });
    }

    if (document.querySelector(".testimonial-slider")) {
        var swiper = new Swiper(".testimonial-slider", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            speed: 8000,
            autoplay: {
                delay: 1,
            },
            breakpoints: {
                767: {
                    slidesPerView: 1.8,
                },
                1200: {
                    slidesPerView: 2,
                },
                1800: {
                    slidesPerView: 2.5,
                }
            }
        });
    }

    if (document.querySelector(".brand-swiper")) {
        var swiper = new Swiper(".brand-swiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            speed: 8000,
            autoplay: {
                delay: 1,
            },
            breakpoints: {
                767: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 4,
                },
                1800: {
                    slidesPerView: 5,
                }
            }
        });
    }

    // Odometer
    $(window).on("scroll", function () {
        let windowHeight = $(window).height();
        $('.odometer').each(function () {
            if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
                $(this).each(function () {
                    $(this).html($(this).attr("data-odometer-final"));
                });
            }
        });
    })

    // accordion item
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionContent = header.parentNode;
            accordionContent.classList.toggle('show');
            // Optionally, collapse other accordion sections
            const otherContents = document.querySelectorAll('.accordion-item');
            otherContents.forEach(content => {
                if (content !== accordionContent) {
                    content.classList.remove('show');
                }
            });
        });
    });

    // select 2 js
    $(".select-time").select2({
        width: "100%",
        minimumResultsForSearch: Infinity,
    })
    $(".select-time-2").select2({
        dropdownCssClass: "test",
        width: "100%",
        dropdownAutoWidth: true,
        minimumResultsForSearch: Infinity,

    })

    // progress bar
    const progressBarWraps = document.querySelectorAll('.progress-bar-wrap');
    const updateProgressBar = (progressBarWrap) => {
        const progressValueElement = progressBarWrap.querySelector('.progress-value');
        const progressValue = progressValueElement.textContent.trim();
        const numericValue = parseInt(progressValue.replace('%', ''), 10);

        const progressBarInner = progressBarWrap.querySelector('.progress-bar-inner');
        progressBarInner.style.width = numericValue + '%';
    };
    const ProgressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateProgressBar(entry.target);
                observer.unobserve(entry.target); // Stop observing once the animation is done
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });
    progressBarWraps.forEach(progressBarWrap => {
        ProgressObserver.observe(progressBarWrap);
    });

    // password show hide
    const togglePasswordIcon = document.querySelector('.password-toggler');
    if (togglePasswordIcon) {
        togglePasswordIcon.addEventListener('click', function () {
            const passwordField = togglePasswordIcon.parentElement.querySelector('input');
            if (passwordField.getAttribute('type') === 'password') {
                passwordField.setAttribute('type', 'text');
            } else {
                passwordField.setAttribute('type', 'password');
            }
        });
    }

    // Show current year on footer
    const yearEl = document.querySelector(".year");
    if (yearEl) {
        yearEl.innerText = new Date().getFullYear();
    }

    // range slider
    const rangeSlider = document.querySelector("#range-input")
    const loanInput = document.querySelector("#loan-input")
    if (rangeSlider && loanInput) {
        loanInput.addEventListener('input', function (e) {
            rangeSlider.value = loanInput.value
        })
        rangeSlider.addEventListener('input', function (e) {
            loanInput.value = rangeSlider.value
        })
    }

    // apex charts
    var options = {
        series: [72],
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#D9D9D9",
                    strokeWidth: '30%',
                    margin: 5, // margin is in pixels
                },
                hollow: {
                    size: '70%',
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '32px',
                        fontWeight: 800,
                        color: '#FFF',
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10,
                right: 0,
                left: 0,
                bottom: 0
            }
        },
        fill: {
            type: 'solid',
            colors: ['#C5FF4A', '#C5FF4A'],
            fillOpacity: 1,
        },
        labels: ['Balance'],
    };
    if (document.querySelector("#radialChart")) {
        var radialChart = new ApexCharts(document.querySelector("#radialChart"), options);
        radialChart.render();
    }

    // back to top
    const backToTop = document.querySelector(".back-to-top")
    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (this.window.scrollY > 200) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        })

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    }

    // aos animation
    AOS.init({
        startEvent: 'DOMContentLoaded',
        offset: 120,
        delay: 5,
        duration: 1000,
        once: true,
        easing: 'ease',
    });
});