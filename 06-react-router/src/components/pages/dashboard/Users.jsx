import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { initialUsers } from '../../../data/usersList';


export default function Users() {

  const [users, setUsers] = useState(initialUsers)

  const [filteredUsers, setFilteredUsers] = useState([])

  let [searchParams, setSearchParams] = useSearchParams();
  

  useEffect(() => {

    // get the role from search params
    const role = searchParams.get('role')

    // check if any roles exist or not
    if (role) {
      
      // filter user by role
      const filtered = users.filter(user => user.role === role)
      setFilteredUsers(filtered)

    } else {

      // if no role in url search filter then display all users
      setFilteredUsers(users)

    }

  }, [searchParams, users])


  const filterByAdmins = () => {
    setSearchParams({role: 'admin'})
  }


  return (
    <div className='h-screen grid place-content-center '>
      <h2 className='text-2xl text-gray-400'>User List</h2>

      <ul>
        {filteredUsers.map(user => (
          <li className='my-2' key={user.id}>{user.name} - { user.role}</li>
        ))}
      </ul>


      <button onClick={filterByAdmins} className='bg-purple-800 text-purple-300 h-12 w-48 mt-10'>Filter By Admin</button>

      <button onClick={() => setSearchParams({})} className='bg-red-800 text-red-300 h-12 w-48 mt-2'>Reset Filter</button>
    </div>
  )
}
