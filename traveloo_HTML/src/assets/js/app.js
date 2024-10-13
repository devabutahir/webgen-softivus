// preloader
// toggle mobile menu
// mobile menu functions
// accordion item
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

    // scroll header 
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    window.onscroll = function () {
        let scrollPosition = window.pageYOffset;
        if (scrollPosition > headerHeight) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
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

    // toggle mobile menu
    const menuToggleBtn = document.querySelector(".menu-toggle-btn");
    const navbarArea = document.querySelector(".navbar-area");
    if (menuToggleBtn && navbarArea) {
        menuToggleBtn.addEventListener("click", function () {
            // menuToggleBtn.classList.toggle("active");
            navbarArea.classList.toggle("open");
        });
    }
    // outside click
    if (menuToggleBtn && navbarArea) {
        document.addEventListener("click", function (event) {
            if (!menuToggleBtn.contains(event.target) && !navbarArea.contains(event.target)) {
                navbarArea.classList.remove("open");
            }
        });
    }

    // mobile menu functions
    const menuLinks = document.querySelectorAll(".menu-item button");
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            link.parentElement.classList.toggle("active");
        });
    });

    // search form
    const searchBtn = document.querySelector(".search-btn");
    const searchForm = document.querySelector(".search-form-wrapper");
    const searchCloseBtn = document.querySelector(".search-close-btn");
    if (searchBtn && searchForm) {
        searchBtn.addEventListener("click", function () {
            searchForm.classList.toggle("active");
        });
        searchCloseBtn.addEventListener("click", function () {
            searchForm.classList.remove("active");
        });
    }


    // search form
    const sidebarBtn = document.querySelector(".sidebar-toggle-btn");
    const sidebarContent = document.querySelector(".sidebar");
    const sidebarCloseBtn = document.querySelector(".sidebar-close-btn");
    if (sidebarBtn && sidebarContent) {
        sidebarBtn.addEventListener("click", function () {
            sidebarContent.classList.toggle("active");
        });
        sidebarCloseBtn.addEventListener("click", function () {
            sidebarContent.classList.remove("active");
        });
    }
    // outside click
    document.addEventListener("click", function (event) {
        if (!sidebarBtn.contains(event.target) && !sidebarContent.contains(event.target)) {
            sidebarContent.classList.remove("active");
        }
    });

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

    // // Show current year on footer
    // const yearEl = document.querySelector(".currentYear");
    // if (yearEl) {
    //     yearEl.innerText = new Date().getFullYear();
    // }

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