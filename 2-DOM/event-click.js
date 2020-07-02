// let btn = document.querySelector('button')
// const ul = document.querySelector('ul');

// ul.addEventListener('click', e => {
    
//     e.target.remove()
// })

// btn.addEventListener('click', () => {
//    //ul.innerHTML += '<li>SomeThing</li>'
//    const li = document.createElement('li');
//    li.textContent = "do someThing !";
//    ul.prepend(li)
// })

// let items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {

//         console.log('I AM LI')
//         e.stopPropagation();
//         //e.target.style.textDecoration = "line-through"
//         e.target.remove();
//     })
// })

const content = document.querySelector('.content')
const zone = document.querySelector('.zone')
const bord = document.querySelector('.bord')

content.addEventListener('copy', () => {
    console.log('please my content is copyright !!')
})

zone.addEventListener('mousemove', e => {
    bord.innerText = `X : ${e.offsetX} - Y : ${ e.offsetY }`
})
