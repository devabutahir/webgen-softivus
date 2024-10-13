import Lenis from 'lenis';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type';
import Odometer from 'odometer';
import Splitting from "splitting";
import GLightbox from 'glightbox';
import VanillaTilt from 'vanilla-tilt';
import Choices from 'choices.js';

document.addEventListener("DOMContentLoaded", function () {

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({ smooth: true, duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize splitting
    Splitting();

    // Initialize Glightbox
    GLightbox({
        selector: '.glightboxVideo'
    });
    const tourGallery = GLightbox({
        selector: '.tour-gallery',
        openEffect: 'zoom',
        closeEffect: 'zoom',
        loop: true,
        slideEffect: 'slide',
    });

    // Initialize Swipers
    const initSwiper = (selector, config) => {
        const element = document.querySelector(selector);
        if (element) {
            new Swiper(element, config);
        }
    };

    initSwiper('.hero-swiper', {
        modules: [Autoplay, Parallax, Pagination],
        speed: 1500,
        autoplay: { delay: 6000, },
        parallax: true,
        loop: true,
        pagination: {
            el: ".hero-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<span class="bullet-dot"></span>' + '<span class="bullet-number">' + (+ index + 1) + '</span>' + '</span>';
            },
        },
        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideBg = swiper.slides[i].querySelector('.slide-bg');
                    if (slideBg) {
                        slideBg.setAttribute('data-swiper-parallax', 0.5 * swiper.width);
                    }

                }
            },
            resize: function () {
                this.update();
            }
        }
    });


    initSwiper('.destinations-swiper', {
        modules: [Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        speed: 100,
        autoplay: { delay: 6000, },
        navigation: { nextEl: '.dest-next', prevEl: '.dest-prev' },
        breakpoints: {
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            991: { slidesPerView: 4 },
            1400: { slidesPerView: 5 }
        }
    });

    initSwiper('.testimonial-swiper', {
        modules: [Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        speed: 1000,
        autoplay: { delay: 6000, },
        navigation: { nextEl: '.testi-next', prevEl: '.testi-prev' },
    });

    // Initialize and observe odometers
    const initializeOdometer = (element) => {
        const odometerValue = element.getAttribute('data-odometer-final');
        const od = new Odometer({ el: element, value: 0, format: '(,ddd)', theme: 'default' });
        od.update(odometerValue);
    };

    const odometerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializeOdometer(entry.target);
                odometerObserver.unobserve(entry.target);
            }
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });
    });

    document.querySelectorAll('.odometer').forEach(el => odometerObserver.observe(el));


    // Initialize tilt
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        reverse: true
    });

    // Initialize choices
    const tourMonth = document.getElementById('tour-month');
    if (tourMonth) {
        new Choices(tourMonth, {
            // searchEnabled: false,
            shouldSort: false,
        });
    }
    const tourType = document.getElementById('tour-type');
    if (tourType) {
        new Choices(tourType, {
            // searchEnabled: false,
            shouldSort: false,
        });
    }



    // gsap
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger,);

    // Blur animation
    gsap.utils.toArray(".section-blur").forEach(section => {
        gsap.set(section, { filter: "blur(20px)" });
        gsap.to(section, {
            filter: "blur(0px)",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top center",
                scrub: true
            }
        });
    });

    // Image reveal animation
    const revealAnimation = (selector, axis, percent, scale) => {
        gsap.utils.toArray(selector).forEach(revealItem => {
            const image = revealItem.querySelector("img");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: revealItem,
                    toggleActions: "play none none reverse",
                }
            });
            tl.set(revealItem, { autoAlpha: 1 })
                .from(revealItem, 1.5, { [`${axis}Percent`]: -percent, ease: Power2.out })
                .from(image, 1.5, { [`${axis}Percent`]: percent, scale, delay: -1.5, ease: Power2.out });
        });
    };

    revealAnimation(".reveal-left", 'x', 100, 1.3);
    revealAnimation(".reveal-bottom", 'y', 100, 1.3);

    // Title animation
    const splitAndAnimate = (selector, splitType, child, triggerStart, staggerDelay) => {
        gsap.utils.toArray(selector).forEach(title => {
            new SplitType(title, { types: splitType });
            const elements = title.querySelectorAll(`.${child}`);
            elements.forEach((el, index) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: `top ${triggerStart}%`,
                        end: "bottom 60%",
                        scrub: false,
                        toggleActions: "play none none reverse"
                    }
                }).from(el, {
                    duration: 0.8,
                    x: 70,
                    delay: index * staggerDelay,
                    autoAlpha: 0
                });
            });
        });
    };

    splitAndAnimate(".text-animation-line", "lines", "line", 90, 0.03);
    splitAndAnimate(".text-animation-word", "words", "word", 90, 0.01);
})