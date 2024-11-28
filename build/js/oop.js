class Calculator {
  constructor(a, b, operator) {
    this.a = a;
    this.b = b;
    this.operator = operator;
  }

  /**
   * Returns the sum of two numbers.
   * 
   * @param {number} a - The first number to add.
   * @param {number} b - The second number to add.
   * @returns {number} The sum of a and b.
   */
  sum(a, b) {
    return a + b;
  }

  /**
   * Subtracts the second number from the first number.
   * 
   * @param {number} a - The number from which to subtract.
   * @param {number} b - The number to subtract.
   * @returns {number} The result of a minus b.
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * 
   * @param {number} a - The first number to multiply.
   * @param {number} b - The second number to multiply.
   * @returns {number} The product of a and b.
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divides two numbers.
   * 
   * @param {number} a - The dividend.
   * @param {number} b - The divisor.
   * @returns {number|string} The quotient of a and b if b is not zero, or
   * "Cannot divide by zero" if b is zero.
   */
  divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }

  /**
   * Performs an operation on two numbers based on the provided operator.
   *
   * @param {string} operator - The operator to apply, should be one of "+", "-", "*", or "/".
   * @param {number} a - The first operand.
   * @param {number} b - The second operand.
   * @returns {number|string} The result of the operation, or a string if division by zero is attempted.
   */
  operate(operator, a, b) {
    switch (operator) {
      case "+":
        return this.sum(a, b);
      case "-":
        return this.subtract(a, b);
      case "*":
        return this.multiply(a, b);
      case "/":
        return this.divide(a, b);
    }
  }
}

/**
 * Checks if a given string can be converted to a number.
 * 
 * @param {string} input - The string to check.
 * @returns {number|boolean} The number if the conversion was successful, or
 * false if not.
 */
function validateNumber(input) {
  const n = Number(input);
  return isNaN(n) ? false : n;
}

/**
 * Checks if a given string is a valid operator for the operate function.
 * 
 * @param {string} input - The string to check.
 * @returns {string|boolean} The operator if the check was successful, or false if not.
 */
function validateOperator(input) {
  const op = operators.find((op) => op === input);
  return op ? op : false;
}

// Valid operators
const operators = ["+", "-", "*", "/"];

const button = document.getElementById("launch");
button.addEventListener("click", () => {
  let a = null;
  let b = null;
  let operator = null;

  // Get user input and validate it (number 1)
  do {
    a = prompt("Enter a number");
    if (a === null) {
      return;
    }
    a = validateNumber(a);
    if (a === false) {
      alert("Invalid number");
    }
  } while (a === false);

  // Get user input and validate it (operator)
  do {
    operator = prompt("Enter an operator");
    if (operator === null) {
      return;
    }
    operator = validateOperator(operator);
    if (operator === false) {
      alert("Invalid operator");
    }
  } while (operator === false);

  // Get user input and validate it (number 2)
  do {
    b = prompt("Enter a number");
    if (b === null) {
      return;
    }
    b = validateNumber(b);
    if (b === false) {
      alert("Invalid number");
    }
  } while (b === false);

  // Perform the operation
  const calculator = new Calculator();
  const result = calculator.operate(operator, a, b);
  alert(`${a} ${operator} ${b} = ${result}`);
});
