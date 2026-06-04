// use of new keyword 
let a= new Number(100)
let b= Number(100)
console.log(a)
console.log(b)
console.log(String(a))
console.log(String(a).length)

//NUMBERS 
let a1= 100.5536
let b1=500251.5
console.log(a1.toFixed(3))   // point ke baad total digits
console.log(b1.toFixed(2))    
console.log(a1.toPrecision(5)) // total digits in whole number
console.log(b1.toPrecision(6))
console.log(a1.toLocaleString("en-IN")) // commas 
console.log(b1.toLocaleString("en-IN"))


console.log("")
//MATHS 
console.log(Math.sqrt(25))
console.log(Math.pow(5,2))
console.log(Math.floor(25.5))
console.log(Math.ceil(25.5))
console.log(Math.abs(-26))
console.log(Math.random())
console.log("")


// to print any random value from min to max given values , formula is ((Math.random)*(max-min+1))+min
console.log(((Math.random())*(10))+1) // random value from 1 to 10
console.log(((Math.random())*(11))+10) // random value from 10 to 20

console.log("")
// to print the random integer
console.log (Math.floor(((Math.random()*10)+1))) // random value from 1 to 10
console.log (Math.floor(((Math.random()*11)+10))) // random value from 10 to 20