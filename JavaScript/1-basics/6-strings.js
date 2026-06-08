let a= "AKSH GUPTA IT"
let b= a 
// finding length
console.log(b.length)

// convert to uppercase
console.log(b.toUpperCase())

// convert to lowercase
console.log(b.toLowerCase())

// find index of character(FIRST ONE)
console.log(b.indexOf('G'))

// FIND THE CHARACTER PRESENT AT THE GIVEN INDEX 
console.log(b.charAt(6))

// splitting into array
console.log(b.split(" "))

// REPLACE THE STRING WITH NEW ONE 
console.log(b.replace("AKSH","HITESH"))

// CHECK WHETHER THE GIVEN STRING INCLUDES IN THE PARENT STRING OR NOT
console.log(b.includes("HITESH"))
console.log(b.includes("AKSH"))

// REMOVE THE SPACES FROM BOTH ENDS 
let c= "    AKSH    "
console.log(c.trim())
console.log(c.trimStart())
console.log(c.trimEnd())

// conactenation method 1 
let studentName = "Aksh  Gupta"
let studentroll = 240108006
let studentAge = 18 
console.log("Hello My Name is "+ studentName +". My Roll No is "+studentroll+ ". My Age is "+ studentAge)

// conactenation method 2
let studentName1 = "Aksh Gupta"
let studentroll1 = 240108006
let studentAge1 = 18 
console.log(`Hello My Name Is ${studentName1} . My Roll No Is ${studentroll1} And My Age Is ${studentAge1}`)

// DIFFERENTIATING BETWEEN SLICE(), SUBSTR(), SUBSTRING()
let str = "JavaScript";
console.log(str.slice(0, 4));                   /* slice(start,end)- all basic rules 
                                                   substr(start,length)
                                                   substring(start,end){
                                                        =agar start badha hai end se to automatic swapping kr dega dono arguments ki 
                                                        = converts negative to zero
                                                    }                                 */
console.log(str.slice(-6));
console.log(str.substring(0, 4));
console.log(str.substring(-3));
console.log(str.substring(4, 0));
console.log(str.substr(4, 6));
console.log(str.slice(4, 7));
console.log(str.substring(4, 7));
console.log(str.substr(4, 3));
