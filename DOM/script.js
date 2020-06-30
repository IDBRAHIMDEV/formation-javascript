

//   //const header = document.querySelector('h1')
//   const paras = document.querySelectorAll('p.success')

// //   paras.forEach(para => console.log(para))


//   // get Element by Id
// //   const header = document.getElementById('title');
// const header = document.querySelector('#title')
//   console.log(header)

//   // get Elements by Class
//   const divisions = document.getElementsByClassName('content')
//   console.log(divisions)

//   // get Elements by Tag
//   const paragraphs = document.getElementsByTagName('p')
//   paragraphs.forEach(para => console.log(para))

// const header = document.querySelector('#title');

// console.log(header.innerText)

// header.innerText +=  " Javascript in Bright Coding"

// const headers = document.querySelectorAll('h2');

// headers.forEach((header, index) => {
//     header.innerText += ' .'
// })

// const division = document.querySelector('.myContent');
// console.log(division.innerHTML)
// division.innerHTML += "<a href='https://brightcoding.teachable.com'>Bright Coding</a>"



// const anchor = document.querySelector('a');

// console.log(anchor.getAttribute('href'))

// anchor.setAttribute('href', 'https://facebook.com')

// anchor.innerText = 'facebook'

// const para = document.querySelector('p');
// para.setAttribute('class', 'error')
// para.setAttribute('style', 'color: red')

// const header = document.querySelector('h1')

// header.setAttribute('style', 'margin: 50px')

// header.style.margin = '100px';
// header.style.color = 'red';
// header.style.fontSize = '200px'

// header.style.color = ''

// console.log(header.style.margin)



// const para = document.querySelector('p');

// para.classList.add('success')
// para.classList.remove('success')
// para.classList.add('error')

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    if(para.innerText.includes('success')) {
        para.classList.add('success')
    }

    if(para.innerText.includes('error')) {
        para.classList.add('error')
    }
})