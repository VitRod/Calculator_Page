

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
























