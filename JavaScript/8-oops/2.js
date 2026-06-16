// STRING,SYMBOL,ARRAY,FUNCTION
// INKO AGAR PRINT KARAYENGE TO HUME PROTOTYPE MILTA HAI
// JISE HUM ACCESS KAR SAKTE HAIN AUR AUR FUNCTIONS KO ADD ON KAR SAKTE HAIN 
// THEN USI PROTOTYPE ME OBJECT PROTOTYPE PRESENT HOTA HAI, JISE HUM ACCESS KAR SAKTE HAIN 
// FUNCTIONS ADD ON KAR SAKTE HAIN , IT ALSO ALLOWS US TO ALLOS OBJECTS PROPERTIES IN Array, STRING, FUNCTIONS 

function  multiply(num){
    return num *5
}
multiply.power=2
console.log(multiply(20))
console.log(multiply.power);
console.log(multiply.prototype);

function create_object(username,score){
    this.username = username
    this.score = score
}
// ADDING PROPERTIES BY ACCESSING PROTOTYPE
create_object.prototype.increment= function(){
    console.log((this.score)++)
}
create_object.prototype.printme = function(){
    console.log(`${this.username} has scored ${this.score}`)
}


let obj1 = new create_object("AKSH GUPTA",40)
let obj2 = new create_object("ALOK GUJAR",45)
obj1.increment()
obj1.printme()

