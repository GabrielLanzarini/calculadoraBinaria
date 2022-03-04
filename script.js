function converter() {
    var valorInput = document.getElementById("numero_converter").value;
    
    
    var arrayNumeros =  valorInput.split("").reverse();

    var arrayResultado = []

    for (let i = 0; i < arrayNumeros.length; i++) {
        
        if (arrayNumeros[i] == 1 ){
            let verificacao = arrayNumeros[i] * (2**i);
            arrayResultado.push(verificacao)

        }
    }
    
    const total = arrayResultado.reduce((total,item) => {
        return total + item;
    });

    var texto = document.getElementById("resultado_apresentado");
    texto.textContent = total;

    
    
}