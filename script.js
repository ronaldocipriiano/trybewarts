const buttonEntrar = document.getElementById('button-entrar');
const desativaEnviar = document.getElementById('submit-btn');
const comentario = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');

const verificarButtonEntrar = () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  buttonEntrar.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      console.log('Login com sucesso');
      alert('Olá, Tryber!');
    } else {
      console.log('Login falhou');
      alert('Email ou senha inválidos.');
    }
  });
};

const desativarEnviar = () => {
  desativaEnviar.disabled = true;
};

const validarCheckbox = () => {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      desativaEnviar.disabled = false;
    } else {
      desativaEnviar.disabled = true;
    }
  });
};

counter.textContent = '500 caracteres restantes';

comentario.addEventListener('input', () => {
  const remainingCharacters = 500 - comentario.value.length;
  counter.textContent = `${remainingCharacters} caracteres restantes`;
});

const handleSubmit = () => {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familiaInput = document.querySelector('input[name="family"]:checked');
  const familia = familiaInput ? familiaInput.value : 'Nenhum selecionado';
  const materiasSelecionadas = document.querySelectorAll('input.subject:checked');
  const materiasArray = Array.from(materiasSelecionadas).map((materia) => materia.value);
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const observacoes = document.getElementById('textarea').value;
  document.getElementById('data-nome').textContent = `Nome: ${nome} ${sobrenome}`;
  document.getElementById('data-email').textContent = `Email: ${email}`;
  document.getElementById('data-casa').textContent = `Casa: ${casa}`;
  document.getElementById('data-familia').textContent = `Família: ${familia}`;
  document.getElementById('data-materias').textContent = `Matérias: ${materiasArray.join(', ')}`;
  document.getElementById('data-avaliacao').textContent = `Avaliação: ${avaliacao}`;
  document.getElementById('data-observacoes').textContent = `Observações: ${observacoes}`;
};

form.addEventListener('submit', (e) => {
  console.log('Formulário enviado');
  handleSubmit();
  e.preventDefault();
  formData.style.display = 'block';
  form.style.display = 'none';
});

desativarEnviar();
validarCheckbox();
verificarButtonEntrar();
