document.getElementById('meuFormulario').addEventListener('submit', 
    function(event){
        event.preventDefault();

        const nomeElemento = document.getElementById('nome');
        const idadeElemento = document.getElementById('idade');

        const nomeDigitado = nomeElemento.value;
        const idadeDigitada = idadeElemento.value;

        const mensagemhtml = document.getElementById('mensagem');


        mensagemhtml.textContent = `Olá ${nomeDigitado}! Você tem ${idadeDigitada} anos!`;
    }
);