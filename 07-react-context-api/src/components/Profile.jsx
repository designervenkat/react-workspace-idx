import React from 'react'
import MyContext from '../contexts/basic-context/MyContext'

export default function Profile() {
   return (
      <div>
         <h2>Profile Component </h2>
         <MyContext.Consumer>
            {(data) => <h2>{data.username}</h2>}
         </MyContext.Consumer>
      </div>
   )
}
