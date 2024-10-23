import React, { useContext } from 'react'
import MyContext from '../contexts/basic-context/MyContext'

export default function Data() {
   const data = useContext(MyContext)
   return (
      <div>
         Data - {data.username}-{data.message}
      </div>
   )
}
