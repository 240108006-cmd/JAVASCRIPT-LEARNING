function randomcolor(){
    let color="#"
    let hex = "01234546789ABCDEF"
    for (let i=0;i<=5;i++){
        color+= `${hex[Math.floor(Math.random()*(16))]}`
    }
    return color
}
let addbutton = document.querySelector(".adddiv")
document.addEventListener("keydown",function(e){
    if(e.key== "Enter"){
        addbutton.click()
    }
})
addbutton.addEventListener("click",function(e){
    e.preventDefault()
    let texttoadd = document.querySelector(".addtext")
    let realtext = texttoadd.value.toUpperCase()
    if(texttoadd.value.trim()!=""){
        let newlist = document.createElement("li")
        newlist.innerHTML=`<p >${realtext}</p><i class="fa-regular fa-circle-xmark cross" ></i>`
        newlist.querySelector("p").style.color=randomcolor()
        newlist.style.fontWeight= "bolder"
        let cross = newlist.querySelector(".cross")


        document.querySelector(".list").appendChild(newlist)
        texttoadd.value= "" 


        newlist.querySelector("p").addEventListener("click",function(){
            newlist.querySelector("p").style.textDecoration="line-through"
            newlist.querySelector("p").addEventListener("click",function(){
                       newlist.querySelector("p").style.textDecoration="none"
            })
        })


        cross.addEventListener("click",function(){              
                      newlist.remove()
        })


        
    }
    else{
        alert("enter some text")
    }

})


