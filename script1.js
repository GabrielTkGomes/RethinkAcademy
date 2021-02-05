const numeros = [3, 5, 7, 9, 10, 15, 20];
        var soma = 0;
        var maior = 0;
        var numerosM
        var numerosL = numeros.length;

        // Exibindo a array completa
        document.getElementById("arrayCompleta").innerHTML = "<ul>"; 
        numeros.forEach(imprimir);  
        function imprimir(numero) {            
          document.getElementById("arrayCompleta").innerHTML += "<li>" + numero + "</li>";
        }
        document.getElementById("arrayCompleta").innerHTML += "</ul>"; 

        // Somando elementos da Array
        numeros.forEach(somar);
            function somar(numero) {
                soma +=numero;
                document.getElementById("arraySoma").innerHTML = soma ; 
            }

        // Gerando a media da Array
        document.getElementById("arrayMedia").innerHTML = soma/numerosL;

        // Maior numero da Array
        const filtrar = numeros.filter(function (valor){
            
            if (maior < valor) {
                maior = valor
            }
            return maior;
        })
        document.getElementById("arrayMaior").innerHTML = maior;

                    