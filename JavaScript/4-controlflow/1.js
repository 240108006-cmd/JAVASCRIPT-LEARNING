let score = 97
if(score>40){
    console.log(`STUDENT IS PASSED BY SCORING ${score}`)
    if(score>90){
        console.log("secured 10 pointer!!")
    }
}
else{
    console.log("FILL CARRYOVER EXAM !!!")
}

// ANOTHER SYNTAX TO IMPLEMENT IF STATEMENT 
if(10>5) console.log("CONDITION IS TRUE ")

// if else if else 
let balance = 655.89
if (balance> 800){
    console.log("ENOUGH BALANCE!!")
}
else if(balance> 500 && balance <800){
    console.log("DEPOSIT SOME MONEY!!")
}
else if(balance< 500 && balance> 100){
    console.log("INSUFFICIENT BALANCE!!")
}
else{
    console.log("nullllllllll")
}

let userloggedin= true 
let debitcard = true
let upi = false 
if (userloggedin && (debitcard||upi)){
    console.log("ALLOW TO BUY COURSE!!")
}