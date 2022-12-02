document.querySelector('.navbar').addEventListener('click', (event)=>{
    event.preventDefault()
    if(event.target.classList.contains('js-create-initiative-button')){
        console.log(event.target)
        fetch()
    }
})