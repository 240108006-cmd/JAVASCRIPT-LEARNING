let arr= [10,20,30,40,50,60]

let result= arr.map((val)=>(val+5))
console.log(result)

// applying multiple higher order loops
let result1= arr.map((val)=>(val+5))
                .map((val)=>(val+10))
                .filter((val)=>(val>=35))
console.log(result1)
//hi
