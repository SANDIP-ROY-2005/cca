const apiKey = 'f28bd1a82eff7521d8a8670e8c8480f4';
const baseURl = 'https://api.openweathermap.org/data/2.5';
 const city = document.querySelector(".city");
 const temperature = document.querySelector(".temp");
 const humidity =  document.querySelector(".humid");
 const speeds= document.querySelector(".spee");
const input = document.querySelector(".searchbox input");
const bodyImage = document.querySelector(".image");
const btn =document.querySelector(".searchbox button") ;
 
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//let URl =  `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${apiKey}`;



async function weatherInput(_inputValue){
     
     let apiKey = 'f28bd1a82eff7521d8a8670e8c8480f4';
      
     let URL = `https://api.openweathermap.org/data/2.5/weather?q=${_inputValue}&appid=${apiKey}`;
  
    let response = await fetch(URL);
    let data =  await response.json();
    console.log(data);
     return data ;
}
 

btn.addEventListener("click",searchWeather);
async function searchWeather(){
    let inputValue = input.value;
    if (inputValue === "") {
        alert("Please enter the name of CITY");
        return;
    }
    const dataTwo = await weatherInput(input.value);
    console.log(dataTwo);
     
      city.innerHTML = dataTwo.name;
     temperature.innerHTML =( Math.round(dataTwo.main.temp)-273)+"°C";
     humidity.innerHTML = dataTwo.main.humidity +"%";
     speeds.innerHTML = dataTwo.wind.speed +"km/h";
    
     if(data.weather[0].main=="Clouds"){
        bodyImage.src= "cloud.png";
     }
     if(data.weather[0].main=="Clear"){
        bodyImage.src="clear.png";
     }
     if(data.weather[0].main=="Rain"){
        bodyImage.src="rain.png";
     }
     if(data.weather[0].main== "Mist"){
        bodyImage.src="mist.png";
     }

    
}