let tempoInvestido;
let diasTrabalhados;
let diasFerias;
let valorTotal;

function calcular() {
    let tempoInvestido = parseInt(document.getElementById("valor1").value);
    let diasTrabalhados = parseInt(document.getElementById("valor2").value);
    let diasFerias = parseInt(document.getElementById("valor3").value);
    let valorTotal = parseInt(document.getElementById("valor4").value);
    return calculo(tempoInvestido, diasTrabalhados, diasFerias, valorTotal)
}
function calculo(a, b, c, d){
    valorHora = (d / (b * 4 * a) ) + ( ( c * b * a ) )
    document.getElementById("resultado").innerHTML= `O valor da sua hora é de: `+ valorHora.toFixed(2);
}
