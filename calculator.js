const display = document.getElementById('display');
const buttonContainer = document.getElementById('buttonContainer');

for(let i = 0; i <= 9; i++){

    const button = document.createElement('button');
    button.className = 'calc-button';
    button.textContent = i; 
    buttonContainer.addEventListener('click',function(){
        display.value += i;
    });
    buttonContainer.appendChild(button);
}       


const operationContainer = document.getElementById('operationContainer')
const operations = ['+','-','/','*']; 

for(let i = 0; i < operations.length;i++){
    const button = document.createElement('button');
    button.textContent = operations[i];
    button.className = 'operation-button'


    button.addEventListener('click',function(){
        display.value += operations[i];
    })
    operationContainer.appendChild(button);
}




