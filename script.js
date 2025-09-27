document.getElementById("meuFormulario").addEventListener("submit", function(event){
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('options').value;
    const resultadoDiv = document.getElementById('resultado');

    let resultado;

    if(isNaN(num1) || isNaN(num2)){
        resultadoDiv.textContent = "Por favor, insira dois números válidos! Caso contrário, nada funcionará!";
        return;
    }

    switch(operacao){
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subt':
            resultado = num1 - num2;
            break;
        default:
            resultadoDiv.textContent = 'Selecione uma operação.';
            return;
    }

    resultadoDiv.textContent = `Resultado: ${resultado}`;
});