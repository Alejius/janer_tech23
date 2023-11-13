
//board
var blockSize = 25;
var rows = 25;
var cols = 46;
var board;
var context; 

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//food
var foodX;
var foodY;

var gameOver = false;
//SCORE

var score= 0;

//delay

var delayInMilliseconds = 2000; 

// Restricción de zoom al 80%
function toggleZoomScreen() {
    document.body.style.zoom = "80%";
}

// Desactivar desplazamiento de la página
function noScroll() {
    window.scrollTo(0, 0);
}

// Manejar eventos de desplazamiento
window.addEventListener('scroll', noScroll);

// Manejar evento de carga de la ventana
window.onload = function() {
    toggleZoomScreen();

    var puntaje = document.getElementById('puntaje');
    var mensaje = document.getElementById('mensaje');
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //used for drawing on the board
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000 / 10); //100 milliseconds
}



function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
        score += 100;
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];        
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    puntaje.textContent= "Puntaje: "+ score;

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
        
    }


    //game over conditions
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        // SE AGREGA LA VARIABLE SCORE A EL GAMEOVER + EL TEXTO
      //alert("Game Over" +" tu puntaje es de "+score+" puntos");
      board.style.display="none";
      mensaje.style.color="red";
      mensaje.style.fontSize = "2cm";
      mensaje.style.padding = "200px";
      mensaje.innerHTML= "Game Over" +" tu puntaje es de "+score+" puntos";
      console.log(score)
      
      setTimeout(function() {

        // Redirigir a otro archivo HTML (cambia 'otro_archivo.html' por la ruta correcta)
        window.location.href = '../formulario/formulario.html';

        // Exportar la variable score al localStorage para usarla en otro archivo HTML
        localStorage.setItem('score', score);

        localStorage.setItem('ID', ID);

    }, delayInMilliseconds);

        
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            // SE AGREGA LA VARIABLE SCORE A EL GAMEOVER + EL TEXTO
            mensaje.innerHTML= "Tu puntaje fue de "+score+" puntos";

            mensaje.innerHTML= "Tu puntaje fue de "+score+" puntos";
            
        }
        
    }

   
    
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}



function placeFood() {
    //(0-1) * cols -> (0-19.9999) -> (0-19) * 25
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}


