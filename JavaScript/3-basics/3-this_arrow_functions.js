// USING THIS KEYWORD 

let obj1={
    username:"Aksh Gupta",
    password:"gupta@123",
    location:"Ujhani",
    greet:function()
    {
        return(`The User With Username ${this.username} Has Just Logged In At Location Nearer ${this.location}`)
    }
}
console.log(obj1.greet())
obj1.username="Hitesh Verma"
obj1.location="Saharanpur"
console.log(obj1.greet())

// Arrow Function (METHOD 1)
let adding = (num1,num2) =>{
    return num1+num2
}
console.log(adding(10,20))

// Arrow Function (METHOD 2)(remove curly parantheses and return keyword , then apply parantheses)(THIS ONLY HAPPENS WHEN WE TRY TO RETURN, NOT CONSOLE.LOG )
let subtract = (num1,num2) => (num1-num2)
subtract(10,20)

//returning object through arrow function(METHOD1)
let objecthandling = (obj)=>{
    obj.username= "ABHI VYAS"
    return(obj)
}
let obj={
    username:"ALOK GUJAR",
    location:"Lucknow"
}
console.log(objecthandling(obj))


//returning object through arrow function(METHOD2)
let objecthandling1 = (obj5)=>(obj5)
let obj5={
    username:"ALOK GUJAR",
    location:"Lucknow"
}
console.log(objecthandling1(obj5))

