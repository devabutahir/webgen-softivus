import Lenis from 'lenis';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Power2, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type';
import Odometer from 'odometer';


document.addEventListener("DOMContentLoaded", function () {

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({ smooth: true, duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize Swipers
    const initSwiper = (selector, config) => {
        const element = document.querySelector(selector);
        if (element) {
            new Swiper(element, config);
        }
    };

    initSwiper('.text-slider', {
        modules: [Autoplay],
        slidesPerView: 0.5,
        spaceBetween: 16,
        loop: true,
        speed: 10000,
        autoplay: { delay: 1, disableOnInteraction: false },
        breakpoints: {
            576: { slidesPerView: 1 },
            768: { slidesPerView: 1.2 },
            991: { slidesPerView: 1 },
            1200: { slidesPerView: 1.2 },
            1400: { slidesPerView: 1.3 },
            1600: { slidesPerView: 1.4 },
            1800: { slidesPerView: 1.7 }
        }
    });

    initSwiper('.testimonial-slider', {
        modules: [Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        speed: 10000,
        autoplay: { delay: 1, disableOnInteraction: false },
        navigation: { nextEl: '.ts-next', prevEl: '.ts-prev' },
        breakpoints: {
            576: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.8 },
            991: { slidesPerView: 2 },
            1400: { slidesPerView: 2.5 }
        }
    });

    initSwiper('.brand-swiper', {
        modules: [Autoplay],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 10000,
        autoplay: { delay: 1, disableOnInteraction: false },
        breakpoints: {
            420: { slidesPerView: 1.5 },
            576: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1600: { slidesPerView: 5 }
        }
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
                    // toggleActions: "play reverse restart reverse"
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

    splitAndAnimate(".title-animation-char", "chars", "char", 90, 0.03);
    splitAndAnimate(".title-animation-line", "lines", "line", 90, 0.03);
    splitAndAnimate(".text-animation", "words", "word", 90, 0.01);


    // section reveal
    document.querySelectorAll(".reveal-container").forEach(container => {
        gsap.to(".reveal-panel", {
            yPercent: -100,
            ease: "none",
            stagger: 0.5,
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "+=300%",
                scrub: true,
                pin: true,
            }
        });
        gsap.set(".reveal-panel", { zIndex: (i, targets) => targets.length - i });
    });



})