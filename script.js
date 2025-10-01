function validarFormulario(){
    const nomeCliente = 
    document.getElementById('nome').value.trim();

    const isVegetariano = 
    document.getElementById('vegetariano').value;
    const isDieta =
    document.getElementById('dieta').value;
    const isPagamento =
    document.getElementById('pagamento').value;

    if(nomeCliente === ''){
        alert('O nome do cliente é obrigatório!');
        return false;
    }

    console.log('Nome do cliente:', nomeCliente);
    console.log('É vegetariano: ');
    if(isVegetariano === 'sim'){
        console.log('Sugestão de prato: Macarrão!');
    }else{
        console.log('Carne grelhada.');
    }
}