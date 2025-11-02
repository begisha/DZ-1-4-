// const modal = document.querySelector('.modal')
// const modalTrigger = document.querySelector('#btn-get')
// const modalCloseTrigger = document.querySelector('.modal_close')

// const openModal = () => { // Show usages
//    modal.style.display ='block'
//    document.body.style.overflow = 'hidden'

// }
//  const closeModal = () => { // Show usages
//     modal.style.display ='none'
//     document.body.style.overflow = ''

// }
// modalTrigger.onclick = openModal
// modalCloseTrigger.onclick = closeModal
// modal.onclick = event => (event.target === modal) && closeModal()


// DZ №3 (2-Задание)
// МОДАЛЬНОЕ ОКНО 

const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseTrigger = document.querySelector('.modal_close');

const openModal = () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

modalTrigger.addEventListener('click', openModal);
modalCloseTrigger.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});


const modalTimer = setTimeout(openModal, 10000);


function showModalByScroll() {

  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
    openModal();
    
    window.removeEventListener('scroll', showModalByScroll);
  }
}

window.addEventListener('scroll', showModalByScroll);


modalTrigger.addEventListener('click', () => clearTimeout(modalTimer));
