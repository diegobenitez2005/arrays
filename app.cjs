//Arrays
//procesarPedido
 function procesarPedido(pedido){
    let x = "bebida";
    let client = pedido.shift();
    console.log(client);
    pedido.unshift(x);
    pedido.push(client);
    console.log(pedido);
 }

function sumarPares(arrayN){
    let suma=0;
    for(let i=0; i<arrayN.length; i++ ){
        if(arrayN[i]%2 === 0){
            suma=suma+arrayN[i];
            
        }
    }
    return console.log(suma);
}
    
function palabrasTerminanConA(palabra) {
     let cierto = palabra.every(palabra => palabra.toLowerCase().endsWith('a'));
     console.log(cierto)
     return cierto;
}

function buscaPalabras(words,word){
    let cont = words.indexOf(word);
    let nuevoArray;
    nuevoArray = words.filter((_palabra,index) => index > cont);
    return console.log(nuevoArray); 
    
}


function findJavaScript(matriz){
    let indice;
  for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        if (matriz[i][j] === "JavaScript"){
            indice = [i,j];
            console.log(indice);
            return indice;
            

            
        }
        
    }
  }
  return [-1,-1];


} 

function findMinMaxPages(pages){
    let min= pages[0];
    let max= pages[0];

    for (let i=0; i<pages.length; i++){
        if(pages[i]<min){
            min = i;
        }
        if(pages[i]>max){
            max= i;
        }
    }
    console.log([max, min]);
    return [min,max];
}















































































module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
    
}
