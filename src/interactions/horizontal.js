import { attr, checkBreakpoints } from '../utilities';
export const horizontal = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'horizontal';
  //selectors
  const WRAP_SELECTOR = '[data-ix-horizontal="wrap"]';
  const INNER_SELECTOR = '[data-ix-horizontal="inner"]';
  const TRACK_SELECTOR = '[data-ix-horizontal="track"]';
  const ITEM = '[data-ix-horizontal="item"]';
  const BG_ITEM = '[data-ix-horizontal="bg-item"]';

  //options
  const OPTION_MATCH_HEIGHT = 'data-ix-horizontal-start';
  const ITEM_THEME = 'data-ix-horizontal-theme';
  const ACTIVE_CLASS = 'is-active';

  //elements
  const sections = document.querySelectorAll(WRAP_SELECTOR);
  sections.forEach((section) => {
    //get elements
    let wrap = section;
    let inner = wrap.querySelector(INNER_SELECTOR);
    let track = wrap.querySelector(TRACK_SELECTOR);
    let items = gsap.utils.toArray(wrap.querySelectorAll(ITEM));
    let bgItems = gsap.utils.toArray(wrap.querySelectorAll(BG_ITEM));
    if (!wrap || !inner || !track) return;

    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;

    // function to set section height
    const setScrollDistance = function () {
      wrap.style.height = 'calc(' + track.offsetWidth + 'px + 100vh)';
    };
    //get option to see if height is matched
    let matchHeight = attr(true, wrap.getAttribute(OPTION_MATCH_HEIGHT));
    if (matchHeight) {
      setScrollDistance();
      ScrollTrigger.refresh();
      window.addEventListener('resize', setScrollDistance);
    }

    // create main horizontal scroll timeline
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      defaults: { ease: 'none' },
    });
    tl.to(track, { xPercent: -100 });

    // get container left position
    function containerLeft() {
      return inner.offsetLeft + 'px';
    }
    // get container right position
    function containerRight() {
      return inner.offsetLeft + inner.offsetWidth + 'px';
    }

    bgItems.forEach((bgItem, index) => {
      if (index === 0) {
        bgItem.classList.add(ACTIVE_CLASS);
      } else {
        bgItem.classList.remove(ACTIVE_CLASS);
      }
    });
    //activate each item based on scroll position
    items.forEach((currentItem, index) => {
      if (!currentItem) return;
      let bgItem = bgItems[index];
      const itemTheme = attr('light', currentItem.getAttribute(ITEM_THEME));
      let itemtl = gsap.timeline({
        scrollTrigger: {
          trigger: currentItem,
          containerAnimation: tl,
          // start when the left side of the element hits the left side of the container
          start: 'left ' + containerLeft(),
          end: 'right ' + containerLeft(),
          scrub: true,
          // markers: true,
          onEnter: () => {
            //on first item remove active class from all of them
            if (index === 0) {
              items.forEach((item) => {
                item.classList.remove(ACTIVE_CLASS);
              });
            }
            currentItem.classList.add(ACTIVE_CLASS);
            bgItem.classList.add(ACTIVE_CLASS);
            wrap.setAttribute('data-theme', itemTheme);
          },
          onLeave: () => {
            //all except last item
            if (index !== items.length + -1) {
              currentItem.classList.remove(ACTIVE_CLASS);
              bgItem.classList.remove(ACTIVE_CLASS);
              wrap.setAttribute('data-theme', itemTheme);
            }
          },
          onEnterBack: () => {
            currentItem.classList.add(ACTIVE_CLASS);
            bgItem.classList.add(ACTIVE_CLASS);
            wrap.setAttribute('data-theme', itemTheme);
          },
          onLeaveBack: () => {
            //all except first item
            if (index !== 0) {
              currentItem.classList.remove(ACTIVE_CLASS);
              bgItem.classList.remove(ACTIVE_CLASS);
              wrap.setAttribute('data-theme', itemTheme);
            }
          },
        },
        defaults: { ease: 'none' },
      });
      //   itemtl.to(wrap.querySelector('.scroll_horizontal_hero_title'), {
      //     opacity: 0,
      //     filter: 'blur(60px)',
      //   });
    });
    //DEMO INNER TIMELINES
    //   let tl2 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: wrap.querySelector(".scroll_horizontal_hero_wrap"),
    //       containerAnimation: tl,
    //       // start when the left side of the element hits the left side of the container
    //       start: "left " + containerLeft(),
    //       end: "right " + containerLeft(),
    //       scrub: true,
    //       // markers: true,
    //     },
    //     defaults: { ease: "none" },
    //   });
    //   tl2.to(wrap.querySelector(".scroll_horizontal_hero_title"), { opacity: 0, filter: "blur(60px)" });

    //   //
    //   let tl3 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: wrap.querySelector(".scroll_horizontal_pin_wrap"),
    //       containerAnimation: tl,
    //       start: "left " + containerLeft(),
    //       end: "right " + containerRight(),
    //       scrub: true,
    //       // markers: true,
    //     },
    //     defaults: { ease: "none" },
    //   });
    //   tl3.to(wrap.querySelector(".scroll_horizontal_pin_element"), { xPercent: 100 });
    //   tl3.from(wrap.querySelector(".scroll_horizontal_img"), { scale: 0.5 }, "<");
  });
};
