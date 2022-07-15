import moment from 'moment'
import { useState } from 'react'

interface DayProps {
  day: moment.Moment
}
export default function Day({ day }: DayProps) {
  const [dayEvents, setDayEvents] = useState([])

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === moment().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : ''
  }
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center'>
        <p className='text-sm mt-1'>{day.format('ddd').toUpperCase()}</p>
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>{day.format('DD')}</p>
      </div>
    </div>
  )
}
