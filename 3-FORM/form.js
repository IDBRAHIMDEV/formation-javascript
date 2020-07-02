
const form = document.querySelector('.my-form');
const myUsername = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

let pattern = /^[a-zA-Z0-9]{5,10}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let username = form.username.value;
    if(pattern.test(username)) {
        feedback.textContent = "This username is valid"
    }else {
        feedback.textContent = "Username must contain letters Only & be between 5 and 10 Characters !"
    }
})

myUsername.addEventListener('keyup', (e) => {
    let username = form.username.value;
    if(pattern.test(username)) {
        form.username.setAttribute('class', 'success')
        feedback.textContent = "This username is valid"
    }else {
        form.username.setAttribute('class', 'error')
        feedback.textContent = "Username must contain letters Only & be between 5 and 10 Characters !"
    }
})

// let username = "brightcodi ";

// let pattern = /^[a-zA-Z0-9]{5,10}$/;

// if(pattern.test(username)) {
//     alert('valid')
// }else {
//     alert('invalid')
// }