"use strict";
document.addEventListener("DOMContentLoaded", function () {

    $(function ($) {

        /* niceSelect init */
        $("select").niceSelect();

        /* Splitting init */
        Splitting();

        // lenis matchMedia Init
        ScrollTrigger.matchMedia({
          "(min-width: 992px)": function() {

            // horizontal scroll 
            const horizontalSections = document.querySelectorAll(".horizontal");
            if(horizontalSections){
              horizontalSections.forEach(section => {
                let horizontalItems = gsap.utils.toArray(section.querySelectorAll(".horizontal-item"));
                gsap.to(horizontalItems, {
                  xPercent: -100 * (horizontalItems.length - 1),
                  ease: "sine.out",
                  scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 9,
                    snap: 2 / (horizontalItems.length - 4),
                    end: "+=" + section.offsetWidth
                  }
                });
              });
            }

          },
          
          // responsive
          "(max-width: 991px)": function() {

            const horizontalSections = document.querySelectorAll(".horizontal");
            if(horizontalSections){
              horizontalSections.forEach(section => {
                let horizontalItems = gsap.utils.toArray(section.querySelectorAll(".horizontal-item"));
                gsap.to(horizontalItems, {
                  xPercent: -100 * (horizontalItems.length - 1),
                  scrollTrigger: {
                    pin: false,
                  }
                });
              });
            }

          },

        });
        
        // gSap animation start

        // Visible From Right Animation
        if(document.querySelector('.visible-from-right')){
          let visibleFromRight = document.querySelectorAll(".visible-from-right")
          visibleFromRight.forEach((visibleFromRight) => {
            let split_item = new SplitText(visibleFromRight, { type: "chars, words" })
            gsap.from(split_item.chars, { duration: 1, x: 95, autoAlpha: 0, stagger: 0.15 });
          })
        }

        // Visible From Right Slowly Animation
        let visibleSlowlyRight = document.querySelectorAll(".visible-slowly-right");
        if ($(visibleSlowlyRight).length > 0) {
          let char_come = gsap.utils.toArray(visibleSlowlyRight);
          char_come.forEach((char_come) => {
            let split_char = new SplitText(char_come, {
              type: "chars, words",
              lineThreshold: 0.5,
            });
            const tl2 = gsap.timeline({
              scrollTrigger: {
                trigger: char_come,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
              },
            });
            tl2.from(split_char.chars, {
              duration: 0.8,
              x: 70,
              autoAlpha: 0,
              stagger: 0.03,
            });
          });
        }

        // Visible From Bottom Animation
        let visibleFromBottom = gsap.utils.toArray(".visible-from-bottom");
        visibleFromBottom.forEach(splitArea => {
          const trigger = gsap.timeline({
            scrollTrigger: {
              trigger: splitArea,
              start: 'top 90%',
              end: 'bottom 60%',
              scrub: false,
              markers: false,
            }
          });
          const contentSplitted = new SplitText(splitArea, { type: "words, lines" });
          gsap.set(splitArea, { perspective: 400 });
          contentSplitted.split({ type: "lines" })
          trigger.from(contentSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -75, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
        });
    
        // Visible Slowly From Bottom Animation 
        const visibleSlowlyBottom = document.querySelectorAll(".visible-slowly-bottom");
        function visibleSlowly() {
          visibleSlowlyBottom.forEach(splitArea => {
            if (splitArea.anim) {
              splitArea.anim.progress(1).kill();
              splitArea.split.revert();
            }
            splitArea.split = new SplitText(splitArea, {
              type: "lines,words,chars",
              linesClass: "split-line"
            });
            splitArea.anim = gsap.from(splitArea.split.chars, {
              scrollTrigger: {
                trigger: splitArea,
                toggleActions: "restart pause resume reverse",
                start: 'top 90%',
              },
              duration: 0.8,
              ease: "circ.out",
              y: 70,
              stagger: 0.02
            });
          });
        }
        ScrollTrigger.addEventListener("refresh", visibleSlowly);
        visibleSlowly();

        // image right to left 
        gsap.registerPlugin(ScrollTrigger);
            let revealContainers = document.querySelectorAll(".reveal-one");
            revealContainers.forEach((container) => {
            let image = container.querySelector(".reveal-image-one");
            let rts = gsap.timeline({
                scrollTrigger: {
                trigger: container,
                toggleActions: "restart none none reset",
                start: "top 90%",
                end: "top 0%",
                }
            });
            rts.set(container, {
                autoAlpha: 1
            });
            rts.from(container, 1.5, {
                xPercent: 100,
                ease: Power2.out
            });
            rts.from(image, 1.5, {
                xPercent: -100,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });

        // image left to right 
        let revealContainersSecond = document.querySelectorAll(".reveal-three");
        revealContainersSecond.forEach((container) => {
          let image = container.querySelector(".reveal-image-three");
          let rts = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              toggleActions: "restart none none reset",
            }
          });
          rts.set(container, {
            autoAlpha: 1
          });
          rts.from(container, 1.5, {
            xPercent: -100,
            ease: Power2.out
          });
        });

        // reveal-third
        gsap.registerPlugin(ScrollTrigger);
        let revealContainersThird = document.querySelectorAll(".reveal-third");
        revealContainersThird.forEach((container) => {
          let image = container.querySelector(".reveal-image-third");
          let rts = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              toggleActions: "restart none reset",
              start: "top 0%",
              end: "bottom 0%",
            }
          });

          rts.set(container, {
            autoAlpha: 1
          });
          rts.from(container, 1.5, {
            xPercent: 100,
            ease: Power2.out
          });
          rts.from(image, 1.5, {
            xPercent: -100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
          });
        });          

        // box-content
        const boxContent = document.querySelectorAll('.box-content')
        boxContent.forEach((el) => {
          const hoverContent = el.querySelector('.hover-content')
          el.addEventListener('mouseenter', (e) => {
            gsap.to(hoverContent, { autoAlpha: 1 })
          })
          el.addEventListener('mouseleave', (e) => {
            gsap.to(hoverContent, { autoAlpha: 0 })
          })
          el.addEventListener('mousemove', (e) => {
            gsap.set(hoverContent, {
              force3D: true,
              x: e.offsetX - 100, y: e.offsetY - 100 
            })
          })
        })

        // reveal-fourth
        let revealContainersFourth = document.querySelectorAll(".reveal-fourth");
        revealContainersFourth.forEach((container) => {
          let image = container.querySelector("img");
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              toggleActions: "restart none none reset"
            }
          });
          tl.set(container, { autoAlpha: 1 });
          tl.from(container, 1.5, {
            xPercent: 100,
            ease: Power2.out
          });
          tl.from(image, 1.5, {
            xPercent: -100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
          });
        });

      // sticky section
      if(document.querySelector(".sticky-area")){

        ScrollTrigger.matchMedia({
          "(min-width: 767px)": function() {
          
            let st = ScrollTrigger.create({
              trigger: ".sticky-wrapper",
              pin: ".sticky-area",
              start: "top center",
              end: "+=100",
            });

          },
        });

      }
      
      if(document.querySelector(".scroll-down-wrapper")){
        gsap.to(".scroll-down-circle", {
          y: -300,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".scroll-down-circle-wrapper",
            start: "top 25%",
            end: "30% top",
            scrub: true,
            markers: false,
            duration: 15,
          },
        });
      }

      // vanilla tilt animation start
      // button Vivacity
      let btnVivacity = document.querySelectorAll(".btn-vivacity");
      if (btnVivacity) {
        VanillaTilt.init(btnVivacity, {
          max: 14,
          speed: 2800,
          perspective: 200,
        });
      }

      // button Vivacity Second
      let btnVivacitySec = document.querySelectorAll(".btn-vivacity-second");
      if (btnVivacitySec) {
        VanillaTilt.init(btnVivacitySec, {
          max: 14,
          speed: 2800,
          perspective: 500,
        });
      }

      // img Vivacity
      let imgVivacity = document.querySelectorAll(".image-vivacity");
      if (imgVivacity) {
        VanillaTilt.init(imgVivacity, {
          max: 3,
          speed: 6800,
          perspective: 450,
        });
      }

      // content Vivacity
      let contentVivacity = document.querySelectorAll(".content-vivacity");
      if (contentVivacity) {
        VanillaTilt.init(contentVivacity, {
          max: 4,
          speed: 8000,
          perspective: 650,
        });
      }

      // content-sec Vivacity
      let contentSecVivacity = document.querySelectorAll(".content-sec-vivacity");
      if (contentSecVivacity) {
        VanillaTilt.init(contentSecVivacity, {
          max: 20,
          speed: 1000,
          perspective: 1000,
        });
      }

      // banner Carousel
      let bannerCarousel = document.querySelector('.banner-carousel');
      let bannerCarouselBtn = document.querySelector('.sidebar-mid-area');
      if(bannerCarousel){
        const mySwiper = new Swiper(bannerCarousel, {
          loop: true,
            autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          pagination: {
            el: '.sidebar-mid-area .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '</span>';
            },
            
          },
        });
        function renderCustom(swiper) {
          var current = swiper.realIndex + 1;
          var total = swiper.slides.length;
          var total = total-2;
          bannerCarouselBtn.querySelector('.curString').innerHTML = ('0' + current).slice(-2);
          bannerCarouselBtn.querySelector('.totalString').innerHTML = '0' + total;
        }
        renderCustom(mySwiper);
        mySwiper.on('slideChange', function () {
          renderCustom(mySwiper);
        });
      }

      // portfolio slider 
      let portfolioCarousel = document.querySelector('.portfolio-carousel');
      if(portfolioCarousel){
        const swiper = new Swiper(portfolioCarousel, {
          loop: true,
          centeredSlides: true,
          paginationClickable: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          navigation: {
            nextEl: portfolioCarousel.closest('section').querySelector('.ara-next'),
            prevEl: portfolioCarousel.closest('section').querySelector('.ara-prev'),
          },
          breakpoints: {
            1200: {
                slidesPerView: 2.3,
            },
            768: {
              slidesPerView: 1.5,
            },
            575: {
                slidesPerView: 1.3,
            },
          }
        });
      }

      // photography slider 
      let photographyCarousel = document.querySelector('.photography-carousel');
      if(photographyCarousel){
        const swiper = new Swiper(photographyCarousel, {
          loop: true,
          centeredSlides: true,
          paginationClickable: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          breakpoints: {
            1600: {
                slidesPerView: 5.4,
            },
            768: {
              slidesPerView: 3.5,
            },
            575: {
                slidesPerView: 2.3,
            },
            480: {
                slidesPerView: 1.3,
            },
          }
        });
      }

      // brand slider 
      let brandCarousel = document.querySelector('.brand-carousel');
      if(brandCarousel){
        const swiper = new Swiper(brandCarousel, {
          loop: true,
          centeredSlides: true,
          paginationClickable: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 2,
          paginationClickable: true,
          breakpoints: {
            1800: {
                slidesPerView: 7,
            },
            1700: {
              slidesPerView: 6,
            },
            1200: {
                slidesPerView: 5,
            },
            992: {
              slidesPerView: 7,
            },
            767: {
                slidesPerView: 4,
            },
            575: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
            },
          }
        });
      }

      // testimonial slider 
      let testimonialCarousel = document.querySelector('.testimonial-carousel');
      if(testimonialCarousel){
        const swiper = new Swiper(testimonialCarousel, {
          loop: true,
          centeredSlides: true,
          paginationClickable: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          spaceBetween: 24,
          slidesPerView: 1,
          paginationClickable: true,
          navigation: {
            nextEl: testimonialCarousel.closest('section').querySelector('.ara-next'),
            prevEl: testimonialCarousel.closest('section').querySelector('.ara-prev'),
          },
          pagination: {
            el: testimonialCarousel.querySelector('.slider-pagination'),
            clickable: true,
          },
        });
      }

      /* Wow js */
      new WOW().init();

    });
});