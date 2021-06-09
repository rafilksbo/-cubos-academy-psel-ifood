function solucao(produtos) {
    let totalTop = 0
    let totalGeral = 0
    let percentual = 0
	for (let item of produtos){
        let preco = item.preco;
        totalGeral += preco;
        
        if (preco > 10000){
        totalTop += preco
        }
        
    }
        percentual = totalTop/totalGeral;
    
        let objeto ={
            totalTop: totalTop,
            percentual: percentual
        }
        
        console.log(objeto)
    
}