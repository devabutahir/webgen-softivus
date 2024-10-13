// preloader
// toggle mobile menu
// mobile menu functions
// circle text animation
// accordion item
// radial progress bar
// text length limit
// progress bar
// Show current year on footer
// back to top

"use strict"

// preloader
setTimeout(() => {
    if (document.querySelector(".preloader")) {
        document.querySelector(".preloader").style.display = "none"
    }
}, 1000);

document.addEventListener('DOMContentLoaded', () => {


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

    // toggle mobile menu
    const menuToggleBtn = document.querySelector(".menu-toggle-btn");
    const navbarArea = document.querySelector(".menu-items-area");
    if (menuToggleBtn && navbarArea) {
        menuToggleBtn.addEventListener("click", function () {
            menuToggleBtn.classList.toggle("active");
            navbarArea.classList.toggle("active");
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
        circleText.innerHTML = circleText.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 6.65}deg)">${char}</span>`).join("");
    }

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
            // show initially
            if (accordionContent.classList.contains('show')) {
                header.querySelector('.accordion-icon').classList.add('rotate');
            } else {
                header.querySelector('.accordion-icon').classList.remove('rotate');
            }
        });
    });

    // radial progress bar
    document.querySelectorAll('svg.radial-progress').forEach(function (svg) {
        svg.querySelector('circle.complete').removeAttribute('style');
        // Add a flag to track if the animation has been triggered
        svg.setAttribute('data-animated', 'false');
    });

    // Function to animate the counter
    function animateCounter(element, start, end, duration, symbol = '') {
        let startTime = null;
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + ' ' + symbol;
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Function to activate progress animation on scroll
    function activateProgressOnScroll() {
        document.querySelectorAll('svg.radial-progress').forEach(function (svg) {
            var svgTop = svg.getBoundingClientRect().top + window.scrollY;
            var svgHeight = svg.clientHeight;
            var windowHeight = window.innerHeight;

            if (
                window.scrollY > svgTop - (windowHeight * 0.75) &&
                window.scrollY < svgTop + svgHeight - (windowHeight * 0.25)
            ) {
                // Check if the animation has already been triggered
                if (svg.getAttribute('data-animated') === 'false') {
                    svg.setAttribute('data-animated', 'true');
                    // Get percentage of progress
                    var percent = svg.getAttribute('data-percentage');
                    var radius = svg.querySelector('circle.complete').getAttribute('r');
                    var circumference = 2 * Math.PI * radius;
                    var strokeDashOffset = circumference - ((percent * circumference) / 100);
                    var circleComplete = svg.querySelector('circle.complete');
                    circleComplete.style.transition = 'stroke-dashoffset 1.25s';
                    circleComplete.style.strokeDashoffset = strokeDashOffset;
                    var symbol = svg.getAttribute('data-symbol');

                    var counter = svg.querySelector('text.counter');
                    animateCounter(counter, 0, percent, 1250, symbol);
                }
            }
        });
    }
    window.addEventListener('scroll', activateProgressOnScroll);
    window.dispatchEvent(new Event('scroll'));

    // text length limit
    const textLengthLimit = document.querySelectorAll(".text-length-limit");
    if (textLengthLimit) {
        textLengthLimit.forEach(limit => {
            limit.getAttribute("data-limit");
            limit.innerHTML = limit.innerText.length > limit.getAttribute("data-limit") ? limit.innerText.slice(0, limit.getAttribute("data-limit")) + "..." : limit.innerText;
        });
    }

    // progress bar
    const progressBarWraps = document.querySelectorAll('.progress-bar-wrap');
    const updateProgressBar = (progressBarWrap) => {
        const progressValueElement = progressBarWrap.querySelector('.progress-bar-inner').getAttribute('data-value');
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
});