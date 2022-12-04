
const createModal = new bootstrap.Modal('#createModal', {
    keyboard: false
  })

document.querySelector('.createForm').addEventListener('submit', async (event)=>{
    event.preventDefault()
    if(event.target.classList.contains('createForm')){
        const inputs = document.querySelectorAll('#js-input-initiative-title, #js-input-initiative-text, #js-input-initiative-level, #js-input-initiative-expire-date')
        const cards = document.querySelector('#initiatives')

        createModal.hide()

        const response = await fetch('/api/', {
            method:'POST',
            body: JSON.stringify({
                title: inputs[0].value,
                text: inputs[1].value,
                level: inputs[2].value,
                votingDeadline:Date.parse(inputs[3].value)
            }),
            headers:{'Content-Type':'application/json'}
        })
        inputs.forEach((input) => {input.value = ''})

        // const initiative = document.createElement('template')
        
        const initiative = await response.text();

        console.log(initiative)
        
        cards.insertAdjacentHTML('afterbegin', `${initiative}`)
    }
})