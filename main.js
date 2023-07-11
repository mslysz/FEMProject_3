const form = document.querySelector('.form')
const emailField = document.querySelector('input.text');
const emailError = document.querySelector('span.validEmail');
const divDisplay = document.querySelector('.msgContainer');
const divMain = document.querySelector('.container');
const dismissBtn = document.querySelector('.dismissBtn');
const emailTxt = document.querySelector('.emailTxt')

const regex = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|.(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;


const validateEmail = () => {
  const email = emailField.value
  emailError.classList.remove('valid');
  if (!email.match(regex)) {
    emailField.style.backgroundColor = "hsla(4, 100%, 67%, 0.256)"
    return false;
  } else {
    return true;
  }


}

const sendEmail = (e) => {
  e.preventDefault();
  const inputValue = emailField.value;
  if (inputValue === "") {
    alert("The e-mail field must not be empty !");
    return false;
  }
  console.log(inputValue)
  emailField.value = "";
  emailField.style = "";
  divDisplay.classList.toggle("turnoff");
  divMain.classList.toggle("turnoff");
  emailTxt.innerHTML = inputValue;
  emailError.classList.add('valid')
}

const backToForm = () => {
  divDisplay.classList.toggle("turnoff");
  divMain.classList.toggle("turnoff");
}


emailField.addEventListener('input', validateEmail)
form.addEventListener('submit', sendEmail)
dismissBtn.addEventListener('click', backToForm)