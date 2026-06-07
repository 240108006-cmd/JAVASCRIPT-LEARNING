// finding length of array 
let arr1=["thor", "Ironman", "spiderman","superman", "flash", "batman","Ironman"]
let arr2=arr1

console.log(arr1.length) // finding length of array 

console.log(arr1.indexOf("Ironman"))

console.log(arr1.indexOf("BHEEM")) // finding index of any element

console.log(arr1.slice(1,5)) // slicing of array

/*splicing of array 
and slicing me ye difference hai ki splicing me last index tak element print hote hain
 lekin slicing me end index print nhi hota hai ,saath saatbh splicing me wo saare element parent array se remove bhi ho jate hain */
console.log(arr1.splice(1,4))// index 1 to 4 all will get print and will get removed from arr1 also
console.log(arr1)

// check whether the element is included in the aray or not 
console.log(arr2.includes("Superman"))
console.log(arr2.includes("superman"))

const arr3 = new Array(1, 2, 3, 4)
arr3.push(5)
arr3.push(6)
arr3.pop()
arr3.unshift(9) // 9 would be added from front 
arr3.unshift(10) // 10 would be added from front 
arr3.shift() // root element would be removed 
console.log(arr3)


// adding two arrays 
let arr4= [20,21,25,26,24]
let arr5= [50,51,59,56,57]
console.log([...arr4,...arr5])

// check whether is it array or not 
console.log(Array.isArray("AKSH GUPTA"))
console.log(Array.isArray([1,2,3,4,5,6]))

//forming an array from string
console.log(Array.from("AKSH GUPTA"))

//FORMING THE ARRAY FROM THR GIVEN SEQUENCE OF THE ELEMENTS 
console.log(Array.of(1,2,3,4,5))