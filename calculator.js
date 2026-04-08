const display = document.getElementById('display');
const buttonContainer = document.getElementById('buttonContainer');
const operationContainer = document.getElementById('operationContainer')
const operations = ['+','-','/','*']; 

let currentInput = '';
let previousInput = '';
let currentOperator = '';
let previousOperator = '';

for(let i = 0; i <= 9; i++){

    const button = document.createElement('button');
    button.className = 'calc-button';
    button.textContent = i; 

    button.addEventListener('click',function(){
        currentInput += this.textContent;
        display.value = currentInput;
        

    });
    buttonContainer.appendChild(button);
}       

for(let i = 0; i < operations.length;i++){
    const button = document.createElement('button');
    button.textContent = operations[i];
    button.className = 'operation-button'

    button.addEventListener('click',function(){     
        currentOperator = this.textContent;
        previousInput = currentInput;
        currentInput = '';
        display.value = currentOperator;
    
    })
    operationContainer.appendChild(button);
}

const clearButton = document.createElement('button');
clearButton.textContent =  'C';
clearButton.className = 'operation-button';
clearButton.addEventListener('click',function(){
    display.value = '';
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    previousOperator = '';
})
operationContainer.appendChild(clearButton);

const equalButton = document.createElement('button');
equalButton.textContent = '=';
equalButton.className = 'operation-button';
operationContainer.appendChild(equalButton);
equalButton.addEventListener('click',function(){
    if (currentOperator === '+'){
    sum = parseInt(previousInput) + parseInt(currentInput);
    display.value = sum;
    previousInput = sum;
    currentInput = '';
    }else if (currentOperator === '-'){
    sum = parseInt(previousInput) - parseInt(currentInput);
    display.value = sum;
    previousInput = '';
    currentInput = '';
    }else if (currentOperator === '*'){
    sum = parseInt(previousInput) * parseInt(currentInput);
    display.value = sum;
    previousInput = '';
    currentInput = '';
    }else if (currentOperator === '/'){
    sum = parseInt(previousInput) / parseInt(currentInput);
    display.value = sum;
    previousInput = '';
    currentInput = '';
    }
        
})