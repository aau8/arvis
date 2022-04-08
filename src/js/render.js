// import { getSiblings } from './util/functions.js'

// Одинаковый размер карточек на странице проектов
if (document.querySelector('.s-projects__body') && window.innerWidth >= 1150) {
    const projectBody = document.querySelector('.s-projects__body')
    const columnElems = projectBody.querySelectorAll('.s-projects__column')
    let titleArr = []
    let columnArr = []
    
    for (let i = 0; i < columnElems.length; i++) {
        const column = columnElems[i];
        const cardElems = column.querySelectorAll('.spr-card')
        const title = column.querySelector('.s-projects__column-title')
        let cardArr = []

        titleArr.push(title.clientHeight)
    
        
        for (let i = 0; i < cardElems.length; i++) {
                const card = cardElems[i];
            
                cardArr.push(card.clientHeight)
        }

        columnArr.push(cardArr)
    }
    
    // Установка размера заголовкам
    const maxValueHeightTitle = Math.max(...titleArr)
    const titleElems = projectBody.querySelectorAll('.s-projects__column-title')
    
    for (let i = 0; i < titleElems.length; i++) {
        const title = titleElems[i];
        
        title.style.height = maxValueHeightTitle + 'px'
    }

    // Установка размера карточкам
    const columnArrLength = columnArr.map(e => { return e.length })
    const columnWithMoreCards = columnArrLength.indexOf( Math.max(...columnArrLength) )

    for (let i = 0; i < columnArrLength[columnWithMoreCards]; i++) {
        let cardArr = []
        
        for (let a = 0; a < columnElems.length; a++) {
            const column = columnElems[a];
            const card = column.querySelectorAll('.spr-card')[i]

            if (card != undefined) {

                cardArr.push(card.clientHeight)
            }
            else {
                cardArr.push(null)
            }
        }

        const maxValueHeightCard = Math.max(...cardArr)

        for (let a = 0; a < columnElems.length; a++) {
            const column = columnElems[a];
            const card = column.querySelectorAll('.spr-card')[i]

            if (card != undefined) {
                card.style.height = maxValueHeightCard + 'px'
            }
        }
    }
}