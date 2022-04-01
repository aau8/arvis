// import { getSiblings } from './util/functions.js'

// // Ползунок в меню
// window.addEventListener('load', e => {
//     const menu = document.querySelector('.menu__list')
//     const roller = menu.querySelector('.menu__roller')
//     const menuItemElems = menu.querySelectorAll('li')
//     const menuItemActive = menu.querySelector('._current-page')

//     const itemPosLeft = menuItemActive.getBoundingClientRect().left - menu.getBoundingClientRect().left
//     const itemWidth = menuItemActive.clientWidth

//     roller.style.left = itemPosLeft + 'px'
//     roller.style.width = itemWidth + 'px'
//     console.log(menuItemElems[1].getBoundingClientRect().left - menu.getBoundingClientRect().left)

//     for (let i = 0; i < menuItemElems.length; i++) {
//         const menuItem = menuItemElems[i];
        
//         menuItem.addEventListener('mousemove', e => {
//             const siblingItems = getSiblings(menuItem)

//             console.log('ok')
//             menuItem.style.opacity = 1

//             for (let i = 0; i < siblingItems.length; i++) {
//                 const item = siblingItems[i];
                
//                 item.style.opacity = .5
//             }
//         })

//         menuItem.addEventListener('mouseleave', e => {

//             for (let i = 0; i < menuItemElems.length; i++) {
//                 const menuItem = menuItemElems[i];
                
//                 menuItem.style.opacity = 1
//             }
//         })
//     }
// })