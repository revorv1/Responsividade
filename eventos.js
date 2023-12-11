



document.getElementById('myForm').addEventListener('mouseenter', (event) => {
    console.log("Foco")
    console.log(event)
    
}) 
document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('preparando envio')
    console.log(event)
})
