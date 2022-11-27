/*Função decimal/binário*/ 
function decBin() {
    var dec = document.getElementById("dec1").value;
    var binario = document.getElementById("bin");
    
    var res='';
    var resto=dec;
    var quociente=dec;
    var i;

    do{
        resto = quociente % 2
        quociente = Math.floor(quociente/2);
        res += resto;
    }
    while(quociente >= 1);

    res = res.split('').reverse().join('');

    binario.value = res;
}
/*Função binário/decimal*/
function binDec() {
    var binario = document.getElementById("bin").value;
    var dec = document.getElementById("dec1");
    var erro1 = document.getElementById("erro1")
    var i = 1;

    if(binario.search(/[2-9]/) != -1)
        erro1.innerHTML = "Use apenas 0 e 1"
    else
        erro1.innerHTML = ''
    
    var tamanho = binario.length;
    var res = 0;

    for(i = 1; i <= tamanho; i++) {
        var algarismo = binario[tamanho-i];
        res += algarismo*(2**(i-1));
    }
    dec.value = res;
}
/*Função decimal/octal*/
function decOct() {
    var dec = document.getElementById("dec2").value;
    var octal = document.getElementById("oct");

    var res='';
    var resto=dec;
    var quociente=dec;
    var i;

    do{
        resto = quociente % 8;
        quociente = Math.floor(quociente/8);
        res += resto;
    }
    while(quociente >= 8);
    
    res += quociente;
    res = res.split('').reverse().join('');

    octal.value = res;
}
/*Função octal/decimal*/
function octDec() {
    var octal = document.getElementById("oct").value;
    let dec = document.getElementById("dec2");
    var erro2 = document.getElementById("erro2")
    var i = 1;

    if(octal.search(/[8-9]/) != -1)
        erro2.innerHTML = "Use apenas números de 0 a 7"
    else
        erro2.innerHTML = ''
    
    var tamanho = octal.length;
    var res = 0;

    for(i = 1; i <= tamanho; i++) {
        var algarismo = octal[tamanho-i];
        res += algarismo*(8**(i-1));
    }
    dec.value = res;
}
/*Função decimal/hexadecimal*/
function decHex() {
    let dec = document.getElementById("dec3").value;
    let hex = document.getElementById("hex");

    dec = parseInt(dec).toString(16)

    hex.value = "" + dec.toUpperCase()
}
/*Função hexadecimal/decimal*/
function hexDec() {
    let hex = document.getElementById("hex").value;
    let dec = document.getElementById("dec3");

    hex = parseInt(hex, 16)

    dec.value = "" + hex
}

