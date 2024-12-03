let currentExpression = '';
let history = []; // Para armazenar o histórico de cálculos

// Função para adicionar números à expressão
function appendNumber(value) {
  currentExpression += value;
  document.getElementById('resultado').value = currentExpression;
}

// Função para adicionar operadores (+, -, *, /)
function appendOperator(value) {
  currentExpression += value;
  document.getElementById('resultado').value = currentExpression;
}

// Função para adicionar funções matemáticas como Math.log, Math.sin, etc.
function appendFunction(func) {
  currentExpression += func + '('; // Adiciona a função com parêntese aberto
  document.getElementById('resultado').value = currentExpression;
}

// Função para adicionar ou fechar parênteses
function appendParenthesis() {
  const openParens = (currentExpression.match(/\(/g) || []).length;
  const closeParens = (currentExpression.match(/\)/g) || []).length;

  // Se temos menos parênteses fechados, adiciona um parêntese de fechamento
  if (openParens > closeParens) {
    currentExpression += ')';
  } else {
    currentExpression += '('; // Caso contrário, adiciona um parêntese de abertura
  }

  document.getElementById('resultado').value = currentExpression;
}

// Função para calcular a exponenciação (elevado a)
function appendExponent() {
  currentExpression += '**'; // Representação de exponenciação no JavaScript
  document.getElementById('resultado').value = currentExpression;
}

// Função para calcular a raiz quadrada
function appendSquareRoot() {
  currentExpression += 'Math.sqrt(';
  document.getElementById('resultado').value = currentExpression;
}

// Função para calcular a tangente
function appendTangente() {
  currentExpression += 'Math.tan(';
  document.getElementById('resultado').value = currentExpression;
}

// Função para limpar o resultado
function clearResult() {
  currentExpression = '';
  document.getElementById('resultado').value = '';
}

// Função para calcular o resultado
function calculateResult() {
  try {
    // Usa eval() de forma segura para calcular a expressão
    const result = eval(currentExpression.replace(/Math\./g, 'window.Math.'));
    document.getElementById('resultado').value = result;

    // Adiciona o cálculo ao histórico
    addToHistory(currentExpression + ' = ' + result);

    currentExpression = result.toString();
  } catch (error) {
    document.getElementById('resultado').value = 'Erro';
    currentExpression = '';
  }
}

// Função para adicionar um cálculo ao histórico
function addToHistory(calculation) {
  history.push(calculation);

  // Atualiza o histórico no DOM
  const historyList = document.getElementById('history-list');
  const historyItem = document.createElement('li');
  historyItem.textContent = calculation;
  historyItem.onclick = function() {
    const expression = calculation.split(' = ')[0]; // Pega apenas a expressão antes do "="
    currentExpression = expression;
    document.getElementById('resultado').value = currentExpression;
  };
  historyList.appendChild(historyItem);
}

// Função para aplicar o tema
function setTheme(theme) {
  document.body.className = theme; // Define a classe do body como o tema selecionado
}
