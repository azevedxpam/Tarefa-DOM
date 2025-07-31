const inputNota = document.getElementById("nota");
const btnAdicionar = document.getElementById("btn-adicionar");
const btnCalcular = document.getElementById("btn-calcular");
const listaNotas = document.getElementById("lista-notas");
const resultado = document.getElementById("resultado");

let notas = [];

function exibirErro(mensagem) {
  alert(mensagem);
}

btnAdicionar.addEventListener("click", () => {
  let valor = inputNota.value.replace(",", ".").trim();

  if (valor === "") {
    exibirErro("Por favor, insira uma nota");
    return;
  }

  let nota = parseFloat(valor);
  if (isNaN(nota) || nota < 0 || nota > 10) {
    exibirErro(
      "A nota digitada é inválida, por favor, insira uma nota válida."
    );
    return;
  }

  notas.push(nota);

  const li = document.createElement("li");
  li.textContent = `Nota: ${nota}`;
  listaNotas.appendChild(li);

  inputNota.value = "";
});

btnCalcular.addEventListener("click", () => {
  if (notas.length === 0) {
    exibirErro("Nenhuma nota foi inserida.");
    return;
  }

  let soma = notas.reduce((acc, nota) => acc + nota, 0);
  let media = soma / notas.length;
  resultado.textContent = `A Média é: ${media.toFixed(2)}`;
});
