
// let now = new Date();

// //console.log(typeof now)

// console.log(now)
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleString())

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDay())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// //timestamps
// console.log(now.getTime())


// console.log('-------------------------------------------')

// var before = new Date("2020-03-25"); // ISO
// var d = new Date("2020-03-25T12:00:00Z"); // ISO
// var d = new Date("03/25/2020"); // short
// var d = new Date("Mar 25 2020"); // long
// var d = new Date("Wed Mar 25 2020 09:56:24 GMT+0100 (GMT+0100)");

// console.log(now.getTime(), before.getTime())
// let diff = now.getTime() - before.getTime();

// let seconds = diff / 1000;
// console.log("seconds :", seconds)

// let minutes = seconds / 60;
// console.log("Minutes : ", minutes)

// let hours = minutes / 60;
// console.log("Hours : ", hours)

// let days = hours / 24;
// console.log("Days : ", Math.round(days))

// const clock = document.querySelector('.clock');

// const myOclock = () => {

//     let now = new Date();

//     let hour = now.getHours();
//     let minute = now.getMinutes();
//     let second = now.getSeconds();

//     let html = `
//       <span>${ hour }</span> :
//       <span>${ minute }</span> :
//       <span>${ second }</span>
//     `

//     clock.innerHTML = html
// } 


//  setInterval(myOclock, 1000)


// let now = new Date()
// let other = new Date(7845121225)

// console.log(dateFns.isToday(now));

// console.log(dateFns.differenceInHours(now, other))