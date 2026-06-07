// funfact is empty object and empty array is considered as true 
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const username = {}

if (username) {
    console.log("Got username");
} else {
    console.log("Invalid Username!!!!!!");
}

// CHECKINTG EMPTY ARRAY!!!
let arr=["superman","batman","ironman","spiderman"]
let arrlength= arr.length
if(arrlength){
    console.log("arr is not empty")
}
else{
    console.log("arr is empty ")
}

let arr1=[]
let arr1length= arr1.length
if(arr1length){
    console.log("arr1 is not empty")
}
else{
    console.log("arr1 is empty ")
}


// CHECKING EMPTY OBJECT
let obj1={}
let keysarr = Object.keys(obj1)
if(keysarr.length===0)
{
    console.log("OBJECT IS EMPTY")
}
else{
    console.log("OBJECT IS NOT EMPTY")
}

let obj2={
    username:"aksh",
    location: "ujhani"
}
let keysarr2 = Object.keys(obj2)
if(keysarr2.length===0)
{
    console.log("OBJECT IS  EMPTY")
}
else{
    console.log("OBJECT IS NOT EMPTY")
}


// Nullish Coalescing Operator (??): null undefined

/*a ?? b

Means:
If a is not null and not undefined, return a.

Otherwise return b*/


let var1
var1= null ?? 10
console.log(var1)

var1= 15 ?? 10
console.log(var1)

var1= null ?? undefined ?? 15
console.log(var1)

var1= 15 ?? undefined
console.log(var1)

var1= null ?? undefined 
console.log(var1)

var1 =undefined ?? null
console.log(var1)

