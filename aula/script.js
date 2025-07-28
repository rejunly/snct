// Array de frutas
let frutas = ["Banana", "Maçã", "Laranja"];

// Objeto do usuário
const usuario = {
  nome: "",
  saudar: function() {
    return `Olá, ${this.nome}! Bem-vindo(a) à lista de frutas.`;
  }
};

// Manipula DOM
const inputNome = document.getElementById("nome");
const botaoSaudar = document.getElementById("saudar");
const paragrafoMensagem = document.getElementById("mensagem");

const ulFrutas = document.getElementById("listaFrutas");
const inputNovaFruta = document.getElementById("novaFruta");
const botaoAdicionar = document.getElementById("adicionarFruta");
const botaoRemover = document.getElementById("removerFruta");

// exibir a lista
function mostrarFrutas() {
  ulFrutas.innerHTML = ""; // limpa a lista atual

  for (let i = 0; i < frutas.length; i++) {
    let li = document.createElement("li");
    li.innerText = frutas[i];
    ulFrutas.appendChild(li);
  }
}

botaoSaudar.addEventListener("click", () => {
  const nomeDigitado = inputNome.value;

  if (nomeDigitado.trim() === "") {
    paragrafoMensagem.innerText = "Campo vazio. Digite seu nome.";
  } else {
    usuario.nome = nomeDigitado;
    paragrafoMensagem.innerText = usuario.saudar();
  }
});

//Add fruta
botaoAdicionar.addEventListener("click", () => {
  const novaFruta = inputNovaFruta.value;

  if (novaFruta.trim() !== "") {
    frutas.push(novaFruta);
    mostrarFrutas();
    inputNovaFruta.value = ""; // limpa campo
  }
});

// Remover fruta
botaoRemover.addEventListener("click", () => {
  if (frutas.length > 0) {
    frutas.pop();
    mostrarFrutas();
  } else {
    alert("A lista já está vazia.");
  }
});

// Mostrar a lista inicial
mostrarFrutas();
