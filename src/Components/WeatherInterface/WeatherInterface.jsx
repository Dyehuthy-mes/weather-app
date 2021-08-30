import React,{useEffect, useState} from 'react'
import "./WeatherInterface.css"
import Wind from "../../static/wind.svg"
import Temperature from "../../static/temperature.svg"
import Humidity from "../../static/humidity.svg"
import Pressure from "../../static/pressure.svg"
import Plus from "../../static/plus.svg"
import Sub from "../../static/sub.png"

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
            setTemperature((data.main.temp - 273.15).toFixed(0))
            setMaxtemp((data.main.temp_max - 273.15).toFixed(0))
            setHumidity(data.main.humidity)
            setMintemp((data.main.temp_min - 273.15).toFixed(0))
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
    
   function messageToHenry(message){
       if(temperature > 25){
           message="It's warm today"
       }
       else if(temperature < 25 && temperature > 14){
           message="Nice day"
       }
       else if(temperature < 14){
           message="Cold day :/"
       }
       
       return message
   }


    return (
    <div>
        <hr width="50%"/>
        <div className="header">
            <h1 className='header__h1'>WeatherApp</h1>
            <h2 className="header__h2">HowToday in: {active}</h2>
            <form >
                <select 
                className="select"  
                name="line" 
                id="bus"
                onChange={(value)=> setActive(value.target.value)}
                >
                    <option className="option" value="England">England</option>
                    <option className="option" value="Argentina">Argentine</option>
                    <option className="option" value="Iran">Iran</option>
                    <option  className="option"value="Venezuela">Venezuela</option>
                </select>
            </form>
        </div>
        <hr width="50%"/>
        <div className="wrapper">
            <div className="one">
                <img src={Temperature}></img>
                <p>Temperature</p>
                {temperature}°
            </div>
            <div className="two">
                <img src={Plus}></img>
                <p>Max</p> 
                {maxtemp}°
            </div>
            <div className="three">
                <img src={Sub}></img>
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
