const buttonEntrar = document.getElementById('button-entrar');
let desativaEnviar = document.getElementById('submit-btn')

const verificarButtonEntrar = () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  buttonEntrar.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    } else if (email.value !== 'tryber@teste.com' && password.value !== '123456') {
      alert('Email ou senha inválidos.');
    }
  });
};

const desativarEnviar = () => {
  desativaEnviar.disabled = true;
};

const validarCheckbox = () => {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      desativaEnviar.disabled = false;
    } else {
      desativaEnviar.disabled = true;
    }
  });
};

desativarEnviar();
validarCheckbox();
verificarButtonEntrar();
