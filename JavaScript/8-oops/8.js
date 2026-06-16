//create object by fucntion

function create_object(username,email,password){
    this.username = username 
    this.email=email
    this.password=password
}
create_object.prototype.encrypt_password = function(){
    console.log(`${this.password}ABEUIOPWCFB`)
}
let obj1 = new create_object("aksh gupta","240108006@hbtu.ac.in","gupta jiii")

//
let descriptor = Object.getOwnPropertyDescriptor(obj1,"username")
console.log(descriptor)

// writable= it means it allows to change the value of the property 
// enumerable = it means that property can be availed by iteration or console.log
// configurable = can be deleted or not '
obj1.username = "ALOK GUJAR"  // writable 

for (const key in obj1) {  // enumerable 
    if(typeof obj1[key] != "function")
    {
        const element = obj1[key];
        console.log(`the key is ${key} have value as ${element}`)
    }
}
console.log("");

delete obj1.username // configurable 

for (const key in obj1) {  // enumerable 
    if(typeof obj1[key] != "function")
    {
        const element = obj1[key];
        console.log(`the key is ${key} have value as ${element}`)
    }
}
console.log("")






// now we can also change the description of properties also 
// by using defineproperties 
Object.defineProperty(obj1,"email",{
    writable: false,
    enumerable: false, 
    configurable:false
})
// now we cannt chnage the properties (not writable )
// we cannotget email by iteration (not enumerable )
// we also cannot delete  email ( not configurable )
obj1.email = "hitesh@google.com" // now we cannt chnage the properties (not writable )
console.log(obj1)
for (const key in obj1) {  // we cannotget email by iteration (not enumerable ) 
     if(typeof obj1[key] != "function")
    {
        const element = obj1[key];
        console.log(`the key is ${key} have value as ${element}`)
    }
}
delete obj1.email // not configurable also(cannot be deleted)
console.log(obj1)