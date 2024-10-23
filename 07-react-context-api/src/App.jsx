import React from 'react'
import MyContext from './contexts/basic-context/MyContext'
import User from './components/User'
import ContextProvider from './contexts/basic-context/MyContextProvider.jsx'
import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'
import Data from './components/Data.jsx'

function App() {
   return (
      <>
         <h2>Context API</h2>
         {/* <MyContext.Consumer>
            {(data) => (
               <div>
                  <h1>{data.username}</h1>
                  <p>{data.message}</p>
               </div>
            )}
         </MyContext.Consumer> */}

         <ContextProvider>
            {/* <Nav />
            <User />
            <Profile /> */}
            <Data />
         </ContextProvider>
      </>
   )
}

export default App
