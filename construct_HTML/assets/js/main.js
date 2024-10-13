
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

        // sites-show-area
        $('.pre-built-sites .sites-show-button').on('click', function () {
        $('.all-sites-container, .demo-frame').toggleClass('active');
        $('.close-button-area').addClass('active');
      });
      $('.pre-built-sites .sites-hide-button').on('click', function () {
        $('.all-sites-container, .demo-frame').removeClass('active');
        $('.close-button-area').removeClass('active');
      });

      //--Global SideBar--
      $('.toggleMain-controls .bar-toggles, .cmn-overlay').on('click', function () {
        $('.toggleMain-controls .sidebar-wrapper, .cmn-overlay').toggleClass('active');
      });
      //--Global SideBar--

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
      // Hero Banner //
      const bannerwrapper = new Swiper(".banner-wrapper", {
        spaceBetween: 0,
        speed: 2500,
        effect: "fade",
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination-bn",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });

      // Testimonial Section Version 01 //
      const testimonialwrapper = new Swiper(".testimonial-wrapper", {
        spaceBetween: 0,
        speed: 1200,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-prevteam",
          prevEl: ".swiper-button-nextteam",
        },
        breakpoints: {
          1399: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        },
      });
       // Testimonial Section Version 01 //
       const testimonialwrapv2 = new Swiper(".testimonial-wrapv2", {
        spaceBetween: 0,
        speed: 1200,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-prevteam03",
          prevEl: ".swiper-button-nextteam03",
        },
        breakpoints: {
          1399: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        },
      });

      //--Follow Wrapper Slider --//
      const followwrapper = new Swiper(".live-wrapper", {
        spaceBetween: 24,
        speed: 1400,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-prevteam04",
          prevEl: ".swiper-button-nextteam04",
        },
        autoplay: {
          delay: 1200,
          disableOnInteraction: false,
        },
        breakpoints: {
          1199: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 14,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
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