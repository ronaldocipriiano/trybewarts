const buttonEntrar = document.getElementById("button-entrar");
const trybewartsLogin = document.getElementsByClassName(".trybewarts-login")
const email = document.querySelector('email');
const password = document.querySelector('password');

const verificarButtonEntrar = () => {
    if(email === "tryber@teste.com" && password === "123456"){
        alert("Olá, Tryber!");
    } else {
        alert('Email ou senha inválidos');
    }
};

onclick(verificarButtonEntrar);

console.log(verificarButtonEntrar);