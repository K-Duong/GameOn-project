function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector('.close');
const inputFirstN = document.querySelector('#first');
const inputEmail = document.querySelector('#email');
const inputBirthday = document.querySelector('#birthday');
const inputQuantity = document.querySelector('#quantity');
const inputsLocation = document.querySelectorAll('.checkbox-input');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

///////Close modal

  //add event close modal to btn Close 
  btnClose.addEventListener('click', closeModal);

  //close modal with escape on keyboard
  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
  })

////////Check valid value in form

