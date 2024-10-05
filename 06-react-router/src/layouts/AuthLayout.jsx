import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
   return (
      <div className='h-screen bg-slate-200 grid place-content-center'>
         <Outlet />
      </div>
   )
}
