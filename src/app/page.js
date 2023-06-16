"use client"
import {poppinsBlack, poppinsRegular} from './fonts/index'
import { useState } from 'react'
import Condition from '@/app/components/Condition'

async function getWeather(city){
  const response = await fetch (`http://api.weatherapi.com/v1/current.json?key=a4d22e340b0f41ed996184640231505&q=${city}&aqi=no`)

  if (response.status === 200){
     const {current, location} = await response.json()
     return {current, location}
  } else {
      console.error(Error('Erro ao buscar a informação sobre o clima'))
  }
}

export default function Home() {
  const [city, setCity] = useState('Luanda')
  const [temp, setTemp] = useState(0)
  const [cityAndCountry, setCityAndCountry] = useState('')
  const [time, setTime] = useState('')
  const [condition, setCondition] = useState('')

  const onClick = (e) => {
    e.preventDefault();
    console.log(city)
    getWeather(city).then(info => {
      setTemp(info.current.temp_c)
      setCityAndCountry(`${info.location.name}, ${info.location.country}`)
      const date = new Date(info.location.localtime)
      setTime(date.toLocaleString())
      setCondition(info.current.condition.text)
    })
  }

    return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-24">
          <div className='w-1/2 h-max bg-white rounded-md flex justify-center p-16 flex-col' >
              <div className={`${poppinsRegular.className}`}>
                <span className={`block text-xl text-center font-medium ${poppinsBlack.className}`}>{cityAndCountry}</span>
                <span className='block pt-3 text-center text-gray-300'>{time}</span>
              </div>
              <div>
                <Condition condition={condition}></Condition>
                <span className={`block text-6xl text-center font-lg pt-8 ${poppinsBlack.className}`}>{temp}ºC</span>
                <span className='text-gray-300 text-center block'>{condition}</span>
              </div>
              <div className={`flex justify-center pt-24`}>
                  <form>
                      <input value={city} onChange={(e) =>{setCity(e.target.value)}} className={`h-10 w-40 rounded-l-lg bg-neutral-100 p-4 focus:outline-gray-300`}type='text' name='' placeholder='Digite a Cidade' />
                      <button className={`bg-yellow-400 h-10 w-28 rounded-r-lg`} name='myInput' onClick={onClick}>Buscar</button>
                  </form>
              </div>
          </div>
    </main>
  )
}
