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
