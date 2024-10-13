
//- 01 --PreLoader---//
//- 02 --Custom Header Sticky---//
//- 03 --Window On Scroll---//
//- 04 --Odometer Counter---//
//- 05 --Magnifique Popup---//
//- 06 --Header Auto Active Class---//
//- 07 --Custom Navbar Header---//
//- 08 --Swipper Slider---//
//- 09 --Custom Reply Box---//
//- 10 --Accordion---//
//- 11 --Dropdown Toggle---//
//- 12 --Current Year---//



"use strict";
document.addEventListener("DOMContentLoaded", function () {

  $(function ($) {

      // preloader
      $(".preloader").delay(300).animate({
        "opacity": "0"
      }, 500, function () {
        $(".preloader").css("display", "none");
      });

       // Select Code 
        const paragraph = document.querySelector('.box p');
        const text = paragraph.textContent;
        const newHtml = [...text].map(char => char.trim() ? `<span>${char}</span>` : char).join('');
        paragraph.innerHTML = newHtml;
       
      //--== Sticky Header ==--//
      
      $(window).on("scroll", function () {
        var fixed_top = $(".header-section");
        if ($(window).scrollTop() > 50) {
          fixed_top.addClass("header-fixed");
        }
        else {
          fixed_top.removeClass("header-fixed");
        }
          // Sticky Header
          if ($(window).scrollTop() > 50) {
            fixed_top.addClass("header-fixed");
          }
          else {
            fixed_top.removeClass("header-fixed");
          }
      });
      //--== Sticky Header ==--//

      //--== Aos Animation ==--//
     //>> Aos Animation <<//
    $(document).ready(function () {
      $('.title').attr({
        "data-aos": "zoom-in",
        "data-aos-duration": "2000"
      });
  
      AOS.init({
        once: true,
      });
    });
   //>> Aos Animation <<//
      //--== Aos Animation ==--//

      //--== Odometer Counter ==--//
      let windowHeight = $(window).height();
      $('.odometer').children().each(function () {
        if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });
      //--== Odometer Counter ==--//

       //--== Nice Select ==--//
       $('select').niceSelect();
       //--== Nice Select ==--//

      //--== Magnigiq Popup Initial ==--//
        $('.popup-video').magnificPopup({
          type: 'iframe'
        });

        $('.popup_img').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
            }
        });
      //--== Magnigiq Popup Initial ==--//


      // sites-show-area
      $('.pre-built-sites .sites-show-button').on('click', function () {
        $('.all-sites-container, .demo-frame').toggleClass('active');
        $('.close-button-area').addClass('active');
      });
      $('.pre-built-sites .sites-hide-button').on('click', function () {
        $('.all-sites-container, .demo-frame').removeClass('active');
        $('.close-button-area').removeClass('active');
      });
      
      //--== Navbar Header Auto Active Class Added ==--//
      var curUrl = $(location).attr('href');
      var terSegments = curUrl.split("/");
      var desired_segment = terSegments[terSegments.length - 1];
      var removeGarbage = desired_segment.split(".html")[0] + ".html";
      var checkLink = $('.menu-link a[href="' + removeGarbage + '"]');
      var targetClass = checkLink.addClass('active');
      targetClass.parents('.menu-item').addClass('active-parents');
      $('.active-parents > button').addClass('active'); 
      //--== Navbar Header Auto Active Class Added ==--//

      //--== Custom Navbar Header ==--//
      $('.navbar-toggle-btn').on('click', function () {
        $('.navbar-toggle-item').slideToggle(300);
        $('body').toggleClass('overflow-hidden');
        $(this).toggleClass('open');
      });
      $('.menu-item button').on('click', function () {
        $(this).siblings("ul").slideToggle(300);
      });
      //--== Custom Navbar Header ==--//
   
      //--== Swipper SLider Init Area ==--//
      //--Name: --/
      var swiper = new Swiper(".consaltation-verticalwrap", {
        direction: "vertical",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // mousewheel: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1400: {
              slidesPerView: 2,
              spaceBetween: 48,
          },
          992: {
              slidesPerView: 2,
              spaceBetween: 24,
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          576: {
              slidesPerView: 1,
              spaceBetween: 14,
          },
      }
      });
      //--Testimonial: --/
      const testimonial_version1 = new Swiper(".testimonial-version-wrap1", {
        spaceBetween: 24,
        speed: 1500,
        loop: true,
        centeredSlides: true,
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-prevteam",
          prevEl: ".swiper-button-nextteam",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
      //-- Service process//
      const browseservicewrap = new Swiper(".browse-service-wrap ", {
        spaceBetween: 0,
        speed: 1500,
        loop: true,
        autoplay: true,
        navigation: {
          nextEl: ".swiper-button-prevteam",
          prevEl: ".swiper-button-nextteam",
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
      //-- Service process//
      var swiper = new Swiper(".testimonial-wrap", {
        loop: true,
        slidesPerView: 1,
        slidesToShow: 1,
        spaceBetween: 24,
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-nextteam",
          prevEl: ".swiper-button-prevteam",
        },
        autoplay: {
          delay: 1200,
        },
        breakpoints: {
          1400: {
              slidesPerView: 2.1,
              spaceBetween: 24,
          },
          992: {
              slidesPerView: 2,
              spaceBetween: 14,
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 14,
          },
          550: {
              slidesPerView: 2,
              spaceBetween: 10,
          },
          450: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
      }
      });
      //--Banner: --/
      const progressCircle = document.querySelector(".autoplay-progresss svg");
      const progressContent = document.querySelector(".autoplay-progresss span");
      var swiper = new Swiper(".mybanner-slider", {
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        // effect: "fade",
        speed: 1500,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-paginationbn",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-nexts",
          prevEl: ".swiper-button-prevs"
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          }
        }
      });
      var swiper = new Swiper(".small-sliderwrap", {
        spaceBetween: 0,
        loop: false,
        centeredSlides: true,
        speed: 1500,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-nexts",
          prevEl: ".swiper-button-prevs"
        },
      });
      //--== Swipper SLider Init Area ==--//

      //--== Custom Comment / Review Reply Box ==--//
      $(".reply").on("click", function () {
        $(this).toggleClass("reply-active");
        $(this).parent().next(".reply__content").slideToggle();
      });
      //--== Custom Comment / Review Reply Box ==--//

      //--== Custom Accordion ==--//
      $('.accordion-single .header-area').on('click', function () {
        if ($(this).closest(".accordion-single").hasClass("active")) {
          $(this).closest(".accordion-single").removeClass("active");
          $(this).next(".content-area").slideUp();
        } else {
          $(".accordion-single").removeClass("active");
          $(this).closest(".accordion-single").addClass("active");
          $(".content-area").not($(this).next(".content-area")).slideUp();
          $(this).next(".content-area").slideToggle();
        }
      });
      //--== Custom Accordion ==--//

      //--== DropDown Toggle ==--//
      $('.dropdown-toggle').dropdown()
      //--== DropDown Toggle ==--//

      //--== Current Year ==--//
      $(".currentYear").text(new Date().getFullYear());
      //--== Current Year ==--//

    });
    
});

