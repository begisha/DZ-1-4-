
//DZ№1 (1)

const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');

gmailButton.addEventListener('click', () => {
  const value = gmailInput.value.trim();
  const gmailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]{2,}@gmail\.com$/;

  if (gmailRegex.test(value)) {
    gmailResult.textContent = 'Всё правильно ✅';
    gmailResult.style.color = 'green';
  } else {
    gmailResult.textContent = 'Ошибка ❌ ';
    gmailResult.style.color = 'red';
  }
});

// (2)

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let position = 0;

function moveBlock() {
  position += 1; 
  childBlock.style.left = `${position}px`;

  const parentWidth = parentBlock.offsetWidth;
  const childWidth = childBlock.offsetWidth;

  if (position + childWidth < parentWidth) {
    requestAnimationFrame(moveBlock);
  }
}

moveBlock();

  // DZ№2 (1)

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('.parent_block');
    const child = document.querySelector('.child_block');

    if (!parent || !child) return;

    const pacman = document.createElement('div');
    pacman.classList.add('pacman');
    parent.appendChild(pacman);

    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    parent.appendChild(enemy);

    const step = 3;
    const maxX = parent.clientWidth - child.clientWidth;
    const maxY = parent.clientHeight - child.clientHeight;

    let x = 0;
    let y = 0;
    let direction = 'right';
    const path = []; 
    const delay = 30; 

    function movePacman() {
        switch (direction) {
            case 'right': x += step; pacman.style.transform='rotate(0deg)'; if (x >= maxX) direction='down'; break;
            case 'down': y += step; pacman.style.transform='rotate(90deg)'; if (y >= maxY) direction='left'; break;
            case 'left': x -= step; pacman.style.transform='rotate(180deg)'; if (x <= 0) direction='up'; break;
            case 'up': y -= step; pacman.style.transform='rotate(270deg)'; if (y <= 0) direction='right'; break;
        }

        child.style.left = `${x}px`;
        child.style.top = `${y}px`;
        pacman.style.left = `${x}px`;
        pacman.style.top = `${y}px`;

    
        path.push({x, y, direction});

       
        const idx = path.length - delay;
        if (idx >= 0) {
            const pos = path[idx];
            enemy.style.left = `${pos.x}px`;
            enemy.style.top = `${pos.y}px`;
            switch(pos.direction){
                case 'right': enemy.style.transform='rotate(0deg)'; break;
                case 'down': enemy.style.transform='rotate(90deg)'; break;
                case 'left': enemy.style.transform='rotate(180deg)'; break;
                case 'up': enemy.style.transform='rotate(270deg)'; break;
            }
        }

        requestAnimationFrame(movePacman);
    }

    movePacman();
});

// (2 Задание) Счётчик 
const counterDisplay = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let count = 0;
let intervalId = null;

function updateCounter() {
    counterDisplay.textContent = count;
}


startBtn.addEventListener('click', () => {
    if (intervalId) return; 
    intervalId = setInterval(() => {
        count++;
        updateCounter();
    }, 1000);
});


stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    count = 0;
    updateCounter();
});



// DZ №4 (1 задание)
const request = new XMLHttpRequest();
request.open('GET', '../data/characters.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = function () {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    const charactersList = document.querySelector('.characters-list');

    data.forEach((character) => {
      const card = document.createElement('div');
      card.classList.add('character-card');
      card.innerHTML = `
        <div class="character-photo">
          <img src="${character.photo}" alt="${character.name}">
        </div>
        <h3>${character.name}</h3>
        <p>Возраст: ${character.age}</p>
      `;
      charactersList.append(card);
    });
  } else {
    console.error('Ошибка загрузки characters.json:', request.status);
  }
};


// DZ №4 (2 задание)
const xhrBio = new XMLHttpRequest();
xhrBio.open('GET', '../data/bio.json'); 
xhrBio.send();

xhrBio.onload = function () {
  if (xhrBio.status === 200) {
    const bioData = JSON.parse(xhrBio.responseText);
    console.log('Данные из bio.json:', bioData);
  } else {
    console.error('Ошибка загрузки bio.json:', xhrBio.status);
  }
};


