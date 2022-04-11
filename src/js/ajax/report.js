import '../../db/reports.json'

import '../../img/reports/1.png'
import '../../img/reports/2.png'
import '../../img/reports/3.png'

const changeYear = document.querySelector('.s-report__year .select-input__title')
const loader = document.querySelector('.s-report__loader')
const report = {
    img: document.querySelector('.s-report__img img'),
    downloadLink: document.querySelector('.s-report__download'),
    text: document.querySelector('.s-report__text')
}

// Первоначальная загрузка документа
const selectedYear = document.querySelector('.select-dropdown__item._selected') || document.querySelectorAll('.select-dropdown__item')[0]

requireReport(selectedYear.innerHTML)

// Смена отчета при выборе года
let observer = new MutationObserver(e => {
    const value = e[0].target.innerText
    requireReport(value)
})
observer.observe(changeYear, { 
    childList: true,
    subtree: true,
})

async function requireReport(value) {
    showLoad()

    await fetch('./db/reports.json')
        .then(data => data.json())
        .then(json => json.filter(e => e.title == value)[0])
        .then(elem => {
            setData(elem)
            hideLoad()
        })
}

function showLoad() {
    loader.classList.add('_show')
}

function hideLoad() {
    loader.classList.remove('_show')
}

function setData(elem) {
    const thumb = elem.thumb
    const url = elem.url_download
    const text = elem.text

    report.img.src = thumb
    report.downloadLink.href = url
    report.text.innerHTML = text
}