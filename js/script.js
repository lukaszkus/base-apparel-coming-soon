const form = document.querySelector('.content__form');
const userEmail = document.querySelector('.form-input');
const error = document.querySelector('.form-error-msg');
const errorIcon = document.querySelector('.form-error-icon');

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

form.addEventListener('submit', (e) => {
  
  let messages = [];
  
  if(userEmail.value === '' || !emailIsValid(userEmail.value) || userEmail.value == null){
    messages.push("Please provide a valid email");
    errorIcon.classList.add('d-none');
  }
  if(messages.length > 0){
    e.preventDefault()
    error.innerText = messages.join(', ')
    errorIcon.classList.remove('d-none');
  }
});