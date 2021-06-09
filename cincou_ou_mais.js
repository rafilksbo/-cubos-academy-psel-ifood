function solucao(precos){
    let parcial = 0;
    let menorValor = precos[0]
                            
    for(i=0; i <precos.length; i++){
        parcial += precos[i];
        
     if (precos[i] < menorValor){
        menorValor = precos[i];
     }
}
    if (precos.length >= 5){
        parcial = parcial - menorValor;
    }
    console.log (parcial)
    }      