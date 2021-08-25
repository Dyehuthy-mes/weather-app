import React,{useEffect, useState} from 'react'
import "./WeatherInterface.css"
import Wind from "../../static/wind.svg"
import Temperature from "../../static/temperature.svg"
import Humidity from "../../static/humidity.svg"
import Pressure from "../../static/pressure.svg"

function WeatherInterface() {
    const [temperature, setTemperature] = useState()
    const [maxtemp, setMaxtemp] = useState()
    const [humidity, setHumidity] = useState()
    const [mintemp, setMintemp] = useState()
    const [pressure, setPressure] = useState()
    const [wind, setWind] = useState()
    const [active, setActive] = useState('')

    const getweather = async (country) =>{
        const fetchData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=e67f75ebeecf5606e4427f51a99b51a5`)
        const data = await fetchData.json()

        try{
            setTemperature((data.main.temp - 273.15).toFixed(2))
            setMaxtemp((data.main.temp_max - 273.15).toFixed(2))
            setHumidity(data.main.humidity)
            setMintemp((data.main.temp_min - 273.15).toFixed(2))
            setPressure(data.main.pressure)
            setWind(data.wind.speed)

        }

        catch(error){
            console.log(error,"hubo un error")
        }
    }

    useEffect(() => {
        getweather(active)
    }, [active])

    return (
    <div>
        <div className="header">
        <h1 className='header__h1'>WeatherApp</h1>
        <h2 className="header__h2">HowToday in: {active}</h2>
        <form>
        <select 
           className="shape"  
           name="line" 
           id="bus"
           onChange={(value)=> setActive(value.target.value)}
           >
            <option value="England">England</option>
            <option value="Argentina">Argentine</option>
            <option value="Iran">Iran</option>
            <option value="Venezuela">Venezuela</option>
        </select>
        </form>
        </div>
    <div className="wrapper">
        <div className="one">
            <img src={Temperature}></img>
            <p>Temperature</p>
             {temperature}°
        </div>
        <div className="two">
            <p>Max</p> 
            {maxtemp}°
        </div>
        <div className="three">
            <p>Min</p> 
            {mintemp}°
        </div>
        <div className="four">
            <img src={Humidity}></img>
            <p>Humidity</p>
            {humidity}%
        </div>
        <div className="five">
            <img src={Pressure}></img>
            <p>Pressure</p>{pressure}
        </div>
        <div className="six">
            <img src={Wind}></img>
            <p>Wind Speed</p>
            {wind} km
        </div>
    </div>
    </div>
    )
}

export default WeatherInterface