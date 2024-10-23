import React from 'react'
import MyContext from '../contexts/basic-context/MyContext'

export default function User() {
   return (
      <div>
         User Component
         <MyContext.Consumer>
            {(data) => <div>{data.username}</div>}
         </MyContext.Consumer>
      </div>
   )
}
