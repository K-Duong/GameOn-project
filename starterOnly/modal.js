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

//add event close modal to btn Close 
btnClose.addEventListener('click', closeModal);

//close modal with escape on keyboard
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
})
