const formFields = [
  {
    element: document.getElementById('firstname'),
    test: {
      pattern: /^[a-zA-Z0-9]{3,20}$/,
      errorMessage: 'First Name length should be between 3 and 20',
    }
  },
  {
    element: document.getElementById('lastname'),
    test: {
      pattern: /^[a-zA-Z0-9]{3,20}$/,
      errorMessage: 'Last Name length should be between 3 and 20',
    }
  },
  {
    element: document.getElementById('contact'),
    test: {
      pattern: /^[6789][0-9]{9}$/,
      errorMessage: 'Phone should be 10 digits long and should start with 6/7/8/9',
    }
  },
  {
    element: document.getElementById('email'),
    test: {
      pattern: /^([a-zA-Z0-9]+([.][a-zA-Z0-9]+)*)[@]([a-zA-Z0-9]+([.][a-zA-Z]{2,})+)$/,
      errorMessage: 'Email should be of proper format e.g., name@domain.ext',
    }
  },
  {
    element:document.getElementById('address'),
    required: false,
  }
];

const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const validate = () => {
  // validator function
  const checkElementError = ({element, test, required=true}) => {
    if (!required) {
      // element.parentElement.className = 'form-field success';
      element.parentElement.classList.add('success');
      element.parentElement.classList.remove('error');
      return false;
    }
    if (element.value.trim() === '') {
      // element.parentElement.className = 'form-field error';
      element.parentElement.classList.remove('success');
      element.parentElement.classList.add('error');
      return `${element.id} required`;
    }
    else if (!test.pattern.test(element.value.trim())) {
      // element.parentElement.className = 'form-field error';
      element.parentElement.classList.remove('success');
      element.parentElement.classList.add('error');
      return test.errorMessage;
    }
    else {
      element.parentElement.className = 'form-field success';
      return false;
    }
  }

  // password validator
  const passwordValidatorError = (password, password2) => {
    const p1Value = password.value;
    const p2Value = password2.value;

    if (p1Value === '' || p2Value === '') {
      // password.parentElement.className = 'form-field error';
      // password2.parentElement.className = 'form-field error';
      password.parentElement.classList.remove('success');
      password.parentElement.classList.add('error');
      password2.parentElement.classList.remove('success');
      password2.parentElement.classList.add('error');
      return "Password is required";
    }
    else if (p1Value !== p2Value) {
      // password.parentElement.className = 'form-field error';
      // password2.parentElement.className = 'form-field error';
      password.parentElement.classList.remove('success');
      password.parentElement.classList.add('error');
      password2.parentElement.classList.remove('success');
      password2.parentElement.classList.add('error');
      return "Both the passwords should match";
    }
    else if (!/^(?=.*?[!@#$%^_+&*]{1})(?=.*?[A-Z]+)(?=.*?\d+).{8,}$/.test(p1Value)) {
      // password.parentElement.className = 'form-field error';
      // password2.parentElement.className = 'form-field error';
      password.parentElement.classList.remove('success');
      password.parentElement.classList.add('error');
      password2.parentElement.classList.remove('success');
      password2.parentElement.classList.add('error');
      return "Password should contain at least 1  upper case letter, digit, 1 special character and should be at least 8 characters long";
    }
    else {
      password.parentElement.className = 'form-field success';
      password2.parentElement.className = 'form-field success';
      password.parentElement.classList.add('success');
      password.parentElement.classList.remove('error');
      password2.parentElement.classList.add('success');
      password2.parentElement.classList.remove('error');
      return false;
    }
  }

  // error-displaying function
  formFields.forEach(field => {
    if (err = checkElementError(field)) {
      field.element.parentElement.querySelector('small').innerText = err;
    }
  });
  if (err = passwordValidatorError(password, password2)) {
    password.parentElement.querySelector('small').innerText = err;
    password2.parentElement.querySelector('small').innerText = err;
  }
}