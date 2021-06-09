function solucao(largura, altura) {
    if (altura > largura){
        console.log ("RETRATO")
    } else if (largura > altura){
        console.log ("PAISAGEM")
    } else if(altura === largura){
        console.log ("QUADRADA")
    }
  
}
        

function processData(input) {
	const x = input.trim().split(" ");
  	solucao(parseInt(x[0], 10), parseInt(x[1], 10));
} 
