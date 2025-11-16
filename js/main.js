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


// Hell Callback 
//  Деструктуризация

// setTimeout(() => {
//   const product = {
//     name: "Bread",
//     price: 40
//   }
//   logger(product)
//   setTimeout(() => {
//     product.name = 'Milk'
//     product.price = 100
//     logger(product)
//   }, 1500)
//     logger(product)
//   setTimeout(() => {
//     product.name = 'Sugar'
//     product.price = 200
//     logger(product)
//   }, 1500)
//   logger(product)
//   setTimeout(() => {
//     product.name = 'Snicers'
//     product.price = 150
//     logger(product)
//   }, 1500)
// }, 2000)

// const triggerError = () => {
//     return throw new Error ('BEGISHA')
// }
// const logger = (product) => {
//   const { name, price } = product
//   console.log(`name: ${name}\nprice: ${price} som`)
// }

// console.log('Loading...')
 
// // Promise- Обещание
// // Promise---> pending (ожидание)---> fulfilled(выполнено) || rejected (отклонение)


// const promise = new Promise((fun1, fun2) => {
//     // throw new Error()
//     setTimeout(() => {
//         const product = {
//             name: "Bread",
//             price:40
//         }
//         logger(product)
//         fun1()
//         fun2()
//     }, 2000)
// })
// console.log(promise)


// XHR -> fetch
// API - 
//1 htpps://https://jsonplaceholder.typicode.com/todos
//2 domen jsonplaceholder.typicode.com/todos
//3 end point - /todos
//4 ID - /nomber


fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => respons.json())
.then((data) => data.forEach(item => {
    document.body.append(document.createElement ('div').innerHTML = item.title);
}))


//7 урок

// mock api
// async await
// try catch

//https://6916270ea7a34288a27c8109.mockapi.io/todos

// const API = 'https://6916270ea7a34288a27c8109.mockapi.io/todos'

// const getTodos = () => {
//     fetch(API)
//     .then(res =>res.json())
//     .then (data => {
//         console.log(data)
//     }) 
// }


//https://6916270ea7a34288a27c8109.mockapi.io/todos

const API = 'https://6916270ea7a34288a27c8109.mockapi.io/todos'

const todos = document.querySelector('.todos')


const getTodos = async () => {
    try{
        const response = await fetch(API)
        const data = await response.json()
        data.forEach((item) => {
            const div = document.createElement('div')
            div.classList.add('todo-item')
            div.textContent = item.title
            todos.appendChild(div)
        })
    } catch (error){
        console.log(error)
    }

}
  window.onload = () => getTodos()





/// DZ №7
//  ПЕРЕПИСАТЬ ЗАПРОСЫ
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', '../data/converter.json');
//   xhr.setRequestHeader('Content-type', 'application/json');
//   xhr.send();

// Задание-1
async function getConverterData() {
    try {
        const response = await fetch('../data/converter.json');
        if (!response.ok) throw new Error('Ошибка загрузки конвертера');

        const data = await response.json();
        console.log("Конвертер валют:", data);

        return data;
    } catch (error) {
        console.error("Ошибка конвертера:", error);
    }
}


// Задание -2
async function getCardsData() {
    try {
        const response = await fetch('../data/cards.json');
        if (!response.ok) throw new Error('Ошибка загрузки карточек');

        const data = await response.json();
        console.log("Card Switcher данные:", data);

        return data;
    } catch (error) {
        console.error("Ошибка card switcher:", error);
    }
}



// Задание -3


const WEATHER_API_KEY = "232c8bf706a5965fab326daf9249d5cf";

async function getWeather(city) {
    try {
        const response = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
        );

        if (!response.ok) throw new Error("Город не найден!");

        const data = await response.json();
        console.log(`Погода в ${city}:`, data);

        return data;
    } catch (error) {
        console.error("Ошибка погодного API:", error);
    }
}


// вызовы

// getConverterData();
// getCardsData();
// getWeather("Bishkek");