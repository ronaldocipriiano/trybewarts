const buttonEntrar = document.getElementById("button-entrar");
document.getElementById("submit-btn").disabled = true;


const verificarButtonEntrar = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    buttonEntrar.addEventListener("click", () => {
        if(email.value === "tryber@teste.com" && password.value === "123456"){
            alert("Olá, Tryber!");
        } else if(email.value !== "tryber@teste.com" && password.value !== "123456"){
            alert("Email ou senha inválidos");
        }
    })
};

const validarCheckbox = () => {
    let checkbox = document.getElementById('agreement');
        checkbox.addEventListener("click", () => {
          if (checkbox.checked) {
            document.getElementById("submit-btn").disabled = false;
          } else {
            document.getElementById("submit-btn").disabled = true;
          }
      });
};


validarCheckbox();
verificarButtonEntrar();

