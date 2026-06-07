let arr1 =["aksh","alok","hitesh","vansh"]
arr1.forEach(function(value){
    console.log(value)
})
arr1.forEach(function(value,index,arr){
    console.log(value,index,arr)
})
for (const element of arr1) {
    console.log(element)
}

console.log("")
let arr2=
[
    {
        studentname: "aksh",
        rollno : 6
    },
    {
        studentname: "alok",
        rollno : 7
    },
    {
        studentname: "ankit",
        rollno : 10
    },
    {
        studentname: "vansh",
        rollno : 80
    }
]

arr2.forEach(function (value){
    console.log(value.studentname)
})
console.log("")

arr2.forEach((value)=>{         //forEach by arrow function
    console.log(value.rollno)
})

console.log("")
for (const element of arr2) {
    console.log(`the student ${element.studentname} have roll no ${element.rollno}`)
}