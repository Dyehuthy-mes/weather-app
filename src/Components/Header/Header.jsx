import React,{useEffect, useState} from 'react'
import "./Header.css"
import SearchBar from '../SearchBar/SearchBar'

function Header() {
    const[city, setCity]=useState("")

    const getcityname = async () =>{
        const fetchData = await fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=e67f75ebeecf5606e4427f51a99b51a5")
        const data = await fetchData.json()

        setCity(data.name)
    }

    useEffect(() => {
        getcityname()
    }, [])

    return (
        <div className='header'>
        <h1 className='header__h1'>WeatherApp</h1>
        <h2 className="header__h2">HowToday in: {city}</h2>
        <SearchBar/>
        </div>
    )
}


export default Header
