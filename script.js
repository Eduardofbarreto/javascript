const tagsParaAlterar = document.getElementsByClassName('texto');

for(let i = 0; i < tagsParaAlterar.length; i++){
    tagsParaAlterar[i].innerHTML = 'Conteúdo alterado pelo JS!';
}