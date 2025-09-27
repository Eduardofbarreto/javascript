const form = document.getElementById('meuFormulario');
const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');
const inputResultado = document.getElementById('options');

const divMensagem = document.getElementById('resultado');


form.addEventListener('submit', function(event){
    event.preventDefault();


    const optionsDigitada = inputOptions.value;
    const num1Digitado = inputNum1.value;
    const num2Digitado = inputNum2.value;
    const soma = parseInt(num1Digitado) + parseInt(num2Digitado);
    const subt = parseInt(num1Digitado) - parseInt(num2Digitado);

    if(optionsDigitada == 'soma'){
        const resultado = `${num1Digitado} + ${num2Digitado} = ${soma}`;
    }else{
        const resultado = `${num1Digitado} - ${num2Digitado} = ${subt}`;
    }
    
    

    divMensagem.textContent = resultado;

    divMensagem.style.display = 'block';

    inputNome.value = '';
});