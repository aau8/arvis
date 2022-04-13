import { removeAll } from './util/functions.js'

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

// Увеличение элементов иллюстрации при наведении на карточке в разделе "Какие организации входят в АРВИС"

const cardElems = document.querySelectorAll('.so-card')

for (let i = 0; i < cardElems.length; i++) {
    const card = cardElems[i];
    const cardData = card.dataset.part
    const part = document.getElementById(cardData)
    
    card.addEventListener('mouseenter', e => {
        part.classList.add('_active')
    })
    
    card.addEventListener('mouseleave', e => {
        part.classList.remove('_active')
    })
}

// Списки выбора
select()
function select() {
    // Проверяем есть ли выбранные элементы при загрузке страницы. Если есть, то селект заполняется
    const selectedItemElems = document.querySelectorAll('.select-dropdown__item._selected')

    for (let i = 0; i < selectedItemElems.length; i++) {
        const selectedItem = selectedItemElems[i];
        const select = selectedItem.closest('.select')
        const sTitle = select.querySelector('.select-input__title')

        sTitle.innerText = selectedItem.innerHTML
        select.classList.add('_valid')
    }

    // Если пользователь кликнул по селекту, то он открывается/закрывается. Также он закроется если кликнуть вне его области
    window.addEventListener('click', e => {
        const target = e.target

        // Если пользователь кликнул вне зоны селекта
        if (!target.classList.contains('select') && !target.closest('.select._open')) {
            
            if (document.querySelector('.select._open')) {
                document.querySelector('.select._open').classList.remove('_open')
            }
        }

        // Если пользователь кликнул по шапке селекта
        if (target.classList.contains('select-input')) {
            target.parentElement.classList.toggle('_open')
        }

        // Если пользователь выбрал пункт из списка селекта
        if (target.classList.contains('select-dropdown__item')) {
            const select = target.closest('.select')
            const sTitle = select.querySelector('.select-input__title')
            const neighbourTargets = target.parentElement.querySelectorAll('.select-dropdown__item')

            sTitle.innerText = target.innerText

            removeAll(neighbourTargets, '_selected')
            target.classList.add('_selected')

            select.classList.remove('_open')
            select.classList.add('_valid')
        }
    })
}

// Плейсхолдер текстовых полей
labelTextfield()
function labelTextfield() {
    const textfieldElems = document.querySelectorAll('.textfield')

    for (let i = 0; i < textfieldElems.length; i++) {
        const textfield = textfieldElems[i];
        const input = textfield.querySelector('input, textarea')
        const label = textfield.querySelector('label')

        if (input.value != '') {
            label.classList.add('_change-label')
        }

        input.addEventListener('focus', e => {
            label.classList.add('_change-label')
        })

        input.addEventListener('blur', e => {
            if (input.value === '') {
                label.classList.remove('_change-label')
            }
        })
    }
}

// Календарь с событиями
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';

let calendar = new Calendar(document.querySelector('#calendar-events'), {
    plugins: [ dayGridPlugin ],
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next',
        center: '',
        right: 'title'
    },
    events: arvisEvents
});
calendar.render();

const gridDays = document.querySelectorAll('.organized-by-arvis, .arvis-will-take-part')

for (let i = 0; i < gridDays.length; i++) {
    const gridDay = gridDays[i];
    const parent = gridDay.closest('.fc-daygrid-day')
    const dayNumber = parent.querySelector('.fc-daygrid-day-top')

    dayNumber.classList.add('event-day-number')
}