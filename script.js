let currentExpression = '';

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