//Botão de subtração
const SUBTRACT = document.getElementById("subtract");
//Botão de adição
const ADD = document.getElementById("add");
//Botão de reset
const RESET = document.getElementById("reset");
//Número do contador
const CURRENT_NUMBER_WRAPPER = document.getElementById("currentNumber");

let count = 0;
CURRENT_NUMBER_WRAPPER.innerHTML = count;

ADD.addEventListener("click", function () {
  CURRENT_NUMBER_WRAPPER.innerHTML = ++count;
});

SUBTRACT.addEventListener("click", function () {
  CURRENT_NUMBER_WRAPPER.innerHTML = --count;
});

RESET.addEventListener("click", function () {
  CURRENT_NUMBER_WRAPPER.innerHTML = count = 0;
});
