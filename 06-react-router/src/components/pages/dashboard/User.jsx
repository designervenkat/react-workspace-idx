import { useParams } from 'react-router-dom'

export default function User() {
   const { id } = useParams()
   return (
      <div className='h-screen grid place-content-center'>
         <h2>Product id is = {id}</h2>
      </div>
   )
}
