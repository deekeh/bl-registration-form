const firstname = document.getElementById('firstname');

const validate = () => {
  const checkElementError = element => {
    if (element.value.trim() === '') {
      element.parentElement.className = 'form-field error';
      return `${element.id} required`;
    }
    else if (element.value.length <= 3 || element.value.length >= 20) {
      element.parentElement.className = 'form-field error';
      return `${element.id} length mismatch`;
    }
    else {
      element.parentElement.className = 'form-field success';
      return false;
    }
  }
  if (err = checkElementError(firstname)) {
    firstname.parentElement.querySelector('small').innerText = err;
  }
}