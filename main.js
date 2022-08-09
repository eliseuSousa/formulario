(() => {

  const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const buttonSubmit = document.querySelector('.submit');

    if(buttonSubmit) {
      buttonSubmit.addEventListener('click', (event) => {
        event.preventDefault();

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
          return response.json();
        }).then((data) => {
          console.log(data);
        })
        
      });
    }
  }

  window.onload=init;
})();