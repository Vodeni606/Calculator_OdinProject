const display = document.getElementById('display');
const buttonContainer = document.getElementById('buttonContainer');
const operationContainer = document.getElementById('operationContainer')
const operations = ['+','-','/','*']; 

for(let i = 0; i <= 9; i++){

    const button = document.createElement('button');
    button.className = 'calc-button';
    button.textContent = i; 

    button.addEventListener('click',function(){
        display.value += this.textContent;
    });
    buttonContainer.appendChild(button);
}       

for(let i = 0; i < operations.length;i++){
    const button = document.createElement('button');
    button.textContent = operations[i];
    button.className = 'operation-button'

    button.addEventListener('click',function(){
        display.value += this.textContent;
    })
    operationContainer.appendChild(button);
}

const clearButton = document.createElement('button');
clearButton.textContent =  'C';
clearButton.className = 'operation-button';
clearButton.addEventListener('click',function(){
    display.value = '';
})
operationContainer.appendChild(clearButton);


