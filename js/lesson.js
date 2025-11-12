// 1 Урок 

//Регулярные выражение - Regular  Experssions
// g - global
// i - ignore case
// m - multiline
//y -???
   // \d - digit
  // const name  = promt("What is your name?");

  // const regExp = /N/gi
 
  //console.log(name.match(regExp))
 

   // const regExp = /\d/g

   // const regExp = /[A-Za-z0-9_]/g
  // const regExp = /\w/g

   //  const regExp = /[^A-Za-z0-9_]/g
  //const regExp = /\W/g


   //const numbers = 'QWERTY_0123456789qwerty_qwert_!@#$%^&'

   // const regExp = /\S/g
   
  // console.log(numbers.replace(regExp, '*'))
  // console.log(numbers.match(regExp))

 // Expression = () => {}
 //Declartion = funtion
 // Recursion -  Рекурсия

 // let num = 0
 // const count = () => { Show usages 

 // num++
    // console.log(num)
    // if (num < 500) {
       //  count ()
        // requestAnimationFrame (count) // FPS - frame per seconds
    
   // }
  // }
  // count()


 // Phone CHECKER

 // const phoneInput = document.querySelector('#phone_input')
 // const phoneButtun = document.querySelector('#phone_buttun')
 // const phoneResult = document.querySelector('#phone_result')


 // const regExp = /\+996 [5729]\d{2} \d{2}- \d{2}- \d{2}$/

 // phoneButtun.onclick = () => {
     // if(regExp.test(phoneInput.value)){
        //  phoneResult.innerText = 'OK'
         // phoneResult.style.color = 'green'
     // } else {
        // phoneResult.innerText = 'Not OK'
        // phoneResult.style.color = 'red'
     // }
 // }


// 2 Урок

// Основы асинхронности

// Синхронный код
// console.log(1)
// console.log(2)
// console.log(3)

// Асинхронный код - (setTimeout, setInterval)

// setTimeout(() => {})
 
    // console.log(1)
    // }, 0)
    // console.log (2)


    // const button  = document.querySelector('button')
    // button.onclick = () => {
     //    setTimeout(() => {
     //       console.log(1)
    //    } ,500) 
    // }
  //   console.log(2)


  // setInterval

  // const button = document.querySelector('button')


  // const interval = setInterval(() => {
 //    console.log('ok')
 //  },1000)

  // setInterval(() =>{
    // clearInterval('interval')
 // },5000)

 // button.onclick = () => clearInterval(interval)


 // Chrome --EventLoop--> Blink
 // FireFox --EventLoop--> Gecko

 // forEach

 // const characters = [
     // {
        //  name: "John Wick",
         // age: 42
     // },
    //  {
      //  name: "Herald from Rivia",
       // age: 189

     // },
    // {

   
          // name: "Betman",
           // age: 40
          
 // },
 // {
     //name: "Spider man",
    age: 33
 // },
 // { 
    //  name: "Artur Morgan",
     // age: 43

  // },
 // {
    //  name: "Halk",
     // age: 52 
  // },
 // {
     // name: "Superman",
     // age: 33    
 // }
  // ]

  // const defaultPhoto ='https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0'

 // characters.forEach((character) => {
    // const div = document.createElement("div");
     // div.setAttribute("class", "character");

     // div.innerHTML = '  
     //<div class = "character-photo">
     // <img src="${defaulPhoto}" alt="${character.name"> </img>
     // <p> ${character.name} </p>
     // <span>i style="color: darkblue"> age: </i> ${charaster.age} </span>'
  
   
    
   
     //document.body.appendChild(div);
 // })




  // 3 Урок (прод-е main.js)

  //Tab slider
 
//   const tabsParent = document.querySelector('.tab_content_items')
//   const tabContentBlocks = document.querySelectorAll('.tab_content_block')
//   const tabs = document.querySelectorAll('.tab_content_item')

//   const hideTabContent = () => {
//    tabContentBlocks.forEach((block) => {
//       block.style.display = 'none'
//    })
//    tabs.forEach((tab) => {
//       tab.classList.remove('tab_content_item_active')
//    })
//   }
//    const showTabcontent = (blockIndex = 0) => {
//       tabContentBlocks[blockIndex].style.display = 'block'
//       tabs[blockIndex].classList.add('tab_content_item_active')

//    }

//    hideTabContent()
//    showTabcontent()
  

//    tabsParent.onclick = (event) => {
//       if (event.target.classList.contains('tab_content_item')) {
//          tabs.forEach((tab,index) => {
//             if (event.target === tab) {
//                hideTabContent()
//                showTabcontent(index)


//             }
            

//          })

//       }
//    }

      
// DZ№3 (1-Задание)
// TAB SLIDER 

const tabsParent = document.querySelector('.tab_content_items');
const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');

let currentIndex = 0;


const hideTabContent = () => {
  tabContentBlocks.forEach((block) => {
    block.style.display = 'none';
  });
  tabs.forEach((tab) => {
    tab.classList.remove('tab_content_item_active');
  });
};

const showTabContent = (index = 0) => {
  tabContentBlocks[index].style.display = 'block';
  tabs[index].classList.add('tab_content_item_active');
};


hideTabContent();
showTabContent(currentIndex);

tabsParent.onclick = (event) => {
  if (event.target.classList.contains('tab_content_item')) {
    tabs.forEach((tab, index) => {
      if (event.target === tab) {
        currentIndex = index; 
        hideTabContent();
        showTabContent(currentIndex);
      }
    });
  }
};

setInterval(() => {
  currentIndex++;
  if (currentIndex >= tabs.length) {
    currentIndex = 0; 
  }
  hideTabContent();
  showTabContent(currentIndex);
}, 3000); 


// 5 урок
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');

const converter = (element, targetElement) => {
  element.oninput = () => {
    if (element.value === '') {
      targetElement.value = '';
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/converter.json');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();

    xhr.onload = () => {
      const data = JSON.parse(xhr.response);

      if (element.id === 'som') targetElement.value = (element.value / data.usd).toFixed(2);
      if (element.id === 'usd') targetElement.value = (element.value * data.usd).toFixed(2);
    };
  };
};

converter(somInput, usdInput);
converter(usdInput, somInput);

  // somInput.oninput = () => {
  //   const xhr = new  XMLHttpRequest()
  //   xhr.open('GET', '../data/converter.json')
  //   xhr.setRequestHeader('Content-type', 'application/json')
  //   xhr.send()

  //   xhr.onload = () => { 
  //   const data = JSON.parse(xhr.response)
  //   usdInput.value = (somInput.value / date.usd).toFixed(2)
  //   }
  // }

  // usdInput.oninput = () => {
  //   const xhr = new  XMLHttpRequest()
  //   xhr.open('GET', '../data/converter.json')
  //   xhr.setRequestHeader('Content-type', 'application/json')
  //   xhr.send()

  //   xhr.onload = () => { 
  //   const data = JSON.parse(xhr.response)
  //   somInput.value = (usdInput.value * date.usd).toFixed(2)
  //   }
  // }

  // DRY - don't  repeat yourself
  // KISS - keep  it super, stupid 

  
  // DZ№5

  
// DZ №5 


const inputs = {
  som: document.querySelector('#som'),
  usd: document.querySelector('#usd'),
  vnd: document.querySelector('#vnd')
};

const convertCurrency = (source) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '../data/converter.json');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();

  xhr.onload = () => {
    const rates = JSON.parse(xhr.response); // {usd: 87.45, vnd: 11.3116}

    if (source.id === 'som') {
      inputs.usd.value = (source.value / rates.usd).toFixed(2);
      inputs.vnd.value = ((source.value / rates.usd) * rates.vnd).toFixed(2);
    } else if (source.id === 'usd') {
      inputs.som.value = (source.value * rates.usd).toFixed(2);
      inputs.vnd.value = (source.value * rates.vnd).toFixed(2);
    } else if (source.id === 'vnd') {
      inputs.usd.value = (source.value / rates.vnd).toFixed(2);
      inputs.som.value = ((source.value / rates.vnd) * rates.usd).toFixed(2);
    }
  };
};
for (let key in inputs) {
  inputs[key].addEventListener('input', () => convertCurrency(inputs[key]));
}


// //6  урок

// const card = document.querySelector('.card')
// const btnNext = document.querySelector('#btn-next')
// const btnPrev = document.querySelector('#btn-prev')
// let cardIndex = 0

// btnNext.onclick = () => {
//   cardIndex++
//   fetch(`https://jsonplaceholder.typicode.com/todos/${cardIndex}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const { title, completed, id} = data 
//       card.innerHTML = `
//         <p>${title}</p>
//         <p style="color: ${completed ? "green" : "red"}">
//           ${completed}
//         </p>
//         <span>${id}</span>
//       `
    
//     })
//   }

  

// DZ№6 (1-Доработать код)

  const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
let cardIndex = 1; 
const maxCard = 200; 

const fetchCard = (index) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
    .then(response => response.json())
    .then(data => {
      const { title, completed, id } = data;
      card.innerHTML = `
        <p>${title}</p>
        <p style="color: ${completed ? "green" : "red"}">
          ${completed}
        </p>
        <span>${id}</span>
      `;
    });
};

//показываем 1
fetchCard(cardIndex);

btnNext.onclick = () => {
  cardIndex++;
  if (cardIndex > maxCard) cardIndex = 1; 
  fetchCard(cardIndex);
};

btnPrev.onclick = () => {
  cardIndex--;
  if (cardIndex < 1) cardIndex = maxCard; 
  fetchCard(cardIndex);
};


// 2 Задание
// сделать отдельный fetch запрос на это API: 'https://jsonplaceholder.typicode.com/posts'
//  и отобразить данные просто в консоли
//  fetch posts

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log('Данные с posts API:', data);
  })
  .catch(error => console.error('Ошибка при загрузке posts:', error));
