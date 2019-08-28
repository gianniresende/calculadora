const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite o primeiro número: ', (number1) => {  
  rl.question('Qual operação deseja fazer?: ', (op) => {
    rl.question('Digite o segundo número: ', (number2) => {
      let secund_number = number2;
      let first_number = number1;
      switch(op){
        case '/':        
          if  (parseFloat(number1) > 5 && parseFloat(number2) < 20){          
            let result = parseFloat(first_number) / parseFloat(secund_number);
            console.log(result);
          }
          else{
            console.log('Digite um número entre 5 e 20');
          }      
          rl.close();
          return;
        case '*': 
          if  (parseFloat(number1) > 5 && parseFloat(number2) < 20){          
            let result = parseFloat(first_number) * parseFloat(secund_number);
            console.log(result);
          }
          else{
            console.log('Digite um número entre 5 e 20');
          }      
          rl.close();
          return;
        case '+': 
          if  (parseFloat(number1) > 5 && parseFloat(number2) < 20){          
            let result = parseFloat(first_number) + parseFloat(secund_number);
            console.log(result);
          }
          else{
            console.log('Digite um número entre 5 e 20');
          }      
          rl.close();
          return;   
        case '-':
          if (parseFloat(number1) > 5 && parseFloat(number2) < 20){          
            let result = parseFloat(first_number) - parseFloat(secund_number);
            console.log(result);
          }
          else{
            console.log('Digite um número entre 5 e 20');
          }      
          rl.close();
          return; 
        case '%':
          if (parseFloat(number1) > 0 && parseFloat(number2) < 500){          
            let result = parseFloat(first_number) * parseFloat(secund_number) / 100;
            console.log(result);
          }
          else{
            console.log('Digite um número entre 5 e 20');
          }      
          rl.close();
          return;
        default :
          {
            console.log('Preencha os dados corretamente!');
            rl.close();
            return;
          }             
      }
    });
  });
});