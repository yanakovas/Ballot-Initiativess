document
.querySelector('#frontForm')
.addEventListener('submit', async(event) => {
event.preventDefault()
const {value} = event.target
const card = value.closest('.frontForm')
const id = Number(card.dataset.id)
try {
    const response = await fetch ('/success', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify ({
            value,
            id,
        })
    await response.json()
        
    })
}
})