import React, { useEffect, useState } from 'react'
import styles from "./Weather.module.css"
import Sun from "../../Components/Sun.png"
import Day from '../../Components/Day/Day'

const Weather = () => {
  const [Wether, setWether] = useState({})
  const [Location, setLocation] = useState("")

  const getwether = async () => {
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6cbbb287df064a81bc4190257230301&q=${Location}&days=3&aqi=no&alerts=no`)
    const data = await res.json()
    console.log(data, "From get wether function")
    setWether(data);
  }

  // getwether();


  return (<div className={styles.Weather}>
    <div className={styles.Search_Box}>
      <input type="text" value={Location} onChange={(e) => {
        setLocation(e.target.value)
      }} />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className={styles.Daily_Bulletin}>
      <div className={styles.Location}>
        <img src={Sun} alt="" className={styles.Sun} />
        {/* <img src="https://cdn.weatherapi.com/weather/64x64/night/116.png" alt="" className={styles.Wicon}/> */}
        <div className={styles.Geographical_Location}>
          <h1>London</h1>
          <div>City of London, Greater London</div>
          <div>United Kingdom</div>
        </div>
      </div>
      <div className={styles.Daily_Bulletin_Container}>
        <div className={styles.C_TileL}>06/01/2023</div>
        <div className={styles.C_TileL} title="Tempratue"><i className="fa-solid fa-temperature-three-quarters"></i> 8.6 C / 51.8 F</div>
        <div className={styles.C_Tile}> <i className="fa-solid fa-temperature-three-quarters"></i> Feels Like 8.6 C / 46.5 F</div>
        <div className={styles.C_Tile} title="Wind"><i className="fa-solid fa-wind"></i> 8.1 mph / 13.0 kph</div>
        <div className={styles.C_Tile} title="Cloud"><i class="fa-solid fa-cloud"></i> 50 </div>
        <div className={styles.C_Tile} title="Humidity"><i class="fa-solid fa-droplet"></i> 80 </div>
      </div>
    </div>
    <div className={styles.Forcast_Holder}>
      <div className={styles.Forcast}>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
      </div>
    </div>
  </div>
  )
}

export default Weather