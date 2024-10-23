import React from 'react'
import MyContext from '../contexts/basic-context/MyContext'

export default function Nav() {
   return (
      <div>
         Nav Component - User Component
         <MyContext.Consumer>
            {(data) => (
               <div>
                  <h1>{data.username}</h1>
                  <p>{data.message}</p>
               </div>
            )}
         </MyContext.Consumer>
      </div>
   )
}
