
//Afficher un message Normal dans l'anglet Console
/*console.log('Salam les amis')

//Afficher une erreur
console.error('Salam les amis')
console.warn('Salam les amis')*/

// var name = 'Mohamed IDBRAHIM';
// let age = 35;

// if(name) {
//     let i = 1;
//     console.log(i)
// }

// console.log(i);

// const PI = 3.14;

// PI = 5.12;

// //non pro
// status = true;

// console.log(name, age, PI, status);

//String
// let email = 'idbrahimdev@gmail.com';
// console.log(email);

// //String Concatenation
// let firstName = "Mohamed";
// let lastName = "IDBRAHIM";

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //Getting Characters
// console.log(fullName[8])

// //String length
// console.log(lastName.length)

// //String methods
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())

// let position = email.indexOf('@');

// console.log(position);

// let email = 'idbrahimdev@gmail.com';

// let result = email.lastIndexOf('i');

//  let result = email.slice(4, 8)

// let result = email.substr(4, 8)

// let result = email.replace('idbrahim', 'lacherai')

// console.log(result);


    // const PI = 3.14;
    // let raduis = 10;

    // let surface = PI * raduis ** 2

    // console.log(surface)

    // let longueur = 5;
    // let largeur = 10;

    // let perimetre = (longueur + largeur) * 2;

    // B I D M A S

    // console.log(perimetre);

    // console.log(PI, raduis)

    // // operations +, -, /, *, **, %

    // console.log(raduis / 4)
    // console.log(raduis + 2)
    // console.log(raduis - 2)
    // console.log(raduis ** 2)
    // console.log(raduis * 2)
    // console.log(raduis % 3)

    //let increment = 1;

    //increment = increment + 1;

    //increment++;
    //increment = increment + 4;
    // increment += 4;

    // increment = increment - 4;
    // increment -= 4;

    // increment = increment * 4;
    // increment *= 4;

    // increment = increment / 4;
    // increment /= 4;
    //console.log(increment);

    // let likes = 100;

    // console.log('You have : ' + likes + ' likes');

    // Template Strings
    // let course = 'Learn Javascript from Scratch';
    // let instructor = 'Mohamed IDBRAHIM';
    // let students = 200;

    // Concatenation Strings
    // let result = 'Course name : ' + course + ' By ' + instructor + ' has : ' + students + ' students'
    // console.log(result);

    // Template Strings
    // let result = `Course name: ${ course } by ${ instructor } has ${ students } students`
    // console.log(result);

    // HTML Template

// let content = `
//    <h1>${ course }</h1>
//    <p>Instructor: ${ instructor }</p>
//    <em>Students: ${ students }</em>
// `
// console.log(content)

// let courses = ['angular', 'react', 'Laravel'];

// OverRide
// courses[1] = 'ReactJS';
// courses[0] = 'SvelteJS';

// console.log(courses);

// let random = ['Angular', 10, true];
// console.log(random)

// // let result = courses.join(' - ');
// // let result = courses.indexOf('laravel');
// let result = courses.push('SvelteJS')
// courses.unshift('Symfony');
// courses.shift()
// courses.pop()
// //courses.pop();
// console.log(courses)


// let currentYear = null;

// console.log(currentYear, currentYear + 1, `This year is ${ currentYear }`);
// Booleans true or false
// let status = true;
// console.log(true, false, "true", 'false')

// Methods return boolean
// let email = "idbrahimdev@gmail.com";
// let result = email.includes('!');
//  let courses = ['angular', 'laravel'];
// let result = courses.includes('Laravel')
// console.log(result)

// Comparaison operators
// ==, !=, >, <, >=, <=
// let age = 35;

// console.log(age == 35)
// console.log(age != 5)
// console.log(age > 5)
// console.log(age < 5)
// console.log(age <= 34)
// console.log(age >= 35)

// let name = "oohamed";

// console.log(name >= 'mohamed')

// let age = 35;

// console.log(age == 35);
// console.log(age == '35');

// console.log(age != 35);
// console.log(age != '35');

// console.log(age === 35);
// console.log(age === '35');

// console.log(age !== 35);
// console.log(age !== '35');

//  let age = '';

// age = Number(age);
// console.log(age + 10,typeof age)
// age = Boolean(age);
// console.log(typeof age, age)


// for(let i = 0; i < 5; i++) {
//     console.log(`iteration : ${ i }`);
// }

// console.log('final iteration');

// let names = ['Mohamed', 'ibrahim', 'yassine'];

// for(let i = 0; i < names.length; i++) {
//     console.log(`name ${ i + 1  } : ${ names[i] }`)
// }



// let i = 0;
// while(i < 5) {
//     console.log(`iteration : ${ i }`);
//     i++;
// }

// console.log('final')


// let names = ['Mohamed', 'ibrahim', 'yassine'];
// let i = 0;
// while(i < names.length) {
//     console.log(`name ${ i + 1  } : ${ names[i] }`)
//     i++;
// }



// let i = 6;

// do{
//     console.log(`Value of i is : ${ i }`);
//     i++;
// }
// while(i < 5);

// let note = 20;

// if(note == 20) {
//     console.log('Excelent')
// }
// else if(note >= 15) {
//     console.log('Bien')
// }
// else if(note >= 12) {
//     console.log('Assez bien')
// }
// else if(note >= 10) {
//     console.log('passable')
// }
// else{
//     console.warn('vous n etes pas capable')
// }

// let password = "fffffe@ffff";

// ou or || , et and &&

// if(password.length >= 8 && password.includes('@')) {
//     console.log('Valid password');
// }
// else {
//     console.error('Invalid password');
// }

// let user = false;

// if(!user) {
//     console.log('user is true')
// }
// else {
//     console.log('user is false');
// }

// console.log(!true);
// console.log(!false);



// let numbers = [10, 82, 28, 0, 35, 100, 54, 50, 12];

// for (let i = 0; i < numbers.length; i++) {
    
//     if(numbers[i] == 0) {
//         continue;
//     }

//     if(numbers[i] == 100) {
//         console.log('Congrats');
//         break;
//     }

//     console.log(`score : ${ numbers[i] }`);
// }

// let typeDeSang = 'O';

// if(typeDeSang == 'O') {
//     console.log('type de Sang est O');
// }
// else if(typeDeSang == 'A'){
//     console.log('type de Sang est A');
// }
// else if(typeDeSang == 'B'){
//     console.log('type de Sang est B');
// }
// else if(typeDeSang == 'AB'){
//     console.log('type de Sang est AB');
// }
// else {
//     console.log('type de sang est non valid !')
// }

// let typeDeSang = 'gg';

// switch(typeDeSang) {
//     case 'O':
//         console.log('type de Sang est O')
//         break;
//     case 'A':
//         console.log('type de Sang est A')
//         break;
//     case 'B':
//         console.log('type de Sang est B')
//         break;
//     case 'AB':
//         console.log('type de Sang est AB')
//         break;
//     default: 
//     console.log('type de sang est non valid !')
// }



// let age = 18
// let result = (age >= 18) ? "Majeur" : "Mineur";

// if(age >= 18) {
//     result = "Majeur";
// }else {
//     result = "Mineur"
// }


// console.log(result)


// Function Declaration

// function someThing() {
//     console.log('Salam les dev');
// }

// someThing()
// someThing()
// someThing()

// Function Expression


// const speak = function(name = 'Mohamed', gender = 'M.') {
//     console.log(`je suis ${ gender } ${ name }`)
// }

// speak('Walid');


// const surfaceCercle = function(rayon) {
//     return  3.14 * rayon ** 2;
// }


// const surfaceCercle = rayon => {
//     let surface = 3.14 * rayon ** 2;
//     return surface;
// };


// let surface = surfaceCercle(20);

// console.log(surface);


let names = ['Basma', 'Walid', 'Mohamed', 'ibrahim', 'yassine'];

let html = ``;
const persons = (name, index) => {
    html += `<li style="color: green">${ name }</>`
}

names.forEach(persons)

let myElement = document.querySelector('.persons')

myElement.innerHTML = html;

const myCourses = [
    { title: "Angular", price: 45 },
    { title: "ReactJS", price: 35 },
    { title: "VueJS", price: 40 },
];

// Object 
let user = { 
    firstName: "Mohamed",
    lastName: "IDBRAHIM",
    age: 35,
    email: "idbrahimdev@gmail.com",
    active: true,
    courses: myCourses,
    login() {
        console.log('log with this user .', this)
    },
    logout: () => {
        console.log("logout with this user", this)
    },
    showCourses: function() {
        this.courses.forEach(course => console.log(course.title, course.price))
    }
}

console.log(user.showCourses())

//  console.log(user.login())
//  console.log(user.logout())

// user.email = "mouad@gmail.com";
// console.log(user)

// console.log(user['age'])

// user['age'] = 40

// console.log(user)

