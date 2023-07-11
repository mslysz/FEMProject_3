const form = document.querySelector('.form')
const emailField = document.querySelector('input.text');
const emailError = document.querySelector('span.validEmail');
const divDisplay = document.querySelector('.msgContainer');
const divMain = document.querySelector('.container');
const dismissBtn = document.querySelector('.dismissBtn');
const emailTxt = document.querySelector('.emailTxt')
// const mediaQueryCondition = body.matchMedia('(max-width: 375px');

const validateEmail = () => {
  if (!emailField.value.match(
    /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|.(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
  )) {
    emailError.innerHTML = "Valid email required";
    emailError.style = "color: hsl(4, 100%, 67%); padding-left: 200px;";
    emailField.style = "background-color:hsla(4, 100%, 67%, 0.256);"
    return false;
  } else {
    emailError.textContent = "";
    emailError.style = "";
    emailField.style = "";
    return true
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
  emailError.style = "";
  emailError.textContent = "";
  emailField.style = "";
  divDisplay.classList.toggle("turnoff");
  divMain.classList.toggle("turnoff");
  emailTxt.innerHTML = inputValue;
}

const backToForm = () => {
  console.log('Lol')
  divDisplay.classList.toggle("turnoff");
  divMain.classList.toggle("turnoff");
}


emailField.addEventListener('input', validateEmail)
form.addEventListener('submit', sendEmail)
dismissBtn.addEventListener('click', backToForm)