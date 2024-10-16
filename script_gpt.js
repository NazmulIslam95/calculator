// ------------------------ script from CHATGPT -------------------------------

// // script.js

// // Select the input display element
// const display = document.querySelector('input');

// // Function to append value to the display
// function appendToDisplay(value) {
//     display.value += value;
// }

// // Function to clear the display
// function clearDisplay() {
//     display.value = '';
// }

// // Function to evaluate the expression and display the result
// function evaluateExpression() {
//     try {
//         display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
//     } catch {
//         display.value = 'Error';
//     }
// }

// // Function to change the sign of the number
// function toggleSign() {
//     if (display.value) {
//         display.value = (parseFloat(display.value) * -1).toString();
//     }
// }

// // Add event listeners to all buttons
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', function () {
//         const value = this.textContent.trim();

//         switch (value) {
//             case 'AC':
//                 clearDisplay();
//                 break;
//             case '=':
//                 evaluateExpression();
//                 break;
//             case '±':
//                 toggleSign();
//                 break;
//             default:
//                 appendToDisplay(value);
//                 break;
//         }
//     });
// });


// -------------------------------------------------------

// // Select the input display element
// const display = document.querySelector('input');

// // Function to handle button clicks based on the button's value
// function handleButtonClick(value) {
//     switch (value) {
//         case 'AC': // Clear display
//             clearDisplay();
//             break;
//         case '=': // Evaluate expression
//             evaluateExpression();
//             break;
//         case '±': // Toggle sign
//             toggleSign();
//             break;
//         default: // Append number/operator to display
//             appendToDisplay(value);
//     }
// }

// // Append value to display
// function appendToDisplay(value) {
//     display.value += value;
// }

// // Clear display
// function clearDisplay() {
//     display.value = '';
// }

// // Evaluate the expression in the display
// function evaluateExpression() {
//     try {
//         display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
//     } catch {
//         display.value = 'Error';
//     }
// }

// // Toggle the sign of the current number
// function toggleSign() {
//     if (display.value) {
//         display.value = (parseFloat(display.value) * -1).toString();
//     }
// }

// // Add event listeners to all buttons
// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', () => handleButtonClick(button.textContent.trim()));
// });

// ------------------------------------------------------

// // Get the input element where numbers and results are displayed
// const display = document.querySelector('input');

// // Function to handle what happens when a button is clicked
// function handleButtonClick(value) {
//     // Check what the button is and perform the right action
//     if (value === 'AC') {      // If the button is 'AC', clear the display
//         clearDisplay();
//     } else if (value === '=') { // If the button is '=', evaluate the expression
//         evaluateExpression();
//     } else if (value === '±') { // If the button is '±', change the sign of the number
//         toggleSign();
//     } else {                    // Otherwise, add the button's value to the display
//         appendToDisplay(value);
//     }
// }

// // Function to add a number or operator to the display
// function appendToDisplay(value) {
//     display.value += value; // Add the button's value to the input field
// }

// // Function to clear the display
// function clearDisplay() {
//     display.value = ''; // Make the display empty
// }

// // Function to evaluate the math expression
// function evaluateExpression() {
//     try {
//         // Replace special characters (× and ÷) with *, / and calculate the result
//         display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
//     } catch {
//         // If there is an error (e.g., invalid math), show "Error"
//         display.value = 'Error';
//     }
// }

// // Function to change the sign of the current number
// function toggleSign() {
//     if (display.value) { // Only do this if there's something on the display
//         display.value = (parseFloat(display.value) * -1).toString(); // Multiply by -1
//     }
// }

// // Add an event listener to each button on the page
// document.querySelectorAll('button').forEach(button => {
//     // When a button is clicked, get its text and pass it to handleButtonClick
//     button.addEventListener('click', () => {
//         const value = button.textContent.trim(); // Get the button text
//         handleButtonClick(value); // Pass the text to our function
//     });
// });
