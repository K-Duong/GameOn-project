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
const modalBody = document.querySelector('.modal-body');
const modalThank = document.querySelector('.modal-thank');
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector('.close');
const btnCloseThank = document.querySelector('.btn-close-thank');
const form = document.querySelector('form');
const inputsLocation = document.querySelectorAll('.checkbox-input-radio');
const locations = document.querySelector('.locations');
const bgContent = document.querySelector('.content');

// const inputFirstN = document.querySelector('#first');
const inputEmail = document.querySelector('#email');
// const inputBirthday = document.querySelector('#birthday');
// const inputQuantity = document.querySelector('#quantity');
// const inputsCheckboxes = document.querySelectorAll('.checkboxes');
// const inputCondition = document.querySelector('#checkbox1');
// inputFirstN.value = 'Duong';




////////Create inputs objects

const datas = [
  firstName = {
    domElement : document.querySelector('#first'),
    validCondition() {
      return this.domElement.value.length > 2 ? true : false
    } ,
  },

  lastName = {
    domElement : document.querySelector('#last'),
    validCondition() {
      return this.domElement.value.length > 2 ? true : false
    }
  },

  email = {
    domElement : document.querySelector('#email'),
    validCondition() {
      const mailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      
      return this.domElement.value.match(mailFormat) ? true : false
    }
  },
  
  birthday = {
    domElement : document.querySelector('#birthday'),
    validCondition()  {
      return this.domElement.value
    }
  },
  
  quantity = {
    domElement : document.querySelector('#quantity'),
    validCondition() {
      return  Number(this.domElement.value) !== NaN && Number(this.domElement.value) && this.domElement.value >= 0 && this.domElement.value < 99 ? true : false

    }
  },

  checkbox1 = {
    domElement : document.querySelector('#checkbox1'),
    value: 1,
    validCondition() {
      return this.domElement.checked;
    }
  },

  // checkbox2 = {
  //   domElement : document.querySelector('#checkbox2'),
  //   value: 1,
  //   // validCondition() {
  //   //   return ;
  //   // }
  // }
  
]

//display none message thank you
modalThank.style.display = "none";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  const inputsCheckboxes = document.querySelectorAll('.checkboxes');
  modalbg.style.display = "block";
  // initialize form
  modalBody.style.display = 'block';
  modalThank.style.display = 'none';
  formData.forEach(form => form.dataset['errorVisible'] ='false');
  datas.forEach(data => { 
    if (data.domElement.className === 'text-control') {
      data.domElement.value = '';
    }   
  })
  inputsCheckboxes.forEach(input => input.checked = false)


}
// function displayForm () {
//   modalBody.style.display = 'block';
//  modalThank.style.display = 'none';
// }



///////Close modal

  //1. create callback function close modal form 
  function closeModal() {
    modalbg.style.display = "none";
  }

  //2.add event close modal to btn Close 
  btnClose.addEventListener('click', closeModal);
  btnCloseThank.addEventListener('click', closeModal);

  //3.close modal with escape on keyboard
  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
  })



////////Check valid value for each input
///callback func to check all types of value

function isTrue (target, condition) {
  if (condition) {
    target.dataset['errorVisible'] = 'false'
  } else {
    target.dataset['errorVisible'] = 'true';
  }
}

function checkValidInput (e, condition) {
  const target = e.target.closest('.formData');
  isTrue(target, condition);
}

function getValue (input, objVal) {
  const value = input.value;
  return objVal.value = value;
}

////functions to display or close error message

const displayErrorMessage = (inputEl) => {
  inputEl.closest('.formData').dataset['errorVisible'] = 'true';
}
const closeErrorMessage = (inputEl) => {
  inputEl.closest('.formData').dataset['errorVisible'] = 'false';
}
/// add event for each type of input

function blabla() {
  console.log(arguments)
}

datas.forEach(data => {
  data.domElement.addEventListener('input', (e) => {
    const condition = data.validCondition();
    // console.log(typeof(condition));
    checkValidInput(e, condition);
    getValue(data.domElement, data);
  })
})

// inputFirstN.addEventListener('input', (e) => {
//   const condition = inputFirstN.value.length > 2;

//   checkValidInput(e, condition);
//   getValue(inputFirstN,firstName);
//   // console.log(datas[0].validCondition());
// })

// inputEmail.addEventListener('input', (e) => {
//   const condition = inputEmail.value.includes('@');
//   checkValidInput(e, condition);
//   getValue(inputEmail,email);
// })

// inputBirthday.addEventListener('input', (e) => {
//   const condition = inputBirthday.value;
//   checkValidInput(e, condition);
//   getValue(inputBirthday,birthday);
// })

// inputQuantity.addEventListener('input', (e) => {
//   // const condition = inputQuantity.value >= 0 && inputQuantity.value < 99 ;
//   // checkValidInput(e, condition);
//   // getValue(inputQuantity,quantity);
//   // console.log(typeof(inputQuantity.value));
// })

inputsLocation.forEach((input) => {
  input.addEventListener('input', () => {
    console.log(input.name);
  })
})

////////Check valid value for submitted form 

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // const html = `
  // <div class="modal-thank">
  //   <div class="text">
  //     <p>Merci pour </p>
  //     <p>votre inscription</p>
  //   </div>
  //   <button class="btn-close-thank">Fermer</button>
  // </div>`;

  
  const invalidForm =  datas.some(data => !data.value || !data.validCondition())

  if(invalidForm) {
    datas.forEach(data => {
    if(!data.value || !data.validCondition()) { 
      // console.log(data, !data.validCondition());
      displayErrorMessage(data.domElement)
    } else {
      // console.log(data, !data.validCondition());
      closeErrorMessage(data.domElement);
    }
    })

  } else {
    modalBody.style.display = 'none';
    modalThank.style.display = 'block';
  }
})






