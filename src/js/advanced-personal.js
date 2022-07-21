class DismalDropzone {
	constructor(selector, options = {}) {
		this.dropzone = typeof selector === 'string' ? document.querySelector(selector) : selector
		this.input = this.dropzone.querySelector('input[type=file]')
		this.infoContainer = this.dropzone.querySelector(options.infoContainer) || null
		this.maxFileSize = options.maxFileSize || false
		this.maxFileQuant = options.maxFileQuant || false

		this.init()
	}

	init() {
        this.dropzone.addEventListener('dragover', this.resetEvents)
        this.dropzone.addEventListener('drop', this.resetEvents)

        this.dropzone.addEventListener('dragenter', e => {
			this.resetEvents(e)
			this.isDragenter()
		})

        this.dropzone.addEventListener('dragleave', e => {
			this.resetEvents(e)
			this.isNotDragenter()
		})

		this.dropzone.addEventListener('drop', e => {
			this.files = e.dataTransfer.files
			this.isNotDragenter()
			this.checkFile()
		})

		this.dropzone.addEventListener('change', e => {
			this.files = this.input.files
			this.isNotDragenter()
			this.checkFile()
		})
	}

	checkFile() {

		if (this.files.length === 0) {
			this.clear()
		}
		else if (this.files.length > 1) {
			this.callError('Вы можете добавить только 1 файл')
		}
		else if (this.files[0].size / 1024 / 1024 * 1000 > 5000) {
			this.callError('Файл весит больше 5 Мб')
		}
		else {
			this.input.files = this.files
			this.parseFile(this.input.files[0])
		}
	}

	parseFile(file) {
		this.isFull()
		this.fileData = {
			size: Math.floor(file.size / 1024 * 10) / 10,
			name: file.name,
		}
		this.dropzone.fileData = this.fileData

		this.setEvent('parse')

	}

	callError(errorText) {
		this.dropzone.dataset.error = errorText
		this.dropzone.classList.add('is-error')

		setTimeout(e => {
			this.dropzone.dataset.error = ''
			this.dropzone.classList.remove('is-error')
		}, 3000)
	}

	resetEvents(e) {
		e.preventDefault()
		e.stopPropagation()
		return false
	}

	clear() {
		this.input.dataURL = ''
		this.input.value = ''
		this.isNotFull()

		console.log('add is-not-full')
	}

	setEvent(eventName) {
		const event = new Event(eventName)
		event.DismalDropzone = this

		this.dropzone.dispatchEvent(event)
	}

	isFull() {
		this.dropzone.classList.add('is-full')
	}

	isNotFull() {
		this.dropzone.classList.remove('is-full')
	}

	isDragenter() {
		this.dropzone.classList.add('is-dragenter')
	}

	isNotDragenter() {
		this.dropzone.classList.remove('is-dragenter')
	}
}

const cdFormFile = new DismalDropzone('.cd-form__file')

// setTimeout( e => {
// 	console.log(dismalDropzone)
// }, 5000 )

cdFormFile.dropzone.addEventListener('parse', e => {
	console.log(e)
	const info = cdFormFile.dropzone.querySelector('.cd-form__file-info')

	info.textContent = e.DismalDropzone.fileData.name
})

// Изменение времени и даты
const timeBlockElems = document.querySelectorAll('.cd-form__time-block')

for (let i = 0; i < timeBlockElems.length; i++) {
	const timeBlock = timeBlockElems[i];
	const timeInput = timeBlock.querySelector('input')
	const timeText = timeBlock.querySelector('.cd-form__time-tf-text')

	timeInput.addEventListener('input', e => {
		timeText.textContent = timeInput.value.replace(/-/g, '.')
	})
}