import MyContext from './MyContext'

const ContextProvider = ({ children }) => {
   const data = { username: 'John', message: 'Hello from context API' }

   return (
      // React node elements and jsx syntax
      <MyContext.Provider value={data}>{children}</MyContext.Provider>
   )
}

export default ContextProvider
