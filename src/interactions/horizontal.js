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
  const ITEM_ID = 'data-ix-horizontal-id';
  const ACTIVE_CLASS = 'is-active';

  //elements
  const sections = document.querySelectorAll(WRAP_SELECTOR);
  sections.forEach((section) => {
    //get elements
    let wrap = section;
    let inner = wrap.querySelector(INNER_SELECTOR);
    let track = wrap.querySelector(TRACK_SELECTOR);
    let items = gsap.utils.toArray(document.querySelectorAll(ITEM));
    let bgItems = gsap.utils.toArray(document.querySelectorAll(BG_ITEM));
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

    //make the first item active
    bgItems.forEach((bgItem, index) => {
      if (index === 0) {
        bgItem.classList.add(ACTIVE_CLASS);
      } else {
        bgItem.classList.remove(ACTIVE_CLASS);
      }
    });
    items.forEach((item, index) => {
      if (index === 0) {
        item.classList.add(ACTIVE_CLASS);
      } else {
        item.classList.remove(ACTIVE_CLASS);
      }
    });
    //function to activate an item based on its ID
    const activateSlide = function (ID) {
      bgItems.forEach((bgItem, index) => {
        const itemID = bgItem.getAttribute(ITEM_ID);
        if (itemID === ID) {
          console.log(itemID);
          bgItem.classList.add(ACTIVE_CLASS);
        } else {
          bgItem.classList.remove(ACTIVE_CLASS);
        }
      });
      items.forEach((item, index) => {
        const itemID = item.getAttribute(ITEM_ID);
        const itemTheme = attr('light', item.getAttribute(ITEM_THEME));
        if (itemID === ID) {
          item.classList.add(ACTIVE_CLASS);
          wrap.setAttribute('data-theme', itemTheme);
          // wrap.style.backgroundColor = 'red';
        } else {
          item.classList.remove(ACTIVE_CLASS);
        }
      });
    };
    //activate each item based on hover
    items.forEach((currentItem, index) => {
      if (!currentItem) return;
      const ID = currentItem.getAttribute(ITEM_ID);
      currentItem.addEventListener('mouseenter', function (e) {
        activateSlide(ID);
      });
    });
  });
};
