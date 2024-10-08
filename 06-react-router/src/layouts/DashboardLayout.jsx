import { Outlet, Navigate } from 'react-router-dom'

export default function DashboardLayout() {
   const isAuthenicated = true

   return (
      <>
         {!isAuthenicated ? (
            <Navigate to='/auth/login' />
         ) : (
            <div className='h-screen grid grid-cols-4'>
               <div className='h-screen bg-slate-800 text-slate-500 grid place-content-center text-2xl'>
                  SideBar Naviagtion
               </div>
               <div className='col-span-3'>
                  <Outlet />
               </div>
            </div>
         )}
      </>
   )
}
