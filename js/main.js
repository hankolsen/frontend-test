const formEl = document.querySelector('form');

const submitHandler = (event) => {
  event.preventDefault();
  const passwordEl = document.querySelector('input[name=password]');
  const password = passwordEl.value;
  const reverse = password.split('').reverse().join('');
  passwordEl.value = reverse;
  console.log(reverse);

  const usernameEl = document.querySelector('input[name=username]');
  const username = usernameEl.value;

  if (isAuthenticated(username, password)) {
    formEl.submit();
  }
};

formEl.addEventListener('submit', submitHandler);
