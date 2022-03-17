import React, { useState  } from 'react'
import './App.css'

import defaultBackImage from './img/defaultbg.jpg'
import sunnyBg from './img/sunnybg.jpg'
import snowBg from './img/snowbg.jpg'
import springBg from './img/springbg.jpg'
import autumnBg from './img/autumnbg.jpg'

const API_KEY = 'f6b6a9d5c6cc48d281e3e47cfbfd680f'
function App () {
  const [searchText, setsearchText] = useState('')
  const [backImage, setBackImage] = useState(defaultBackImage)
  const [findedCity, setFindedCity] = useState({ name: ' ', temp: 0 })

  const tarih = new Date()
  const yil = tarih.getFullYear()
  const ay = tarih.getMonth()
  const gun = tarih.getDay()
  const saat = tarih.getHours()
  const dakika = tarih.getMinutes()
  const saniye = tarih.getSeconds()

  const fetchWeatherByCityName = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        searchText +
        '&units=metric&appid=' +
        API_KEY
    )
      .then(response => response.json())
      .then(data => {
        setFindedCity({ name: data.name, temp: Math.round(data.main.temp)  })
        if(data.main.temp<0){
          setBackImage(snowBg)
        }else if(data.main.temp<10){
          setBackImage(autumnBg)
        }else if(data.main.temp<20){
          setBackImage(springBg)
        }else{
          setBackImage(sunnyBg)
          
        }

      })
  }

  return (
    <div className='App' style={{ backgroundImage: `url(${backImage})` }}>
      <div className='searchInput'>
        <input
          value={searchText}
          onChange={e => {
            setsearchText(e.target.value)
          }}
          placeholder='Bir şehir giriniz'
        ></input>
        <div className='searchBtn'>
          <button onClick={fetchWeatherByCityName}>Arama Yap</button>
        </div>
      </div>
      {findedCity.name !== ' ' && (
        <div className='weatherWrapper'>
          <div className='ortak card-header'>{findedCity.name} Hava Durumu</div>
          <div className='ortak card-body'>{findedCity.temp} ° </div>
          <div className='ortak card-footer'>
            {gun +
              ' . ' +
              ay +
              ' . ' +
              yil +
              ' ' + 
              saat +
              ':' +
              dakika +
              ':' +
              saniye}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
