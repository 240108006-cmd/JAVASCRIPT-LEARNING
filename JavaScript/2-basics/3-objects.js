const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// nested objects 
let obj1 ={
    fullname:{
        Firstname: "AKSH",
        Lastname: "Gupta"
    },
    age:18,
    location: "kanpur",
    email: "240108006@hbtu.ac.in"
}
console.log(obj1.fullname.Firstname)
console.log("")

// COMBINING TWO OBJECTS 
let obj2={
    college:"HBTU KANPUR",
    CGPA: 8.78,
    SEMESTER:5
}
console.log({...obj1,...obj2})
console.log("");

// objects as items inside array 
let arr=[{
    name: "aksh",
    age: 18
},
{
    name:"alok",
    age:20
},
{
    name:"hitesh",
    age:19
}]
console.log(arr[0].name)
console.log(arr[1].age)

/* 4 Properties of objects
object.keys(obj name)
object.values(obj name)
object.entries(obj name)
object.freeze(obj name)*/
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

Object.freeze(obj1)
obj1.age=19
obj1.fullname.firstname= "ALOK" // it would get executed as we have obnly freeze the obj1 , so we cannont specifically modify the values wrt to its keys , but here we are modfying inside obj fullname we can do that 
console.log(obj1.age)
console.log(obj1.fullname.firstname)



// Object destructuring 
let obj3 ={
    college:"HBTU KANPUR",
    CGPA: 8.78,
    SEMESTER:5
}
/* without destructuring 
let college = obj3.college
let CGPA = obj3.CGPA
let SEMESTER = obj3.SEMESTER
console.log(college,CGPA,SEMESTER) */

// WITH DESTRUCUTURING 
let {college,CGPA,SEMESTER}= obj3
console.log(college,CGPA,SEMESTER)