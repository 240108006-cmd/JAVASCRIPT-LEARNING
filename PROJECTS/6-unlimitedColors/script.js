let start = document.querySelector(".startbutton")
let stop = document.querySelector(".stopbutton")
let body = document.querySelector("body")
let setting
function randomcolor(){
    let hex= "0123456789ABCDEF"
    let color ="#"
    for (let x=0;x<=5;x++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
start.addEventListener("click",function(e){
    setting = setInterval(function(){
        body.style.backgroundColor= randomcolor()
    },1000)
})
stop.addEventListener("click",function(e){
    clearInterval(setting)
})