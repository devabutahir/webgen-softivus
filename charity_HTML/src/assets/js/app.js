// preloader
// show navbar on scroll up
// toggle mobile menu
// mobile menu functions
// circle text animation
// all slider
// Odometer
// select 2 js
// progress bar
// Show current year on footer
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
            if (this.window.scrollY > 100) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        });
    }

    // menu active class
    const navLinks = document.querySelectorAll('.menu-link a');
    const currentUrl = window.location.href.split(/[?#]/)[0];
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

    const menuToggleBtn = document.querySelector(".menu-toggle-btn");
    const navbarArea = document.querySelector(".navbar-area");
    if (menuToggleBtn && navbarArea) {
        menuToggleBtn.addEventListener("click", function () {
            const icon = menuToggleBtn.querySelector("i")
            if (icon.classList.contains("ph-list")) {
                icon.classList.remove("ph-list");
                icon.classList.add("ph-x");
            } else {
                icon.classList.remove("ph-x");
                icon.classList.add("ph-list");
            }
            navbarArea.classList.toggle("open");
        });
    }

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
        circleText.innerHTML = circleText.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 14.5}deg)">${char}</span>`).join("");
    }

    // all slider
    if (document.querySelector(".hero-swiper")) {
        var swiper = new Swiper(".hero-swiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 5000,
            },
            freeMode: true,
            pagination: {
                el: ".hero-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
                },
            },
        });
    }

    if (document.querySelector(".ts-swiper")) {
        var swiper = new Swiper(".ts-swiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            centeredSlides: true,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            }
        });
    }

    // product slider
    var swiper = new Swiper(".swiper-thumb", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".product-swiper", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });


    // input donation form
    const inputDonationMoney = document.querySelectorAll(".input-donation-money")
    if (inputDonationMoney) {
        inputDonationMoney.forEach(donationMoney => {
            donationMoney.addEventListener("click", function () {
                const money = donationMoney.querySelector("input").value
                document.querySelector(".input-donation-value").value = money
            })
        }
        )
    }
    const customDonation = document.querySelector(".custom-donation")
    if (customDonation) {
        customDonation.addEventListener("click", function () {
            document.querySelector(".input-donation-value").readOnly = false;
        }
        )
    }

    // quntity increment and decrement
    const quantityIncrement = document.querySelectorAll(".quantityIncrement")
    const quantityDecrement = document.querySelectorAll(".quantityDecrement")
    if (quantityIncrement && quantityDecrement) {
        quantityIncrement.forEach(increment => {
            increment.addEventListener("click", function () {
                const value = parseInt(increment.parentElement.querySelector("input").value)
                increment.parentElement.querySelector("input").value = value + 1
            })
        })

        quantityDecrement.forEach(decrement => {
            decrement.addEventListener("click", function () {
                const value = parseInt(decrement.parentElement.querySelector("input").value)
                if (value > 1) {
                    decrement.parentElement.querySelector("input").value = value - 1
                }
            })
        })
    }

    // tab function
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    if (tabButtons && tabContents) {
        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                const tabNumber = button.getAttribute("data-tab");
                tabButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                tabContents.forEach(content => content.classList.remove("active"));
                document.querySelector(`.tab-content[data-tab="${tabNumber}"]`).classList.add("active");
            });
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

    // glight box
    if (document.querySelector(".glightbox")) {
        const lightbox = GLightbox({
            selector: ".glightbox"
        });
    }

    // select 2 js
    $(".sort-product").select2({
        width: "100%",
        dropdownAutoWidth: true,
        minimumResultsForSearch: Infinity,
    })

    // progress bar
    const progressBarWraps = document.querySelectorAll('.progress-bar-wrap');
    const updateProgressBar = (progressBarWrap) => {
        const progressValueElement = progressBarWrap.querySelector('.progress-bar-inner').getAttribute('data-value');
        // console.log(progressValueElement);
        const numericValue = parseInt(progressValueElement.replace('%', ''), 10);

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

    // Show current year on footer
    const yearEl = document.querySelector(".currentYear");
    if (yearEl) {
        yearEl.innerText = new Date().getFullYear();
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