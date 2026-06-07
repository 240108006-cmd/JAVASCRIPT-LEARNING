let mySym = Symbol("id1")
let obj1 ={
    name: "Aksh",
    "full name": "Aksh Gupta",
    [mySym]: "mykey1",
    age: 18,
    location: "Ujhani",
    email: "240108006@hbtu.ac.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    helloo : function(){
        return "helloo"
    },
    welcome(){
        console.log(this.name)
        return "welcome"
    }
}
console.log(obj1.name)
console.log(obj1.age)
console.log(obj1["full name"]) //we use [] in keys like symbols and strings in inverted commas , otherwise we use . operator to print usually 
console.log(obj1[mySym])       //we use [] in keys like symbols and strings in inverted commas , otherwise we use . operator to print usually
console.log(obj1.lastLoginDays)

obj1.location= "kanpur" // we can update the given keys properties  
obj1.cgpa= 8.75         // can also add new ones 
obj1.greet=function(){  // can also add new ones
    return "hello"
}
console.log(obj1.location)
console.log(obj1.cgpa)
console.log(obj1.greet())
console.log(obj1.helloo())
console.log(obj1.welcome())

