// ALL INITIALIZATION
let userinput = (document.querySelector(".guessslot"))//
let randomnumber = parseInt((Math.random()*(100))+1) //
let submitbutton = document.querySelector(".submitbutton")
let guesses = document.querySelector(".prevguess")//
let remguesses = document.querySelector(".remguess")//
let resultouter = document.querySelector(".resultouter")//
let resultmsg = document.querySelector(".resultmsg")
let p = document.createElement("p");

let doneguesses = 1//
let playgame = true //
let prevguesses =[]  //

if(playgame){
    submitbutton.addEventListener("click",function(e){
        e.preventDefault()
        validatenumber_push(parseInt(userinput.value))
    })
}
function validatenumber_push(numbertovalidate){
    if(isNaN(numbertovalidate)){
        alert("please enter a valid number")
    }
    else if(numbertovalidate==""){
        alert("please enter a valid number")
    }
    else if((numbertovalidate<1) ||(numbertovalidate>100)){
        alert("please enter a valid number")
    }
    else{
        prevguesses.push(numbertovalidate)
        if(doneguesses == 11){
            updater(numbertovalidate)
            displaymessage(`Game is over!! well try . The correct answer is ${randomnumber}`)
            endgame()
        }
        else{
            updater(numbertovalidate)
            checknumber(numbertovalidate)
        }
    }

}
function checknumber(numbertocheck){
    if(numbertocheck==randomnumber){
        displaymessage(`YOU GUESSED IT RIGHT`)
        endgame()
    }
    else if (numbertocheck < randomnumber){
        displaymessage("TRY TO ENTER SOME BIGGER")
    }
    else if (numbertocheck > randomnumber){
        displaymessage("TRY TO ENTER SOME LESSER")
    }
}

function updater(number){
    userinput .value= ""
    doneguesses++
    remguesses.innerHTML=`${11-doneguesses}`
    guesses.innerHTML = guesses.innerHTML + `${number},`
}
function displaymessage(msg){
    resultmsg.innerHTML= msg
}
function endgame(){
    userinput.value=""
    userinput.setAttribute('disabled', '');
     // user input khalikrfa 
    // game khtm krne ke liye pehle button banaya 
    // firt playgame =false kra

    p.setAttribute("class", "button");
    let h2 = document.createElement("h2")
    h2.setAttribute("id", "newGame");
    let text = document.createTextNode("Start new Game");
    h2.appendChild(text);

    p.innerHTML=""// it would avoid formaation of multiple new start game 
    p.appendChild(h2);
    resultouter.appendChild(p)

    playgame=false
    newgame()
}
function newgame(){
    //new game start krna hai toh button banaya usse click kro
    let newgamebutton = document.querySelector("#newGame")
    newgamebutton.addEventListener("click",function (e){
        userinput.removeAttribute('disabled');
        randomnumber = parseInt((Math.random()*(100))+1)
        guesses.innerHTML= ""
        remguesses.innerHTML= 10
        resultouter.removeChild(p)
        doneguesses = 1
        playgame = true
        prevguesses =[]  
    })
}