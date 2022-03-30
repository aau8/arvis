import Swiper, { Navigation, EffectFade, Thumbs, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

const mainBg = new Swiper('.main-bg', {
  modules: [EffectFade],

  effect: 'fade',
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true
  },
});

const mainSlider = new Swiper('.main-slider', {
  modules: [Pagination, Thumbs, EffectFade, Autoplay],

  effect: 'fade',
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true
  },
  autoplay: { // автопрокрутка
    delay: 3000, // задержка
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