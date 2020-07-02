
// let ages = [5, 25, 50, 10, 7, 58];
// [25, 50, 58]

// let filterdAges = ages.filter(age => age > 24)

// console.log(filterdAges, ages)

// let users = [
//     { name: "Basma", active: true },
//     { name: "Walid", active: false },
//     { name: "Mohamed", active: true },
//     { name: "Yassine", active: false },
//     { name: "Mouad", active: true }
// ];

// result = users.filter(user => !user.active)

// console.log(result)



// let ages = [5, 25, 50, 10, 7, 58];

// let result = ages.map(age => age + 10)

// // console.log(result, ages)

// let users = [
//     { name: "Basma", active: true },
//     { name: "Walid", active: false },
//     { name: "Mohamed", active: true },
//     { name: "Yassine", active: false },
//     { name: "Mouad", active: true }
// ];

// result = users.map(user => {
//     if(user.active) {
//         return {
//             name: user.name.toUpperCase(),
//             active: user.active
//         }
//     }else {
//         return user
//     }
// })

// console.log(result)


// let ages = [5, 25, 50];

// let result = ages.reduce((acc, age) => {
//     return acc + age;
// }, 0)

// console.log(result)



// let ages = [5, 25, 50, 10, 7, 58];

// let result = ages.find(age => age < 10)


// let users = [
//     { name: "Basma", active: true },
//     { name: "Walid", active: false },
//     { name: "Mohamed", active: true },
//     { name: "Yassine", active: false },
//     { name: "MoUaD", active: true }
// ];

// let search = 'moU';
// let result = users.find(user => user.name.toLowerCase().includes(search.toLowerCase()))

// console.log(result)


// Sort the numbers 
// let ages = [5, 2, 50, 25, 10, 7, 58];

// ages.sort((a, b) => a - b);

// console.log(ages)


//  // Sortting the Strings
//  let persons = ['Basma', 'Walid', 'Ahmed', 'Mohamed', 'Yassine', 'Mouad'];

// persons.sort()

// console.log(persons)


let users = [
    { name: "Basma", active: true, note: 20 },
    { name: "Walid", active: false, note: 19 },
    { name: "Mohamed", active: true, note: 9 },
    { name: "Yassine", active: false, note: 14 },
    { name: "Mouad", active: true, note: 15 }
];

let myUsers = users.sort((a, b) => b.note - a.note)
                   .filter(user => user.active)
                   .map(user => user.name);

console.log(myUsers)