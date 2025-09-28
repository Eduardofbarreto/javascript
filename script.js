document.getElementById("meuFormulario").addEventListener("submit", function(event){
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('options').value;
    const resultadoDiv = document.getElementById('resultado');
    const mensagemFinal = document.getElementById('mensagem');

    let resultado;

    if(isNaN(num1) || isNaN(num2)){
        resultadoDiv.textContent = "Por favor, insira dois números válidos! Caso contrário, nada funcionará!";
        return;
    }

    switch(operacao){
        case 'soma':
            `A soma de ${num1} + ${num2}`;
            resultado = num1 + num2;
            break;
        case 'subt':
            resultado = num1 - num2;
            break;
        case 'mult':
            resultado = num1 * num2;
            break;
        case 'div':
            if(num2 > 0){
                resultado = num1 / num2;
            }else{
                resultado = 'Você não pode dividir por 0!';
            }
            break;
        default:
            resultadoDiv.textContent = 'Selecione uma operação.';
            return;
    }

    resultadoDiv.textContent = `Resultado: ${resultado} `;
    mensagemFinal.textContent = `${num1} e ${num2}`;
});