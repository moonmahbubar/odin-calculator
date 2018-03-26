const numbers = document.getElementById('numbers');
const buttons = numbers.querySelectorAll('div > button');
const screen = document.getElementById('screen');
let screenNumber; 
let lastNum;
let lastOp;


function operate(operation, num1, num2) {
    switch (operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return 0;
    }
}


buttons.forEach(button => {
    button.addEventListener('click', e => {
        let buttonContent = e.target.textContent;
        let operations = ['*','+','-','/'];
        
        if (parseInt(buttonContent)) {
            screen.textContent += buttonContent;
            screenNumber = parseInt(screen.textContent);
        }  else if (operations.includes(buttonContent)) {
            
        }
        else {
            screen.textContent = result;
        }
    })
})