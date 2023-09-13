function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
  //Modal
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector('.modal-body');
const modalThank = document.querySelector('.modal-thank');
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector('.close');
const btnCloseThank = document.querySelector('.btn-close-thank');
const bgContent = document.querySelector('.content');

  //Form
const form = document.querySelector('form');
const inputsLocation = document.querySelectorAll('.checkbox-input-radio');
const locations = document.querySelector('.locations');
const inputFirstN = document.querySelector('#first');
const inputLastN = document.querySelector('#last');
const inputEmail = document.querySelector('#email');
const inputBirthday = document.querySelector('#birthday');
const inputQuantity = document.querySelector('#quantity');
const inputCondition = document.querySelector('#checkbox1');

//hide message thank you
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
  inputsCheckboxes.forEach(input => input.checked = false)

}

///////Close modal
  ///1. create callback function close modal form 
  function closeModal() {
    modalbg.style.display = "none";
  }

  ///2.add event close modal to btn Close 
  btnClose.addEventListener('click', closeModal);
  btnCloseThank.addEventListener('click', closeModal);

  ///3.close modal with escape on keyboard
  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
  })

//////Display or close error message
  ///1. Display error message
  function displayErrorMessage (inputEl) {
    inputEl.closest('.formData').dataset.errorVisible = 'true';
  }
  ///2. Close error message
  function closeErrorMessage (inputEl) {
    inputEl.closest('.formData').dataset.errorVisible = 'false';
  }

////////Check valid value for each input
  ///1. check valid first and last Name
  const arrInputsName = [inputFirstN, inputLastN];
  const cbValidName = function(inp) {
    if(inp.value.length > 2) {
      closeErrorMessage(inp);
      return true;
    } else {
      displayErrorMessage(inp);
      return false;
    }
  };

  arrInputsName.forEach((input) => {
    input.addEventListener('input', function() {
      cbValidName(this);
    })
  });

  ///2. check valid email
  const cbValidEmail = function (inp) {
    const mailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(inp.value.match(mailFormat)) {
      closeErrorMessage(inp);
      return true;
    } else {
      displayErrorMessage(inp);
      return false;
    }
  };

  inputEmail.addEventListener('input', function() {
    cbValidEmail(inputEmail);
    }
  );

  ///3. check valid birthday
  const cbValidBirthday = function(input) {
    // console.log(input.value);
    if (input.value === '') {
      console.log(input.value)
      displayErrorMessage(input)
      return false;
    } else {
        const birthMs = new Date(input.value);
        if (birthMs > 0) {
          const diffMs = Date.now() - birthMs;
          const age = new Date(diffMs).getFullYear() - 1970;

          if (age > 12) {
            closeErrorMessage(input);
            return true;
          } else {
            displayErrorMessage(input);
            return false;
          }
        } else {
          return false;
        }
    }
    
   
  };

  inputBirthday.addEventListener('input', function () {
    cbValidBirthday(inputBirthday);
  });

  ///4. check valid number of time participation
  const cbValidQuantity = function(input) {

    //for firefox: invalid if value = empty string or value < 0 or value > 99 of value is not a integer
    
      if (input.value === "" || input.value < 0 || input.value > 99) {
      document.querySelector('.form-quantity').dataset.error = 'Veuillez entrer une valeur entre 0 et 99'
      displayErrorMessage(input);
      return false

      //invalid input if la valeur n'est pas un numéro intégral 
    } else if (!Number.isInteger(Number(input.value))) {
      document.querySelector('.form-quantity').dataset.error = 'La valeur doit être un numéro entier positif '
      displayErrorMessage(input);
      return false

      // valid input  if value = 0
    } else if (input.value === '0') {
      closeErrorMessage(input)
      return true

      // valid input if 0 <= value <= 99
    } else {
      closeErrorMessage(input);
      return true
    };
  }

  inputQuantity.addEventListener('input', function () {
    cbValidQuantity(inputQuantity);
  })
  
  ///5. check valid input radio locations
  const cbValidLocations = function (arrInputs) {
    let isTrue = true;
    for (let input of arrInputs) {
      if(input.checked) {
        closeErrorMessage(input);
        isTrue = true;
        break
      } else {
        displayErrorMessage(input);
        isTrue = false;
      }
    }
    return isTrue
  }

  inputsLocation.forEach(input => {
    input.addEventListener('change', function() {
      const formLocations =  document.querySelector('.formData-locations');
      // console.log(input.checked);
      if (input.checked) {
        // console.log(formLocations);
      closeErrorMessage(formLocations);
      } else {
      displayErrorMessage(formLocations);
      }
    })
  })

    ///6. check valid checkbox condition
    const cbValidCondition = function (input){
    if (input.checked) {
      closeErrorMessage(input);
      return true;
    } else {
      displayErrorMessage(input);
      return false;
    }
    }
    inputCondition.addEventListener('change', function () {
      cbValidCondition(inputCondition);
    });

////////Submit form

function clearForm () {
  inputFirstN.value = inputLastN.value = inputBirthday.value = inputEmail.value = inputQuantity.Value = '';
  inputCondition.checked = false;
}

function validate (e) {
  e.preventDefault();

  const fieldValids = [
    cbValidName(inputFirstN),
    cbValidName(inputLastN),
    cbValidEmail(inputEmail),
    cbValidBirthday(inputBirthday),
    cbValidQuantity(inputQuantity),
    cbValidLocations(inputsLocation),
    cbValidCondition(inputCondition)
  ];
  const formValid = fieldValids.every((valid) => valid);
  
  if (formValid) {
    clearForm();
    modalBody.style.display = 'none';
    modalThank.style.display = 'block';
  } 
}




