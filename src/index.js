import { attr } from './utilities';
import { hoverActive } from './interactions/hoverActive';
import { clickActive } from './interactions/clickActive';
import { scrollIn } from './interactions/scrollIn';
import { scrolling } from './interactions/scrolling';
import Swiper from 'swiper';
import { Navigation, Thumbs, Controller, Pagination, EffectFade } from 'swiper/modules';

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

    //options
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
