"use strict";
document.addEventListener("DOMContentLoaded", function () {

  $(function ($) {

    // preloader
    $("#preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $("#preloader").css("display", "none");
    });

    // Click to Scroll Top
    var ScrollTop = $(".scroll-wrapper");
    $('.scroll-wrapper').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    // Check window location host and iframe src host
    function checkIframeSrcHost() {
      const iframes = document.getElementsByTagName('iframe');
      for (let i = 0; i < iframes.length; i++) {
          const iframeHost = new URL(iframes[i].src).host;
          if (iframeHost === 'bundle-three.vercel.app') {
              return true;
          }
      }
      return false;
    }
    if (window.location.host === 'bundle-three.vercel.app' || checkIframeSrcHost()) {
      $('.pre-built-sites.position-relative').removeClass('d-none');
    }    

    // scroll down Button
    var scrollButtons = document.querySelectorAll('.scrollButton');
    scrollButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var bannerHeight = document.querySelector('.banner-section.index-one');
        if(bannerHeight){
          bannerHeight = bannerHeight.clientHeight;
        }
        window.scrollTo({
          top: window.scrollY + bannerHeight,
          behavior: 'smooth'
        });
      });
    });

    // Sticky Header
    var fixed_top = $(".header-section.desktop-menu");
    if ($(window).scrollTop() > 50) {
      fixed_top.addClass("animated fadeInDown header-fixed");
    }
    else {
      fixed_top.removeClass("animated fadeInDown header-fixed");
    }

    // window on scroll function
    $(window).on("scroll", function () {

      // Sticky Header
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }

      // Check Scroll 
      if ($(this).scrollTop() < 600) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }

      // Odometer Init 
      let windowHeight = $(window).height();
      $('.odometer').children().each(function () {
        if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });

    });

    // Header Active
    $('.single-item .cmn-head').on('click', function () {
      $(this).parents('.single-item').toggleClass('active');
      $(this).parents('.single-item').siblings().removeClass('active');
    });

    // comments-area
    $('.comments-area .reply-btn').on('click', function () {
      $(this).closest(".single-area").find(".comment-form").slideToggle();
    });
      
    // sites-show-area
    $('.pre-built-sites .sites-show-button').on('click', function () {
      $('.all-sites-container').toggleClass('active');
      $('.close-button-area').addClass('active');
    });
    $('.pre-built-sites .sites-hide-button').on('click', function () {
      $('.all-sites-container').removeClass('active');
      $('.close-button-area').removeClass('active');
    });

    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });    

    // Box Style 
    const targetBtn = document.querySelectorAll('.box-style')
    if (targetBtn) {
      targetBtn.forEach((element) => {
        element.addEventListener('mousemove', (e) => {
          const x = e.offsetX + 'px';
          const y = e.offsetY + 'px';
          element.style.setProperty('--x', x);
          element.style.setProperty('--y', y);
        })
      })
    }

    // Password Show Hide
    $('.show-hide-pass').on('click', function () {
      var passwordInput = $($(this).siblings(".pass-box input"));
      var icon = $(this);
      if (passwordInput.attr("type") == "password") {
        passwordInput.attr("type", "text");
        icon.html("visibility");
      } else {
        passwordInput.attr("type", "password");
        icon.html("visibility_off");
      }
    });

    // Circle Text
    const texts = document.querySelectorAll(".circle-text.first p");
    const text2 = document.querySelectorAll(".circle-text.second p");
    texts.forEach((text) => {
      text.innerHTML = text.innerText.split('').map((char, i) =>
        `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
      ).join('');
    });
    text2.forEach((text2) => {
      text2.innerHTML = text2.innerText.split('').map((char, i) =>
        `<span style="transform:rotate(${i * 6}deg)">${char}</span>`
      ).join('');
    });
    
    // magnific-popup
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

    // gridGallery
    $('.popup_img').magnificPopup({
        type:'image',
        gallery:{
            enabled: true
        }
    });
    
    // Navbar Auto Active Class 
    var curUrl = $(location).attr('href');
    var terSegments = curUrl.split("/");
    var desired_segment = terSegments[terSegments.length - 1];
    var removeGarbage = desired_segment.split(".html")[0] + ".html";
    var checkLink = $('.menu-link a[href="' + removeGarbage + '"]');
    var targetClass = checkLink.addClass('active');
    targetClass.parents('.menu-item').addClass('active-parents');
    $('.active-parents > button').addClass('active');  

    $(".navbar-toggle-wrapper").on('mouseenter mouseleave', function () {
      $('.sidebar-wrapper').toggleClass('hide-sdfsdfsdf');
    });

    // navbar custom
    $('.navbar-toggle-btn').on('click', function () {
      $('.sidebar-wrapper').toggleClass('active');
      $('.sidebar-menu').toggleClass('active');
      $(this).toggleClass('open');
    });
    $('.menu-close-btn').on('click', function () {
      $('.navbar-toggle-btn').click();
    });
    $('.menu-item button').on('click', function () {
      $(this).siblings("ul").slideToggle(300);
    });

    // set font size in menu 
    $('.custom-nav button, .custom-nav a').addClass('fs-two');
    if ($('.custom-nav').parents('.desktop-menu-inner').length > 0) {
      $('.desktop-menu .custom-nav button, .desktop-menu .custom-nav a').removeClass('fs-two');
      $('.desktop-menu .custom-nav button, .desktop-menu .custom-nav a').addClass('fs-six');
    }

    // hover add active 
    $('.hover-active .single-item').on('mouseenter', function () {
      $(this).addClass('active');
      $('.hover-active .single-item').not(this).removeClass('active');
    });

    // Current Year
    $(".currentYear").text(new Date().getFullYear());

    // Social Item Remove
    $('.image-popup-btn').on('click', function () {
      $(this).closest(".single-item").find('a').click();
    });

    // Social Item Remove
    $('.social-hide-btn').on('click', function () {
      $(this).parents(".img-area").toggleClass('active');
      if ($('.img-area').hasClass("active")) {
        $('.active .social-hide-btn i').html("remove");
      } else {
        $('.social-hide-btn i').html("add");
      }
    });

    // target Items Remove from anywhere click
    var targetBox = $('.target-item');
    $(document).on('click', function(event) {
      if (!targetBox.is(event.target) && !targetBox.has(event.target).length) {
        targetBox.removeClass('active');
      }

      // navbar toggle wrapper toggle
      if($('.header-section .target-item').hasClass('active')){
        $('.navbar-toggle-wrapper').css('opacity', '0');
      }else{
        $('.navbar-toggle-wrapper').css('opacity', '1');
      }

    });
    
    // Mouse Follower
    const follower = document.querySelector(".mouse-follower .cursor-outline");
    const dot = document.querySelector(".mouse-follower .cursor-dot");
    window.addEventListener("mousemove", (e) => {
      follower.animate(
        [{
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out"
          }],
        {
          duration: 3000,
          fill: "forwards"
        }
      );
      dot.animate(
        [{
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out"
          }],
        {
          duration: 1500,
          fill: "forwards"
        }
      );
    });

    // Mouse Follower Hide Function
    $("a, button").on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('hide-cursor');
    });

    // Input Increase
    var minVal = 1, maxVal = 20;
    $(".increaseQty").on('click', function(){
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function(){
          $(".clicked").removeClass("clicked");
      },100);
      var value = $parentElm.find(".qtyValue").val();
      if (value < maxVal) {
          value++;
      }
      $parentElm.find(".qtyValue").val(value);
    });
    $(".decreaseQty").on('click', function(){
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function(){
          $(".clicked").removeClass("clicked");
      },100);
      var value = $parentElm.find(".qtyValue").val();
      if (value > 1) {
          value--;
      }
      $parentElm.find(".qtyValue").val(value);
    });

    var terElement = $('h1, h2, h3, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-head');
      $(this).toggleClass('highlight-cursor-head');
    });
    
    var terElement = $('p');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-para');
      $(this).toggleClass('highlight-cursor-para');
    });

    // Custom Tabs
    $(".tabLinks .nav-links").each(function () {
      var targetTab = $(this).closest(".singleTab");
      targetTab.find(".tabLinks .nav-links").each(function () {
        var navBtn = targetTab.find(".tabLinks .nav-links");
        navBtn.on('click', function () {
          navBtn.removeClass('active');
          $(this).addClass('active');
          var indexNum = $(this).closest("li").index();
          var tabContent = targetTab.find(".tabContents .tabItem");
          $(tabContent).removeClass('active');
          $(tabContent).eq(indexNum).addClass('active');
        });
      });
    });

    // tabLinks used in slide
    $('.tabLinks .nav-links').on('click', function () {
      $('.tabLinks .nav-links').removeClass('pe-none');
      $(this).addClass('pe-none');
      $(this).parents(".tabLinks").find(".slider").click();
    });

    // tabLinks add active 
    $('.tabLinks .nav-links').on('mouseenter', function () {
      $(this).addClass('active');
      $('.tabLinks .nav-links').not(this).removeClass('active');
    });

    // progress-area
    let progressBars = $('.progress-area');
    let observer = new IntersectionObserver(function(progressBars) {
      progressBars.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          let width = $(entry.target).find('.progress-bar').attr('aria-valuenow');
          let count = 0;
          let time = 1000 / width;
          let progressValue = $(entry.target).find('.progress-value');
          setInterval(() => {
            if (count == width) {
              clearInterval();
            } else {
              count += 1;
              $(progressValue).text(count +"%")
            }
          }, time);
          $(entry.target).find('.progress-bar').css({"width": width + "%", "transition": "width 1s linear"});
        }else{
          $(entry.target).find('.progress-bar').css({"width": "0%", "transition": "width 1s linear"});
        }
      });
    });
    progressBars.each(function() {
      observer.observe(this);
    });
    $(window).on('unload', function() {
      observer.disconnect();
    });

    // custom Accordion
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

    $(".text-limit").each(function() {
      var textContainer = $(this);
      var maxLength = parseInt(textContainer.attr("text-limit"));
      var text = textContainer.text();
      if (text.length > maxLength) {
        var truncatedText = text.substring(0, maxLength);
        var fullText = text;
        textContainer.empty();
        var textSpan = $('<span class="text-content" style="color: inherit; font-family: inherit; font-size: inherit; font-weight: inherit;"></span>');
        textContainer.append(textSpan);
        textSpan.text(truncatedText);
        var readMoreButton = $('<span class="read-more-button ms-1" style="color: inherit; font-family: inherit; font-size: inherit; font-weight: inherit;">...</span>');
        textContainer.append(readMoreButton);

        textSpan.on('mouseenter', function() {
          textSpan.text(fullText);
          readMoreButton.hide();
        });
        textSpan.on('mouseleave', function() {
          textSpan.text(truncatedText);
          readMoreButton.show();
        });
      }
    });

    // header text animation
    function toggleActive(elements, index) {
      elements.eq(index).addClass("active");
      setTimeout(function() {
          elements.eq(index).removeClass("active");
          toggleActive(elements, (index + 1) % elements.length);
      }, 5000);
    }
    $(".head-text").each(function() {
        var cmnTextElements = $(this).find(".cmn-text");
        toggleActive(cmnTextElements, 0);
    });

    // Dropdown Active Remove
    $(".close-btn").on('click', function () {
      $('.single-item').removeClass('active');
    });

  });

});