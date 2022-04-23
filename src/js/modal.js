/**
 * Функционал модального окна
 * 1. Открытие при клике по кнопке с атрибутом data-open-modal="#id-selector"
 * 2. Закрытие при клике по крестику
 * 3. Закрытие при клике по фону
 */

class Modal {
    constructor(props) {

        this.init()
    }

    init() {
        this.openedModal = false
        this.openedButton = false

        this.eventsFeeler()
    }

    eventsFeeler() {
        document.addEventListener('click', e => {
            const target = e.target

            if (target.getAttribute('[data-open-modal]') || target.closest('[data-open-modal]')) {
                this.openedButton = target
                this.open(target.dataset.openModal)
            }
        })
    }

    open(selector) {
        if (typeof selector === 'string') {
            this.openedModal = document.querySelector(`#${selector}`)
        }
        else {
            this.openedModal = selector
        }

        this.openedModal.classList.add('_show')
        this.lockScrollPage()
    }

    lockScrollPage() {
        document.body.classList.toggle('_lock')
    }
}