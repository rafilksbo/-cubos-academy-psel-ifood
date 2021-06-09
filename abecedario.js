function solucao(letra, palavras) {
    let PERDERAM = 0
    for (let item of palavras){
        if (letra !== item[0]){
            PERDERAM++
            
        }
    } console.log(PERDERAM)
              
}