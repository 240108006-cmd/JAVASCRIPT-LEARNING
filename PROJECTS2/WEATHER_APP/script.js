let button = document.querySelector(".Search")

button.addEventListener("click",async function(e){
                try{
                        let cityname = document.querySelector(".cityname").value
                        
                        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=${APIkey}`)
                        let actualresponse = await response.json()
                        console.log(actualresponse)
                        if(actualresponse.cod == "404"){
                            document.querySelector(".error").innerHTML=`City not found ,Check Spelling`
                            document.querySelector(".temp").style.display =`none`
                            document.querySelector(".hresults").style.display =`none`
                            document.querySelector(".wresults").style.display =`none`
                            document.querySelector(".location").style.display =`none`
                        }

                        document.querySelector(".location").innerHTML=String(cityname).toUpperCase()
                        document.querySelector(".temp").innerHTML=`${actualresponse.main.temp}°c`
                        document.querySelector(".hresults").innerHTML = `${actualresponse.main.humidity}% Humidity`
                        document.querySelector(".wresults").innerHTML = `${actualresponse.wind.speed} km/h Wind Speed`
                        if(actualresponse.weather[0].main== "Clouds"){
                            document.querySelector(".imagee").innerHTML= `<img src="clouds.png" height="200px" class="image">`
                        }
                        if(actualresponse.weather[0].main== "Clear"){
                            document.querySelector(".imagee").innerHTML=`<img src="clear.png" height="200px" class="image">`
                        }
                        if(actualresponse.weather[0].main== "Rain"){
                            document.querySelector(".imagee").innerHTML=`<img src="rain.png" height="200px" class="image">`
                        }
                        if(actualresponse.weather[0].main== "Drizzle"){
                            document.querySelector(".imagee").innerHTML=`<img src="drizzle.png" height="200px" class="image">`
                        }
                        if(actualresponse.weather[0].main== "Mist"){
                            document.querySelector(".imagee").innerHTML= `<img src="mist.png" height="200px" class="image">`
                        }
                    }
                catch(error){
                        alert("ERROR OCCURED !!")
                        document.querySelector(".error").innerHTML=`City not found ,Check Spelling`
                        document.querySelector(".temp").style.display =`none`
                        document.querySelector(".hresults").style.display =`none`
                        document.querySelector(".wresults").style.display =`none`
                        document.querySelector(".location").style.display =`none`
                }
})
document.addEventListener("keydown",function(e){
    if(e.key == "Enter"){
        button.click()
    }
})