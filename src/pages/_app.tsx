import { useState } from 'react'
import Day from '../components/Day'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import '../index.css'
import { getDays } from '../utils/getDays'

function MyApp() {
  const [days, setDays] = useState(getDays())
  return (
    <div>
      <TopBar />
      <Header />
      <div className='flex-1 grid grid-cols-30 w-screen overflow-x-auto'>
        {days.map((day, index) => {
          return <Day day={day} key={index} />
        })}
      </div>
    </div>
  )
}

export default MyApp
