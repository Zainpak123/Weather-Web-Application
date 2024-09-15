const apikey = "5e3165c5bc5563099831e0d80572f2b1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector("input"); 
const searchBtn = document.querySelector("button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apikey}`);

            
            if(response.status == 404)
            {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                       const data = await response.json();

                       document.querySelector(".city").innerHTML = data.name;
                       document.querySelector(".temp").innerHTML = data.main.temp + "°C";
                       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                       document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
                if(data.weather[0].main == "Clouds")
                    {
                    weatherIcon.src = "images/clouds.png";
                }
                else if(data.weather[0].main == "Clear")
                {
                    weatherIcon.src = "images/clear.png";
                }
                else if(data.weather[0].main == "Drizzle")
                    {
                        weatherIcon.src = "images/drizle.png";
                    }
                
                else if(data.weather[0].main == "Mist")
                    {
                        weatherIcon.src = "images/mist.png";
                    }
                else if(data.weather[0].main == "Rain")
                    {
                        weatherIcon.src = "images/rain.png";
                    }
                    document.querySelector(".weather").style.display = "block";
                    document.querySelector(".error").style.display = "none";
                   

            }
    }


searchBtn.addEventListener("click", function() {
    checkweather(searchBox.value);
});
