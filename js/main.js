// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)


 // 4 Урок

// DOM - Document Object Model

// const button - document.getElementById('btn')
  // const buttons = document.getElementsByClassName('btn')
// const buttons = document.getElementsByTagName('button')


//const button = document.querySelector('.btn')
//const button = document.querySelector('#btn')
//const button = document.querySelector('button')


// console.log(button)

// const buttons = document.querySelectorAll('.btn')
// const wrapper = document.querySelectorAll('.wrapper')
 // const buttonsInWrapper = wrapper.querySelectorAll('button')
// console.log(buttonsInWrapper)



// TOGGLE BUTTONS
// buttons[0].classList.add('red')
// buttons[0].classList.remove ('red')
// console.log(buttons[0].classList.contains('RED'));



// const wrapper = document.querySelector('.wrapper')
// const buttons = document.querySelectorAll('button')




// buttons.forEach((button) => {
 // button.onclick = (event) => {
 //  event.target.classList.toggle('red')
//  } 

// })

// const newButton = document.createElement('button')
// wrapper.appendChild(newButton)



// Делегирование событий

 // const wrapper = document.querySelector('.wrapper')

 // wrapper.onclick = event => {
// if (event.target.tagName.toLowerCase9() === 'button') {
  //  event.target.classList.toggle('red')
// }
//  }

   // 4 Урок

// JSON - JavaScript object notation
// .html .pdf .mp3 .mp4 .json 

// const object ={
//     name: "John",
//     age:42,
// }
// const newJson = JSON.stringify(object)
// const newObject = JSON.parse(newJson)
// console.log(newObject.name)

//  AJAX - Asynhronosous Javascript and XML
//  XML - eXtensible Markup Language - .xml
//  HTML - HyperText Markup Language - .html

//  HTTP - HyperText Transfer Protocol (опасно)
//  HTTPS HyperText Transfer Protocol Secure (безопасно)

//  XHR - XML HTTP Request

//  HTTP Method


//  CRUD
//  create - POST
//  read - GET
//  update - PATCH
//  delete - DELETE 

 const button = document.querySelector('button');
  button.onclick = () => {
    const xhr = new XMLHttpRequest() // 1. Создание запроса
    xhr.open('GET','data.json') // 2. Указание медота запроса и пути
    xhr.setRequestHeader('Content-type', 'application/json') // 3. Указание заголовка
    xhr.send() //4. Отправка запроса

    xhr.onload = () => {
        const data = JSON.parse(xhr.response)
       document.querySelector('.name').innerHTML = data.name
     document.querySelector('.name').innerHTML = data.age

    }
  }