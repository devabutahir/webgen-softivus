
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

      //--== Sticky Header ==--//
      $(window).on("scroll", function () {
        
        var fixed_top = $(".header-section, .cmn-fixed");
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

           // Check Scroll 
           if ($(this).scrollTop() < 600) {
            ScrollTop.removeClass("active");
          } else {
            ScrollTop.addClass("active");
          }

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
    
      });
      //--== Sticky Header ==--//

         // Click to Scroll Top
        var ScrollTop = $(".scrollToTop");
        $('.scrollToTop').on('click', function () {
          $('html, body').animate({
            scrollTop: 0
          }, 600);
          return false;
        });


        // scroll down Button
        var scrollButton = document.querySelector('#scrollButton');
        if(scrollButton){
          scrollButton.addEventListener('click', function() {
            window.scrollTo({
              top: window.scrollY + bannerHeight,
              behavior: 'smooth'
            });
          });
        }

      //--== Aos Animation ==--//
      $(document).ready(function () {
        $('.title').attr({
          "data-aos": "zoom-in",
          "data-aos-duration": "2000"
        });
    
        AOS.init({
          once: true,
        });
       });
      //--== Aos Animation ==--//



      // sites-show-area
      $('.pre-built-sites .sites-show-button').on('click', function () {
        $('.all-sites-container, .demo-frame').toggleClass('active');
        $('.close-button-area').addClass('active');
      });
      $('.pre-built-sites .sites-hide-button').on('click', function () {
        $('.all-sites-container, .demo-frame').removeClass('active');
        $('.close-button-area').removeClass('active');
      });

      //--== Progress Bar ==--//
      progress_bar();
      function progress_bar() {
        var speed = 30;
        var items = $('.progress_bar').find('.progress_bar_item');
        
          items.each(function() {
              var item = $(this).find('.progress');
              var itemValue = item.data('progress');
              var i = 0;
              var value = $(this);
          
              var count = setInterval(function(){
                  if(i <= itemValue) {
                      var iStr = i.toString();
                      item.css({
                          'width': iStr+'%'
                      });
                      value.find('.item_value').html(iStr +'%');
                  }
                  else {
                      clearInterval(count);
                  }
                  i++;
              },speed);
          });
      }
      //--== Progress Bar ==--//

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
      //--Testimonail One Slider --//
      const popularclasswrap = new Swiper(".popular-class-wrap", {
        speed: 1400,
        loop: true,
        autoplay: {
          delay: 1200,
          disableOnInteraction: false,
        },
        breakpoints: {
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        },
      });
      //--Trainers Slider --//
      const classtrinerwrap = new Swiper(".classtriner-wrap", {
        speed: 1400,
        loop: true,
        autoplay: {
          delay: 1200,
          disableOnInteraction: false,
        },
        breakpoints: {
          1199: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 14,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      });

      //--Tes --//
      const testimonialwrapv1 = new Swiper(".testimonial-wrapv1", {
        spaceBetween: 24,
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".cmn-pagination",
        },
        breakpoints: {
          1199: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 14,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      });
       //--contact rasturent --//
       const chinatownslidewrap = new Swiper(".chinatown-slidewrap", {
        spaceBetween: 24,
        speed: 1200,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".chinatown-btn-n",
          prevEl: ".chinatown-btn-p",
        },
      });

      //Shop Details
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 24,
          }
        },
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
      //Shop Details
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

      // Custom Tabs
      $(".tablinks .nav-links").each(function () {
        var targetTab = $(this).closest(".singletab");
        targetTab.find(".tablinks .nav-links").each(function() {
          var navBtn = targetTab.find(".tablinks .nav-links");
          navBtn.click(function(){
            navBtn.removeClass('active');
            $(this).addClass('active');
            var indexNum = $(this).closest("li").index();
            var tabcontent = targetTab.find(".tabcontents .tabitem");
            $(tabcontent).removeClass('active');
            $(tabcontent).eq(indexNum).addClass('active');
          });
        });
      });

      //--== DropDown Toggle ==--//
      $('.dropdown-toggle').dropdown()
      //--== DropDown Toggle ==--//

      //--== Current Year ==--//
      $(".currentYear").text(new Date().getFullYear());
      //--== Current Year ==--//

    });
    
  });