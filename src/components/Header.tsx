import AddSvg from '../assets/icons/AddSvg'
import CalendarSvg from '../assets/icons/CalendarSvg'

function Header() {
  return (
    <div className='w-screen flex justify-between items-center p-6 '>
      <h1 className='text-3xl font-medium'>Task Management</h1>
      <div className='flex gap-2'>
        <div className='px-7 py-3 flex items-center justify-center gap-1 border rounded-[100px]'>
          <p>Week</p>
          <CalendarSvg />
        </div>
        <div className='px-7 py-3 flex items-center justify-center gap-1 border rounded-[100px] bg-blue-600'>
          <p className='text-white'> Add task</p>
          <AddSvg />
        </div>
      </div>
    </div>
  )
}

export default Header
