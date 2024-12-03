let currentExpression = '';
let history = [];

function appendNumber(value) {
  currentExpression += value;
  document.getElementById('resultado').value = currentExpression;
}

function appendOperator(value) {
  currentExpression += value;
  document.getElementById('resultado').value = currentExpression;
}

function appendFunction(func) {
  currentExpression += func + '(';
  document.getElementById('resultado').value = currentExpression;
}

function appendParenthesis() {
  const openParens = (currentExpression.match(/\(/g) || []).length;
  const closeParens = (currentExpression.match(/\)/g) || []).length;

  if (openParens > closeParens) {
    currentExpression += ')';
  } else {
    currentExpression += '(';
  }

  document.getElementById('resultado').value = currentExpression;
}

function appendExponent() {
  currentExpression += '**';
  document.getElementById('resultado').value = currentExpression;
}

function appendSquareRoot() {
  currentExpression += 'Math.sqrt(';
  document.getElementById('resultado').value = currentExpression;
}

function appendTangente() {
  currentExpression += 'Math.tan(';
  document.getElementById('resultado').value = currentExpression;
}

function clearResult() {
  currentExpression = '';
  document.getElementById('resultado').value = '';
}

function calculateResult() {
  try {
    const result = eval(currentExpression.replace(/Math\./g, 'window.Math.'));
    document.getElementById('resultado').value = result;

    addToHistory(currentExpression + ' = ' + result);

    currentExpression = result.toString();
  } catch (error) {
    document.getElementById('resultado').value = 'Erro';
    currentExpression = '';
  }
}

function addToHistory(calculation) {
  history.push(calculation);

  const historyList = document.getElementById('history-list');
  const historyItem = document.createElement('li');
  historyItem.textContent = calculation;
  historyItem.onclick = function() {
    const expression = calculation.split(' = ')[0];
    document.getElementById('resultado').value = currentExpression;
  };
  historyList.appendChild(historyItem);
}

function setTheme(theme) {
  document.body.className = theme;
}
