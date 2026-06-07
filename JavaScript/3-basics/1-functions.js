function saymyname()
{
    console.log("A")
    console.log("K")
    console.log("S")
    console.log("H")

}
saymyname()


function adding(num1,num2)
{
    return num1+num2
}
console.log(adding(15,20))


let loginuser = function(username)
{
    if(username==undefined)
    {
        console.log("user not exist")
        return ;
    }
    return (`${username} just logged in`)
}
loginuser("AKSH GUPTA")

function calculatecartprice(...prices)
{
    return prices //it will return the array of all prices , later on by applying loop on it we can calculate the total price of the cart
}
console.log(calculatecartprice(100,200,300,400))


// object as parameter in the functions
function handleobject(obj1)
{
    console.log(`the user ${obj1.username} has just login by email ${obj1.email}`)

}
let obj ={
    username:"AKSH",
    password:"GUPTA@123",
    email :"240108006@hbtu.ac.in"
}
handleobject(obj)


//array as parameter in function 
let secondNumber = function(arr1){
    return arr1[1]
}
let arrayy = [10,20,30,40,50]
console.log(secondNumber(arrayy))