import React from 'react'

export default function NotFound() {
   return (
      <div className='h-screen w-screen text-center grid place-content-center'>
         <img
            src='/not-found.svg'
            alt='not-found'
            className='w-72 h-auto'
         />
         <h2 className='my-4 text-2xl font-semibold text-center'>
            Page Not Found! Please Try Something else.
         </h2>
      </div>
   )
}
