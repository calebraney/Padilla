import { attr } from './utilities';
import { hoverActive } from './interactions/hoverActive';
import { clickActive } from './interactions/clickActive';
import { scrollIn } from './interactions/scrollIn';
import { scrolling } from './interactions/scrolling';
import Swiper from 'swiper';
import { Navigation, Thumbs, Controller, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script Loaded');

  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }

  //////////////////////////////
  //Global Variables
  const resetScrollTriggers = document.querySelectorAll('[data-ix-reset]');

  //////////////////////////////
  //GSAP Animations

  const navFadeScroll = function () {
    //elements
    const NAV = '[data-ix-navfade="true"]';
    //classes
    const HIDDEN_CLASS = 'is-hidden';

    const nav = document.querySelector(NAV);
    if (!nav) return;

    //variable to check last scroll distance
    let lastScrollTop = 0;

    function scrollDirectionListener() {
      //check the current scroll distance from the top
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      //compare current scroll distance to last scroll distance
      if (currentScroll === 0) {
        //if use is at the top
        nav.classList.add(HIDDEN_CLASS);
      } else {
        //user is not at the top
        nav.classList.remove(HIDDEN_CLASS);
      }
    }
    window.addEventListener('scroll', scrollDirectionListener);
  };

  //////////////////////////////
  //Sliders

  const caseSplide = function () {
    //Swiper selectors
    const WRAP = '[data-ix-caseslider="wrap"]';
    const SWIPER = '.case_slider_layout';
    //Button selectors
    const NEXT_BUTTON = '.splide__arrow--prev';
    const PREVIOUS_BUTTON = '.splide__arrow--next';
    //classes
    const ACTIVE_CLASS = 'is-active';
    const DISABLED_CLASS = 'is-disabled';

    document.querySelectorAll(WRAP).forEach(function (wrap) {
      if (!wrap) return;
      const nextButtonEl = wrap.querySelector(NEXT_BUTTON);
      const previousButtonEl = wrap.querySelector(PREVIOUS_BUTTON);
      const swiperEl = wrap.querySelector(SWIPER);
      if (!nextButtonEl || !previousButtonEl || !swiperEl) return;

      const splide = new Splide(swiperEl, {
        type: 'loop', //slide or loop
        speed: 800, // transition speed in miliseconds
        dragAngleThreshold: 60, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        gap: '3.5%',
        perPage: 3,
        perMove: 1,
        arrows: { prev: previousButtonEl, next: nextButtonEl },
        classes: {
          // Add classes for arrows.
          prev: PREVIOUS_BUTTON,
          next: NEXT_BUTTON,
        },
      });
      splide.mount();
    });
  };

  // const caseSlider = function () {
  //   //Swiper selectors
  //   const WRAP = '[data-ix-caseslider="wrap"]';
  //   const SWIPER = '[data-ix-caseslider="swiper"]';
  //   //Button selectors
  //   const NEXT_BUTTON = '.swiper-next';
  //   const PREVIOUS_BUTTON = '.swiper-prev';
  //   //classes
  //   const ACTIVE_CLASS = 'is-active';
  //   const DISABLED_CLASS = 'is-disabled';

  //   document.querySelectorAll(WRAP).forEach(function (wrap) {
  //     if (!wrap) return;
  //     const nextButtonEl = wrap.querySelector(NEXT_BUTTON);
  //     const previousButtonEl = wrap.querySelector(PREVIOUS_BUTTON);
  //     const swiperEl = wrap.querySelector(SWIPER);
  //     if (!nextButtonEl || !previousButtonEl || !swiperEl) return;

  //     const swiper = new Swiper(swiperEl, {
  //       modules: [Navigation, Autoplay],
  //       slidesPerView: 1,
  //       // slidesPerGroup: 1,
  //       speed: 600,
  //       // loop: false,
  //       // updateOnMove: true, // affects timing
  //       // allowTouchMove: true,
  //       // followFinger: true,
  //       // freeMode: false,
  //       // spaceBetween: 32,
  //       // slideActiveClass: ACTIVE_CLASS,
  //       // slideDuplicateActiveClass: ACTIVE_CLASS,
  //       navigation: {
  //         nextEl: nextButtonEl,
  //         prevEl: previousButtonEl,
  //         lockClass: DISABLED_CLASS,
  //       },
  //       autoplay: {
  //         delay: 3000,
  //       },
  //       on: {
  //         init: function () {
  //           console.log('swiper:', this);
  //         },
  //       },
  //     });
  //   });
  // };

  const workHeroSlider = function () {
    //selectors
    const WRAP = '[data-ix-workslider="wrap"]';
    const SWIPER_BG = '[data-ix-workslider="swiper-bg"]';
    const SWIPER_THUMBS = '[data-ix-workslider="swiper-thumbs"]';
    const SWIPER_TITLES = '[data-ix-workslider="swiper-titles"]';
    const SLIDE_THUMBS = '[data-ix-workslider="thumbs-slide"]';
    const CURRENT_SLIDE_TEXT = '[data-ix-workslider="current-slide"]';
    const TOTAL_SLIDE_TEXT = '[data-ix-workslider="total-slides"]';
    //global selectors
    const NEXT_BUTTON = '.swiper-next';
    const PREVIOUS_BUTTON = '.swiper-prev';
    //classes
    const ACTIVE_CLASS = 'is-active';
    const DISABLED_CLASS = 'is-disabled';

    //utility function to add 0 to number
    function numberWithZero(num) {
      if (num < 10) {
        return '0' + num;
      } else {
        return num;
      }
    }

    document.querySelectorAll(WRAP).forEach(function (sliderComponent) {
      if (!sliderComponent) return;
      //get the total slides
      let totalSlides = numberWithZero(sliderComponent.querySelectorAll(SLIDE_THUMBS).length);
      //set the total slides into the total text content
      sliderComponent.querySelector(TOTAL_SLIDE_TEXT).textContent = totalSlides;

      const bgSwiper = new Swiper(sliderComponent.querySelector(SWIPER_BG), {
        modules: [Controller, EffectFade],
        slidesPerView: 1,
        speed: 400,
        loop: true,
        effect: 'fade',
        EffectFade: {
          crossFade: true,
        },
        allowTouchMove: false,
        on: {
          slideChange: function () {
            // console.log('bg swiper:', this.activeIndex);
          },
        },
      });

      const thumbsSwiper = new Swiper(sliderComponent.querySelector(SWIPER_THUMBS), {
        modules: [Controller],
        slidesPerView: 1,
        centeredSlides: false,
        speed: 600,
        loop: true,
        slideToClickedSlide: true,
        allowTouchMove: false,
        on: {
          slideChange: function () {
            // console.log('thumbs swiper:', this.activeIndex);
          },
        },
      });

      const textSwiper = new Swiper(sliderComponent.querySelector(SWIPER_TITLES), {
        modules: [Navigation, Thumbs, Controller],
        slidesPerView: 'auto',
        speed: 600,
        loop: true,
        slideToClickedSlide: true,
        mousewheel: false,
        keyboard: false,
        centeredSlides: true,
        slideActiveClass: ACTIVE_CLASS,
        slideDuplicateActiveClass: ACTIVE_CLASS,
        thumbs: {
          swiper: thumbsSwiper,
          slideThumbActiveClass: ACTIVE_CLASS,
        },
        Controller: {
          control: bgSwiper,
          by: 'slide',
        },
        navigation: {
          nextEl: sliderComponent.querySelector(NEXT_BUTTON),
          prevEl: sliderComponent.querySelector(PREVIOUS_BUTTON),
          disabledClass: DISABLED_CLASS,
        },
        on: {
          slideChange: function () {
            // console.log('title swiper:', this.activeIndex);
          },
        },
      });

      // textSwiper.controller.control = bgSwiper;
      thumbsSwiper.controller.control = bgSwiper;

      textSwiper.on('slideChange', function (e) {
        let slideNumber = numberWithZero(e.realIndex + 1);
        sliderComponent.querySelector(CURRENT_SLIDE_TEXT).textContent = slideNumber;
      });
    });
  };

  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        //global interactions
        hoverActive(gsapContext);
        clickActive(gsapContext);
        //custom interactions
        navFadeScroll();
        workHeroSlider();
        caseSplide();
        // caseSlider()
        //conditional interactions
        if (!reduceMotion) {
          scrolling(gsapContext);
          scrollIn(gsapContext);
        }
      }
    );
  };
  gsapInit();

  //reset gsap on click of reset triggers
  resetScrollTriggers.forEach(function (item) {
    item.addEventListener('click', function (e) {
      ScrollTrigger.refresh();
    });
  });
});
