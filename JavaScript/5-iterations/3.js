//  ITERATION OVER ARRAY AND MAP BY FOR OF LOOP 
let arr1=["aksh","hitesh","alok","vansh"]
for (const value of arr1) {
    console.log(value)
}


let str1= "AKSH GUPTA"
for (const element of str1) {
    console.log(element)
}

let map = new Map()
map.set("aksh","IT")
map.set("abhi","ME")
map.set("anjani","CE")
console.log(map)
for (const VALUE of map){
    console.log(VALUE)
}
for (const [key,value] of map){
    console.log(`THE STUDENT IS ${key} and their corresponding branch is ${value}`)
}
