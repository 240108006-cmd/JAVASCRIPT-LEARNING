//PRIMITIVE DATATYPES 
let a = 100
let b= 100.23
console.log(typeof(a))
console.log(typeof(b))

let c=12031830n
console.log(typeof(c))


let d=null
let e;
console.log(typeof(d))
console.log(typeof(e))


let f=true 
console.log(typeof(f))

let g= "AKSH GUPTA"
let h= "23"
console.log(typeof(g))
console.log(typeof(h))



let symbol1= Symbol("1234")
let symbol2= Symbol("1234")
console.log(symbol1===symbol2)
console.log(typeof(symbol1))




//Non Primitive Data types 
let obj ={
    name: "aksh" ,
    rollno : 240108006
}
console.log(typeof(obj))


let arr=["AKSH",240108006,"KANPUR","2nd IT"]
console.log(typeof(arr))


let func= function(){
    let p= 12
    let q= 15
    console.log(p*q)
}
console.log(typeof(func))

// stack and heap memory 
// stack memory is used in primitive data types (pass by value )
let x = "AKSH"
let y=x
y="HITESH"
console.log(x)
console.log(y)


console.log("")
// heap memory is used in non primitive data types (pass by reference )
let obj1={
    name:"AKSH",
    age:18
}
let obj2= obj1
obj2.name="HITESH"
console.log(obj1.name)
console.log(obj2.name)
