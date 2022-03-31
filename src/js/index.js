import '../scss/style.scss'
import './render.js' 
// import './animation.js'
import { find, findAll, removeAll, bodyLock, getSiblings } from "./util/functions.js"
import './sliders.js'



// Мобильное меню
menu()
function menu() {
	const burger = find('.burger')
    const menuClose = find('.menu-close')
	const menu = find('.menu');

	burger.addEventListener('click', (e) => {
		burger.classList.add('_active')
		menu.classList.add('_show')
		bodyLock()
	})

	menuClose.addEventListener('click', (e) => {
		burger.classList.remove('_active')
		menu.classList.remove('_show')
		bodyLock()
	})
}




// Функции для модальных окон
// modal()
// function modal() {
    
//     // Открытие модальных окон при клике по кнопке
//     openModalWhenClickingOnBtn()
//     function openModalWhenClickingOnBtn() {
//         const btnsOpenModal = document.querySelectorAll('[data-modal-open]');
    
//         for (let i = 0; i < btnsOpenModal.length; i++) {
//             const btn = btnsOpenModal[i];
    
//             btn.addEventListener('click', (e) => {
//                 const dataBtn = btn.dataset.modalOpen;
//                 const modal = document.querySelector(`#${dataBtn}`)

//                 openModal(modal)
//                 window.location.hash = dataBtn
//             });
//         }
//     }

//     // Открытие модального окна, если в url указан его id
//     openModalHash()
//     function openModalHash() {
//         if (window.location.hash) {
//             const hash = window.location.hash.substring(1)
//             const modal = document.querySelector(`.modal#${hash}`)
    
//             if (modal) openModal(modal)
//         }
//     }

//     // Показываем/убираем модальное окно при изменения хеша в адресной строке
//     checkHash()
//     function checkHash() {
//         window.addEventListener('hashchange', e => {
//             const hash = window.location.hash
//             const modal = document.querySelector(`.modal${hash}`)

//             if (find('.modal._show')) find('.modal._show').classList.remove('_show')
//             if (modal && hash != '') openModal(modal)
//         })
//     }

//     // Закрытие модального окна при клике по заднему фону
//     closeModalWhenClickingOnBg()
//     function closeModalWhenClickingOnBg() {
//         document.addEventListener('click', (e) => {
//             const target = e.target
//             const modal = document.querySelector('.modal._show')

//             if (modal && target.classList.contains('modal__body')) closeModal(modal)
//         })
//     }

//     // Закрытие модальных окон при клике по крестику
//     closeModalWhenClickingOnCross()
//     function closeModalWhenClickingOnCross() {
//         const modalElems = document.querySelectorAll('.modal')
//         for (let i = 0; i < modalElems.length; i++) {
//             const modal = modalElems[i];
//             const closeThisModal = modal.querySelector('.modal__close')
    
//             closeThisModal.addEventListener('click', () => {
//                 closeModal(modal)
//             })
//         }
//     }

//     // Закрытие модальных окон при нажатии по клавише ESC
//     closeModalWhenClickingOnESC()
//     function closeModalWhenClickingOnESC() {
//         const modalElems = document.querySelectorAll('.modal')
//         for (let i = 0; i < modalElems.length; i++) {
//             const modal = modalElems[i];
    
//             document.addEventListener('keydown', e => {
//                 if (e.key === 'Escape') closeModal(modal)
//             })
//         }
//     }

//     // Сброс id модального окна в url
//     function resetHash() {
//         const windowTop = window.pageYOffset
//         window.location.hash = ''
//         window.scrollTo(0, windowTop)
//     }

//     // Открытие модального окна
//     function openModal(modal) {
//         modal.classList.add('_show')
//         bodyLock(true)
//     }

//     // Закрытие модального окна
//     function closeModal(modal) {
//         modal.classList.remove('_show')
//         bodyLock(false)
//         resetHash()
//     }
// }