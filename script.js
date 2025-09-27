const form = document.getElementById('meuFormulario');
const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');

const divMensagem = document.getElementById('resultado');


form.addEventListener('submit', function(event){
    event.preventDefault();

    const num1Digitado = inputNum1.value;
    const num2Digitado = inputNum2.value;
    const soma = parseInt(num1Digitado) + parseInt(num2Digitado);

    const resultado = `${num1Digitado} + ${num2Digitado} = ${soma}`;

    divMensagem.textContent = resultado;

    divMensagem.style.display = 'block';

    inputNome.value = '';
});