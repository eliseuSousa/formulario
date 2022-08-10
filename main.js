(() => {

  const init = () => {

    const validateEmail = (event) => {
      const input = event.target;
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      const emailTest = regex.test(input.value);

      if(!emailTest) {
        buttonSubmit.setAttribute('disabled', 'disabled');
        input.nextElementSibling.classList.add('error');
      } else {
        buttonSubmit.removeAttribute('disabled');
        input.nextElementSibling.classList.remove('error');
      }
    }

    const validatePassword = (event) => {
      const input = event.currentTarget;

      if(input.value.length < 8) {
        buttonSubmit.setAttribute('disabled', 'disabled');
        input.nextElementSibling.classList.add('error');
      } else {
        buttonSubmit.removeAttribute('disabled', 'disabled');
        input.nextElementSibling.classList.remove('error');
      }
    }

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const buttonSubmit = document.querySelector('.submit');

    inputEmail.addEventListener('input', validateEmail);
    inputPassword.addEventListener('input', validatePassword);

    const errorHandle = () => {
      buttonSubmit.classList.remove('success');
      buttonSubmit.classList.add('error');
      buttonSubmit.textContent = 'Erro :(';
    }

    const successHandle = () => {
      buttonSubmit.classList.remove('error');
      buttonSubmit.classList.add('success');
      buttonSubmit.textContent = 'Sent ;)';
    }

    if(buttonSubmit) {
      buttonSubmit.addEventListener('click', (event) => {
        event.preventDefault();

        buttonSubmit.textContent = '... Loading';

        fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({
            email: inputEmail.value,
            password: inputPassword.value,
          })
        }).then((response) => {
          if(response.status != 200) {
            errorHandle();
            return;
          }
          successHandle();
        }).catch(() => {
          errorHandle();
        })
        
      });
    }
  }

  window.onload=init;
})();