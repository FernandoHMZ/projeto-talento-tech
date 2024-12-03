let currentExpression = '';
let isScientific = false;  // Variável para controlar o modo da calculadora

function appendNumber(value) {
  currentExpression += value;
  document.getElementById('resultado').value = currentExpression;
}

function clearResult() {
  currentExpression = '';
  document.getElementById('resultado').value = '';
}

function calculateResult() {
  try {
    const result = eval(currentExpression); // Avalia a expressão
    document.getElementById('resultado').value = result;
    currentExpression = result.toString();
  } catch (error) {
    document.getElementById('resultado').value = 'Erro';
    currentExpression = '';
  }
}

function setTheme(theme) {
    document.body.className = theme; // Define a classe do body como o tema selecionado
}

function toggleCalculatorMode() {
    // Alterna entre o modo simples e o científico
    isScientific = !isScientific;

    // Mostrar ou esconder os botões de acordo com o modo
    if (isScientific) {
        document.getElementById('simple-buttons').style.display = 'none';
        document.getElementById('scientific-buttons').style.display = 'block';
    } else {
        document.getElementById('simple-buttons').style.display = 'block';
        document.getElementById('scientific-buttons').style.display = 'none';
    }
}
