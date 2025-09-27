const form = document.getElementById('meuFormulario');
const inputNome = document.getElementById('nome');
const inputDate = document.getElementById('data_de_nascimento');
const inputCpf = document.getElementById('cpf');
const divMensagem = document.getElementById('mensagem');
const divMensagem1 = document.getElementById('mensagem1');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const nomeDigitado = inputNome.value;

    const dataDigitada = inputDate.value;

    const cpfDigitado = inputCpf.value;

    const mensagemFinal = `Olá, ${nomeDigitado}! Você nasceu dia ${dataDigitada}!`;
    const mensagemFinal1 = `Seu cpf..`

    divMensagem.textContent = mensagemFinal;

    divMensagem.style.display = 'block';

    inputNome.value = '';
});