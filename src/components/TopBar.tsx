import LogoSvg from '../assets/icons/LogoSvg'

export default function TopBar() {
  return (
    <div className=' w-screen flex bg-blue-100 justify-between items-center py-4 pl-4 pr-10'>
      <LogoSvg />
      <div className='flex items-center gap-2'>
        <div className='w-8 h-8 rounded-2xl bg-black ' />
        <p>Thelma</p>
      </div>
    </div>
  )
}
