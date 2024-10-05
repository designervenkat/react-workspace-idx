import { Outlet, Navigate } from 'react-router-dom'

export default function DashboardLayout() {
   const isAuthenicated = false

   return (
      <>
         {!isAuthenicated ? (
            <Navigate to='/auth/login' />
         ) : (
            <div className='h-screen grid grid-cols-4'>
               <div className='h-screen bg-red-300 text-red-800 grid place-content-center text-2xl'>
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
