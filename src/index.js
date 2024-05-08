import { attr } from './utilities';
import { hoverActive } from './interactions/hoverActive';
import { clickActive } from './interactions/clickActive';
import { scrollIn } from './interactions/scrollIn';
import { scrolling } from './interactions/scrolling';

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

  const workHeroSlider = function () {
    //selectors
    const WRAP = '[data-ix-workslider="wrap"]';
    const SWIPER_BG = '[data-ix-workslider="swiper-bg"]';
    const SWIPER_THUMBS = '[data-ix-workslider="swiper-thumbs"]';
    const SWIPER_TEXT = '[data-ix-workslider="swiper-text"]';
    const SLIDE_THUMBS = '[data-ix-workslider="thumbs-slide"]';
    const CURRENT_SLIDE = '[data-ix-workslider="current-slide"]';
    const TOTAL_SLIDE = '[data-ix-workslider="total-slides"]';
    //options
    //classes
    const ACTIVE_CLASS = 'is-active';

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
      sliderComponent.querySelector(TOTAL_SLIDE).textContent = totalSlides;

      const bgSwiper = new Swiper(sliderComponent.querySelector(SWIPER_BG), {
        slidesPerView: 1,
        speed: 400,
        effect: 'fade',
        allowTouchMove: false,
      });

      const thumbsSwiper = new Swiper(sliderComponent.querySelector(SWIPER_THUMBS), {
        slidesPerView: 1,
        speed: 600,
        loop: true,
        loopedSlides: 8,
        slideToClickedSlide: true,
      });

      const textSwiper = new Swiper(sliderComponent.querySelector(SWIPER_TEXT), {
        slidesPerView: 'auto',
        speed: 600,
        loop: true,
        loopedSlides: 8,
        slideToClickedSlide: true,
        mousewheel: true,
        keyboard: true,
        centeredSlides: true,
        slideActiveClass: ACTIVE_CLASS,
        slideDuplicateActiveClass: ACTIVE_CLASS,
        thumbs: {
          swiper: bgSwiper,
        },
        navigation: {
          nextEl: sliderComponent.querySelector('.swiper-next'),
          prevEl: sliderComponent.querySelector('.swiper-prev'),
        },
      });

      textSwiper.controller.control = thumbsSwiper;
      thumbsSwiper.controller.control = textSwiper;

      textSwiper.on('slideChange', function (e) {
        let slideNumber = numberWithZero(e.realIndex + 1);
        sliderComponent.querySelector(CURRENT_SLIDE).textContent = slideNumber;
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
