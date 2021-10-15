const form = document.querySelector('.content__form');
const userEmail = document.querySelector('.form-input').value;
const error = document.querySelector('.form-error-msg');
const errorIcon = document.querySelector('.form-error-icon');

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

form.addEventListener('submit', (e) => {
  let messages = [];
  if(userEmail === '' || userEmail == null || !emailIsValid(userEmail)){
    messages.push("Please provide a valid email");
    errorIcon.classList.add('d-none');
  }
  if(messages.length > 0){
    e.preventDefault()
    error.innerText = messages.join(', ')
    errorIcon.classList.remove('d-none');
  }
});


