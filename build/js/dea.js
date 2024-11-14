const display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data-value]");

/**
 * Clears the calculator display by setting its value to an empty string.
 */
function clear() {
  display.value = "";
}

/**
 * Evaluates the expression in the display element and assigns the result
 * to the display element. If the expression is invalid, it sets the display
 * element to "Error".
 */
function calculate() {
  const expression = display.value;
  try {
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}

// Adds a click event listener to each button element in the `buttons` NodeList
// which appends the `data-value` attribute value to the `display` element
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    display.value += value;
  });
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);

const calculateButton = document.getElementById("equals");
calculateButton.addEventListener("click", calculate);
