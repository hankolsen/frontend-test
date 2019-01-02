const formEl = document.querySelector('form');

const submitHandler = (event) => {
  event.preventDefault();
  const passwordEl = document.querySelector('input[name=password]');
  const password = passwordEl.value;
  const reverse = password.split('').reverse().join('');
  console.log(reverse);
  passwordEl.value = reverse;
  formEl.submit();
};

formEl.addEventListener('submit', submitHandler);
