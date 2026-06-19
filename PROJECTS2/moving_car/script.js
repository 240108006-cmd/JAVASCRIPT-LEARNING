let button = document.querySelector(".button")
let road = document.querySelector(".road")
let wheel1 = document.querySelector(".wheel1")
let wheel2 = document.querySelector(".wheel2")
let button2 =document.querySelector(".button2")
let audio = document.createElement("audio")
let car= document.querySelector(".car")
let bg =document.querySelector(".sky")
button.addEventListener("click",function(){
    road.style.animation ="track 9s linear 0s infinite"
    wheel1.style.animation="wheel 0.3s linear 0s infinite"
    wheel2.style.animation="wheel 0.3s linear 0s infinite"
    car.style.animation="car 2s linear 0s infinite" 
    bg.style.animation ="bg 2s linear 0s infinite"
    audio.innerHTML=`<source src="audio.mp3">`
    audio.loop = true
    audio.autoplay= true
    audio.loop = true

})
button2.addEventListener("click",function(){
    road.style.animation ="none"
    wheel1.style.animation="none"
    wheel2.style.animation="none"
    car.style.animation="none"
    bg.style.animation ="none"
    audio.muted=true
})
// {
//     key learnings:[
//         overflow hidden se slidebar ka overflow rukjaata,
//         infinite width ke liye 200EncodedVideoChunk,
//         agr image fatne lge to backsize =cover hatado
//     ]
// }
