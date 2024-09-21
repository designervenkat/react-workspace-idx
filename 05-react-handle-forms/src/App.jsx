function App() {

  return (
    <div className="h-screen w-full max-w-7xl mx-auto grid place-content-center">
      <div className="flex flex-col gap-y-6">
        <h2 className="text-xl font-bold mb-6">Handle forms with React</h2>

        <form  className="flex flex-col gap-y-6">
          <input
            type="text"
            placeholder="enter your username"
            className="form-input"           
          />
         
          <input
            type="text"
            placeholder="enter your email"
            className="form-input"           
          />
          
          <input
            type="password"
            placeholder="enter your password"
            className="form-input"
          />
         
          <button className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
