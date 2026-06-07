let hello = (function(){ 
    console.log("hello")
})();


(function hello(){
    console.log("hello")
})();


(()=>{
    console.log("hello")
})();


// ()(THROUGH THESE PARANTHESES WE CAN ALSO PASS ARGUMENTS TO THE FUNCTIONS);

let add= (function(a,b){
    console.log(a+b)
})(10,5);



(function subtract(a,b)
{
    console.log(a-b)
})(4,2);


((a,b)=>{
    console.log(a*b)
})(10,5);