

function convertir(){
    let valorE = parseInt (document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 136.04; 
    let euro = 144.25; 
    if(document.getElementById("uno").checked){    
        resultado = valorE/dolar;
        alert("El valor de cambio a DOLAR oficial es de: $" + resultado.toFixed(2));
        
    }else if(document.getElementById("dos").checked){
    resultado = valorE/euro;
    alert("El valor de cambio a EURO oficial es de:$" + resultado.toFixed(2));
    }
    else{
        alert("El valor de cambio a EURO oficial es de:$" + 0)
    };
}