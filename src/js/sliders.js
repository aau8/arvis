import Swiper, { Navigation, EffectFade, Thumbs, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

// Задний фон слайдера
const mainBg = new Swiper('.main-bg', {
  modules: [EffectFade],

  effect: 'fade',
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true
  },
});

// Слайдер на главном экране главной страницы
const mainSlider = new Swiper('.main-slider', {
  modules: [Pagination, Thumbs, EffectFade, Autoplay],

  allowTouchMove: false,
  // autoHeight: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: { // автопрокрутка
    delay: 10000, // задержка
  },

  pagination: {
    el: '.main-slider__pagin',
    type: 'bullets',
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className}"><span>0${index+1}</span></span>`
    }
  },
  thumbs: {
    swiper: mainBg
  }
});

const newsSlider = new Swiper('.s-news__slider', {
  modules: [Navigation],
  allowTouchMove: false,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 49,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      allowTouchMove: false,
      slidesPerView: 2,
      spaceBetween: 24,
    },
    700: {
      allowTouchMove: true,
      slidesPerView: 2,
      spaceBetween: 24,
    },
    0: {
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 24,
    }
  },

  navigation: {
    prevEl: '.s-news__arrow_prev',
    nextEl: '.s-news__arrow_next',
  },
})

const eventSlider = new Swiper('.s-event__slider', {
  modules: [Navigation],
  allowTouchMove: false,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 49,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      allowTouchMove: false,
      slidesPerView: 2,
      spaceBetween: 24,
    },
    700: {
      allowTouchMove: true,
      slidesPerView: 2,
      spaceBetween: 24,
    },
    0: {
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 24,
    }
  },

  navigation: {
    prevEl: '.s-event__arrow_prev',
    nextEl: '.s-event__arrow_next',
  },
})

const caseContentSlider = new Swiper('.sc-content__slider', {
  modules: [EffectFade],

  slidesPerView: 1,
  allowTouchMove: false,
  autoHeight: true,
  
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // navigation: {
  //   prevEl: '.s-case__arrow_prev',
  //   nextEl: '.s-case__arrow_next',
  // },

  // pagination: {
  //   el: '.sci-pagination',
  //   clickable: true,
  // }
})

const caseImagesSlider = new Swiper('.sc-images__slider', {
  modules: [Navigation, Pagination, EffectFade, Thumbs],

  slidesPerView: 1,
  

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  navigation: {
    prevEl: '.s-case__arrow_prev',
    nextEl: '.s-case__arrow_next',
  },

  pagination: {
    el: '.sci-pagination',
    clickable: true,
  },

  thumbs: {
    swiper: caseContentSlider,
  }
})

const videoSlider = new Swiper('.s-video__slider', {
  modules: [Navigation],
  allowTouchMove: false,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 49,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      // allowTouchMove: false,
      slidesPerView: 2,
      spaceBetween: 24,
    },
    700: {
      allowTouchMove: true,
      slidesPerView: 2,
      spaceBetween: 24,
    },
    0: {
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 24,
    }
  },

  navigation: {
    prevEl: '.s-video__arrow_prev',
    nextEl: '.s-video__arrow_next',
  },
})