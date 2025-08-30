let numero;

numero = 4;

switch(numero){
    case 1:
        document.getElementById("demo").innerHTML = "Domingo";
    break;
    case 2:
        document.getElementById("demo").innerHTML = "Segunda-feira";
    break;
    case 3:
        document.getElementById("demo").innerHTML = "Terça-feira";
    break;
    default:
        document.getElementById("demo").innerHTML = "Nenhum valor válido!";
}