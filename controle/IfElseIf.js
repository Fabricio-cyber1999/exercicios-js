Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim    
    }

    const imprimirRessultado = function (nota) {
        if ( nota.entre(9, 10)) {
            console.log('Quadro de Honra')
        } else if(nota.entre(7, 8.99)) {
            console.log('Aprovado')
        } else if (nota.entre(4, 6.99)) {
            console.log('Recuperação')
        } else if (nota.entre(0, 3,99)) {      
        } else {
            console.log('Nota invalida')
        }

        
        console.log('fim')
    } 


    imprimirRessultado(10)
    imprimirRessultado(8.9)
    imprimirRessultado(6.55)
    imprimirRessultado(2.3)
    imprimirRessultado(-1)
    imprimirRessultado(11)
