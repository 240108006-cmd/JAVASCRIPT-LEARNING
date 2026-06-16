// IF WE WANTS TO USE PROPERT BY ANOTHER FUNCTION BY CALLING 
//THEN WE WOULD USE .call(this,)
function setusername(username){
    this.username = username
}
function create_object(username,email,password){
    setusername.call(this,username)
    this.email = email
    this.password = password 
}
let obj1 = new create_object("AKSH GUPTA","240108006@hbtu.ac.in","gupta@123")
console.log(obj1.username)