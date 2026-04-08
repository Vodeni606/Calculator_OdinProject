const display = document.getElementById('display');
const buttonContainer = document.getElementById('buttonContainer');

for(let i = 1; i <= 10; i++){

    const button = document.createElement('button');
    button.className = 'calc-button';
    buttonContainer.appendChild(button);
    button.textContent = i; 
    
}       


const operationContainer = document.getElementById('operationContainer')
const operations = ['+','-','/','*']; 

for(let i = 0; i< operations.length;i++){
    const button = document.createElement('button');
    button.textContent = operations[i];
    button.className = 'operation-button'
    operationContainer.appendChild(button);
    
}

