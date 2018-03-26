const numbers = document.getElementById('numbers');
const buttons = numbers.querySelectorAll('div > button');
const screen = document.getElementById('screen');
let lastOp = '';
let nums = [];

function operate(operation, num1, num2) {
    switch (operation) {
        case '+': return parseInt(num1) + parseInt(num2);
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return 'ERROR';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        //alert(e.target.textContent);
        let buttonContent = e.target.textContent;

        if (parseInt(buttonContent)) {
            screen.textContent += buttonContent;

        } else if (buttonContent === '=' && lastOp !== '') {
            nums[nums.length] = parseInt(screen.textContent);
            let result = operate(lastOp,nums[nums.length-2],nums[nums.length-1]);
            nums[nums.length] = result;
            screen.textContent = result;
            
        } else {
            nums[nums.length] = screen.textContent;
            lastOp = buttonContent;
            screen.textContent = '';

        }
    })
})

// buttons.forEach(button => {
//     button.addEventListener('click', e => {
//         //alert(e.target.textContent);
//         let buttonContent = e.target.textContent;

//         if (parseInt(buttonContent)) {
//             screen.textContent += buttonContent;

//         } else if (buttonContent === '=' && lastOp !== '') {
//             nums[nums.length] = parseInt(screen.textContent);
//             let result = operate(lastOp,nums[nums.length-2],nums[nums.length-1]);
//             nums[nums.length] = result;
//             screen.textContent = result;
//         } else {
//             nums[nums.length] = screen.textContent;
//             lastOp = buttonContent;
//             screen.textContent = '';

//         }
//     })
// })




