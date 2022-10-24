

const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

// calculate first and second values dependind on operator
const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
  };

  let firstValue = 0;
  let operatorValue = '';
  let awaitingNextValue = false;

  function sendNumberValue(number) {
    if (awaitingNextValue) {
      calculatorDisplay.textContent = number;
      awaitingNextValue = false;
    } else {
      // if current display value is 0, repalece it, if not add number
      const displayValue = calculatorDisplay.textContent;
      calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
  }

  function addDecimal() {
    // if operator pressed, don't add decimal
    if (awaitingNextValue) return;
    // if no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')) {
      calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
  }

  function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
  
    // prevent multiple operators
    if (operatorValue && awaitingNextValue) {
      operatorValue = operator;
      return;
    }
  
    // assign firstValue if no value
    if (!firstValue || firstValue.length > 3) {
      firstValue = currentValue;
      calculatorDisplay.textContent = firstValue.toLocaleString();
      calculatorDisplay.textContent = currentValue.toLocaleString();
    } else {
      const calculation = calculate[operatorValue](firstValue, currentValue).toLocaleString();
      calculatorDisplay.textContent = calculation;
      firstValue = calculation;
    }
  
    // ready for next value, store operator
    awaitingNextValue = true;
    operatorValue = operator;
  }

// reset  all values & display
function resetAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
  }

// add events listeners for numbers operators, decimal buttons
inputBtns.forEach(inputBtn => {
    if (inputBtn.classList.length === 0) {
      inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
      inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')) {
      inputBtn.addEventListener('click', () => addDecimal());
    }
  });
  
  clearBtn.addEventListener('click', resetAll);
  
















