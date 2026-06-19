let track = document.querySelector(".track");

let totalrows = track.clientHeight / 80
let totalcolumns =track.clientWidth / 80
let score =0
let allblocks = [];


for (let row = 0; row < totalrows; row++) {
    for (let column = 0; column < totalcolumns; column++) {

        let block = document.createElement("div");
        block.setAttribute("class", "block");
        block.innerHTML=`(${row},${column})`
        allblocks[`(${row},${column})`] = block;

        track.appendChild(block);
    }
}
document.querySelector(".startgame").style.display="flex"
document.querySelector(".startgame").addEventListener("click",function(){

        document.querySelector(".startgame").style.display="none"
})
let snake = [
            {
                x: 4,
                y: 3
            },
            {
                x: 5,
                y: 3
            },
            {
                x: 6,
                y: 3
            }
        ];
let food
function fooder(){
    food= allblocks[`(${Math.floor(Math.random()*(totalrows))},${Math.floor(Math.random()*(totalcolumns))})`]
    food.style.backgroundColor="orange"
}
fooder()



function colouring(snake) {
        snake.forEach(function (value) {
            allblocks[`(${value.x},${value.y})`].style.backgroundColor = "green";
        });
    
}

colouring(snake);


function startTimer() {
    
    seconds = 0;
    
    timerInterval = setInterval(function () {
        seconds++;
        document.querySelector(".Time").innerHTML = `Time: ${seconds}s`;
    }, 1000);
}


document.querySelector(".startgame").addEventListener("click",function(){
    startTimer()
    document.addEventListener("keydown", function (e){
        


        if (
    e.key == "ArrowUp" ||
    e.key == "ArrowDown" ||
    e.key == "ArrowLeft" ||
    e.key == "ArrowRight" || e.key == "Enter"
) {
    direction = e.key;
    }
     
    });

})





let intervalid =setInterval(function () {
    
    if (direction == "ArrowUp"|| direction=="Enter") {

        allblocks[`(${snake[2].x},${snake[2].y})`].style.backgroundColor="black"
        snake.unshift({
            x: snake[0].x - 1,
            y: snake[0].y
        });
        snake.pop();
        
        if(allblocks[`(${snake[0].x},${snake[0].y})`] == food){
            score++
            document.querySelector(".Score").innerHTML=`Score: ${score}`
            fooder()
        }
      
    }

    else if (direction == "ArrowDown") {
        allblocks[`(${snake[2].x},${snake[2].y})`].style.backgroundColor="black"
        snake.unshift({
            x: snake[0].x + 1,
            y: snake[0].y
        });
        snake.pop();
        
        if(allblocks[`(${snake[0].x},${snake[0].y})`] == food){
            score++
            document.querySelector(".Score").innerHTML=`Score: ${score}`
            fooder()
           
            
        }
        
    }

    else if (direction == "ArrowLeft") {
        allblocks[`(${snake[2].x},${snake[2].y})`].style.backgroundColor="black"
        snake.unshift({
            x: snake[0].x,
            y: snake[0].y - 1
        });

        snake.pop();
        
        if(allblocks[`(${snake[0].x},${snake[0].y})`] == food){
            score++
            document.querySelector(".Score").innerHTML=`Score: ${score}`
            fooder()
            
        }
        
        
    }

    else if (direction == "ArrowRight") {
        allblocks[`(${snake[2].x},${snake[2].y})`].style.backgroundColor="black"
        snake.unshift({
            x: snake[0].x,
            y: snake[0].y + 1
        });

        snake.pop();
    
        if(allblocks[`(${snake[0].x},${snake[0].y})`] == food){
            score++
            document.querySelector(".Score").innerHTML=`Score: ${score}`
            fooder()
            
            
        }
        
        
    }

    if(snake[2].y<0 || (snake[2].x > totalrows)||(snake[2].x < 0)||(snake[2].y > totalcolumns)){
            
            gameover()
            
            
    }
    colouring(snake);

}, 400);
function gameover(){
    clearInterval(timerInterval)
    alert("Game Over!!")
    document.querySelector(".newgame").style.display ="flex"
    document.querySelector("p").innerHTML= Math.max(score,document.querySelector("p").innerHTML)
    document.querySelector(".newgame").innerHTML= `SCORE IS ${score} <br>PLAY NEW GAME`
    document.querySelector(".Score").innerHTML=`Score: 0`
    document.querySelector(".newgame").addEventListener("click",function(){
        score=0
        snake = [
        {
            x: 4,
            y: 3
        },
        {
            x: 5,
            y: 3
        },
        {
            x: 6,
            y: 3
        }
        
        ];
        document.querySelector(".newgame").style.display ="none"
        direction="ArrowUp"
        
        colouring(snake);
        startTimer()
    })
    document.addEventListener("keydown",function(e){
        if(e.key == "Enter"){
            document.querySelector(".newgame").click()
        }
    })  
}
