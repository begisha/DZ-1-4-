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
