// var canvas, context;

// canvas = document.getElementById("myCanvas");
// context = canvas.getContext("2d");


// context.moveTo(50, 0);
// context.lineTo(50, 400);
// context.stroke();
// context.rect(0, 0, 50, 400);
// context.fillStyle = "red";
// context.fill();
// context.beginPath();
// context.moveTo(550, 0);
// context.lineTo(550, 400);
// context.stroke();
// context.beginPath();
// context.moveTo(0, 20);
// context.lineTo(600, 20);
// context.stroke();
// context.beginPath();
// context.arc(300, 200, 50, 0, 2 * Math.PI);
// context.fillStyle = "red";
// context.fill();
// context.stroke();
// context.beginPath();
// context.font = "42px Arial";
// context.fillStyle = "blue";
// context.fillText("Yipmong", 350, 60);
// context.lineWidth = 2;
// context.steokeStyle = "gray";
// context.strokeText("Yipmong", 350, 60);
window.onload = function() {
    var canvas, context;
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    var x, y, timePassed;
    x = innerWidth / 2;
    y = innerHeight / 2;
    const name = prompt("Enter Player Name: ");
    const playerName = name.charAt(0).toUpperCase() + name.slice(1);
    var foodX = Math.random() * (600 - 50);
    var foodY = Math.random() * (400 - 50);
    var t;
    t = Date.now();
    let speed = 300;
    let dir = 0;
    let score = 0;
    let tail = 0;
    let snakeArr = [];

    class Tail {
        constructor(v, w) {
            this.v = v
            this.w = w
        }
    }

    function player() {
        context.beginPath();
        context.font = "24px arial";
        context.fillStyle = "blue";
        context.fillText("Player: " + playerName, 400, 30);



    }


    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    let reset = document.getElementById("reset")


    up.onmousedown = function() { dir = 1 };
    down.onmousedown = function() { dir = 2 };
    left.onmousedown = function() { dir = 3 };
    right.onmousedown = function() { dir = 4 };


    up.onmouseup = function() { dir = 0 };
    down.onmouseup = function() { dir = 0 };
    left.onmouseup = function() { dir = 0 };
    right.onmouseup = function() { dir = 0 };

    up.ontouchstart = function() { dir = 1 };
    down.ontouchstart = function() { dir = 2 };
    left.ontouchstart = function() { dir = 3 };
    right.ontouchstart = function() { dir = 4 };

    up.ontouchend = function() { dir = 0 };
    down.ontouchend = function() { dir = 0 };
    left.ontouchend = function() { dir = 0 };
    right.ontouchend = function() { dir = 0 };


    reset.addEventListener("click", function() {
        score = 0;
        if (score == 0) {
            alert("You have reset the game")
        };
    })

    function
    draw() {

        timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        var fps = Math.round(1 / timePassed)
        context.clearRect(0, 0, 600, 400);
        context.font = "24px Arial";
        context.fillStyle = "blue";
        context.fillText("Points: " + score, 10, 30);
        // context.clearRect(0, 0, 600, 400);
        context.beginPath();
        context.rect(x, y, 30, 30);
        context.fillStyle = "red";
        context.fill();

        context.beginPath();
        context.rect(foodX, foodY, 30, 30);
        context.fillStyle = "blue";
        context.fill();

        //context.clearRect(0, 0, 600, 400);
        context.beginPath();
        context.fillStyle = "pink";
        var j;
        for (j = 0; j < snakeArr.length; j++) {
            let snakePart = snakeArr[j]
            context.fillRect(snakeArr.x, snakeArr.y, 30, 30);
            context.fill();
        }
        snakeArr.push(new Tail(x, y));
        if (snakeArr.length > tail) {
            snakeArr.shift();
        }


        if (dir == 4) {
            if (x + 30 <= 600) {
                x += (speed * timePassed)
            }
        } else
        if (dir == 3) {
            if (x > 0) {
                x -= (speed * timePassed)
            }
        } else if (dir == 2) {
            if (y + 30 < 400) {
                y += (speed * timePassed)
            }
        }
        if (dir == 1) {
            if (y > 50) {
                y -= (speed * timePassed)
            }
        }

        if (foodX <= x + 30 && x <= foodX + 30 && foodY <= y + 50 && y <= foodY + 50) {
            score++;
            foodX = Math.random() * (600 - 50);
            foodY = Math.random() * (400 - 50);
        }
        context.beginPath();
        context.moveTo(0, 50, );
        context.lineTo(600, 50);
        context.strokeStyle = "#c0c0c0";
        context.stroke();
        context.beginPath();
        context.moveTo(350, 0);
        context.lineTo(350, 50);
        context.strokeStyle = "#c0c0c0";
        context.stroke()
        player();


        window.requestAnimationFrame(draw);
    }
    draw()
}