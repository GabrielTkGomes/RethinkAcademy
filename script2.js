// Exercicio 2
const nomes = ['Gabriel', 'Bruna', 'Francisco', 'Alice', 'José', 'Camila'];

var maior = 0;
var atual = nomes[0].length;


nomes.forEach(nome => {
    if (nome.length > maior) {
        maior = nome.length;
        document.getElementById("NomeEscolhido").innerHTML = nome; 
    }
});

// Exercicio 3

const num = 5;
var final = 0;

for (let index = 1; index <= num; index++) {
    final = index+final;
    document.getElementById("somatorio").innerHTML = final; 
}

// Exercicio 4
const x = 20;
const y = 20;

document.getElementById("x").innerHTML = x; 
document.getElementById("y").innerHTML = y; 

function iguais() {
    if (x == y) {
        document.getElementById("bollean").innerHTML = true; 
    } else{
        document.getElementById("bollean").innerHTML = false; 
    }

}

// Exercicio 5
const prova1 = 20;
const prova2 = 10;

document.getElementById("prova1").innerHTML = prova1; 
document.getElementById("prova2").innerHTML = prova2; 

function aprovacao() {
    var resultado = prova1 + prova2;
    if (resultado >= 60) {
        document.getElementById("resultado").innerHTML = "Aprovado"; 
    } 
    else if (resultado < 40) {
        document.getElementById("resultado").innerHTML = "Reprovado"; 
    } 
    else {
        document.getElementById("resultado").innerHTML = "Exame Especial"; 
    }

}
 
// Exercicio 6

var test1 = 10;

var divi = test1%2;

document.getElementById("test1").innerHTML = test1; 


function parouimpar() {
    if ( divi == 1) {
        document.getElementById("parouimpar").innerHTML = "impar"; 
    } else{
        document.getElementById("parouimpar").innerHTML = "par";
    }
    
}

const multi = [2, 3, 9, 1];
var multi2 = 1;

multi.forEach(element => {
    multi2 = element * multi2;
    document.getElementById("multi").innerHTML = multi2; 
});