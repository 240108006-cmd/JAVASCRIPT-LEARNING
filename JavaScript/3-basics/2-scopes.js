let a = 300
if (true) {
    let a = 10 // these a and b are only accessible inside the scope of function 
    const b = 20
    console.log("INNER: ", a); // will print 10
    
}
console.log(a); // will print 300
console.log(b); // error
console.log(c); //error



function one(){
    const username = "hitesh" // global variable for function two

    function two(){
        const website = "youtube"
        console.log(username); // will print hitesh
    }
    console.log(website); // error

    two()

}
one()



if (true) {
    const username = "hitesh" // global variable for if 
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); // hiteshyoutube
    }
    console.log(website); // error as website is defined in local scope 
}

console.log(username); // error as username is defined in local scope


// function  calling 


// function by let keyword
greet()                            // wrong
let greet = function()
{
    console.log("greet")
}

let greet1 = function()
{
    console.log("greet1")
}
greet1()                           // right

// by function keyword                 (in function keyword we can either give function calling either before or after declaring the function)
hello1()                            // right
function hello1()
{
    console.log("hello1")
}


function hello()
{
    console.log("hello")
}
hello()                             // right


// arrow function
bye()                               // wrong 
let bye=() => {
    console.log("bye")
}

let bye1=() => {
    console.log("bye1")
}
bye1()                               //right