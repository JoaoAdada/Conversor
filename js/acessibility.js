var todasTags = document.querySelectorAll('*');
var contrasteBotao = document.querySelector('button#contraste')
var contrasteBranco = true

function mudarContraste() {

    if (contrasteBranco == true) {

        todasTags.forEach(function(elemento){
            elemento.style.backgroundColor = 'black'
            elemento.style.color = 'white'
        })
    } else {
        
        todasTags.forEach(function(elemento){
            elemento.style.backgroundColor = 'white'
            elemento.style.color = 'black'
        })
    }

    contrasteBranco = !contrasteBranco
}

contrasteBotao.addEventListener('click', mudarContraste)

window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;
  
    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
  
    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
  }