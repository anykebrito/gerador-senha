const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const especiais = "!@#$&*?";

const senha = document.getElementById("senha");
const tamanho = document.getElementById("tamanho");
const opcaoMaiusculas = document.getElementById("maiusculas");
const opcaoMinusculas = document.getElementById("minusculas");
const opcaoNumeros = document.getElementById("numeros");
const opcaoEspeciais = document.getElementById("especiais");
const gerarSenhaBtn = document.getElementById("gerar");
const limparSenhaBtn = document.getElementById("limpar");

function gerarSenha() {
    let caracteres = "";

    if (opcaoMaiusculas.checked) {
        caracteres += maiusculas;
    }
    if (opcaoMinusculas.checked) {
        caracteres += minusculas;
    }
    if (opcaoNumeros.checked) {
        caracteres += numeros;
    }
    if (opcaoEspeciais.checked) {
        caracteres += especiais;
    }
    if (caracteres.length === 0) {
        senha.value = "Selecione uma opção!";
        return;
    }

    let senhagerada = "";
    let tamanhoSenha = tamanho.value;

    if (tamanhoSenha === "") {
        tamanhoSenha = 8;
    }

    if (tamanhoSenha < 4 || tamanhoSenha > 24) {
        alert("Tamanho inválido! (4-24)");
        senha.value = "Tamanho inválido! (4-24)";
        return;
    }

    for (let i = 0; i < tamanhoSenha; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        let caractere = caracteres[indice];
        senhagerada += caractere;
    }

    senha.value = senhagerada;
}

function limparSenha() {
    senha.value = "";
}

gerarSenhaBtn.addEventListener("click", gerarSenha);
limparSenhaBtn.addEventListener("click", limparSenha);