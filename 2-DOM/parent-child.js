
let myDivision = document.querySelector('div')

Array.from(myDivision.children).forEach(element => {
    element.classList.add('myClass')
})

console.log(myDivision.nextElementSibling.previousElementSibling)