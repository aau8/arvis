if (document.querySelector('.cf__body')) {
    const caseForm = document.querySelector('.cf__body')
    
    caseForm.addEventListener('submit', async e => {
        e.preventDefault()
        
        const formData = new FormData(caseForm)
        console.log(caseForm.getAttribute('action'))
        await fetch(caseForm.getAttribute('action'), {
            method: 'POST',
            body: formData
        })
            .then(res => {
                if (res.ok) {
                    console.log('Form send')
                }
            })
            .catch(err => { 
                console.log('error')
             })
    })
}
