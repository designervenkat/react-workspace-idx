import React, { useState, useEffect, useRef } from 'react';

let renderCount = 0
function SimpleForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  renderCount++

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!username.length > 4 ) {
      return
    } else {

      
      console.log({
        username,
        email,
        password
      });
    }
  }
  
  
  return (
    <div className="h-screen w-full max-w-7xl mx-auto grid place-content-center">
      <div className="flex flex-col gap-y-6">
        <h2 className="text-xl font-bold mb-6">Handle forms with React ({renderCount/2})</h2>

        <form  className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}           
          />
         
          <input
            type="text"
            placeholder="enter your email"
            className="form-input"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}             
          />
          
          <input
            type="password"
            placeholder="enter your password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}    
          />
         
          <button type='submit' className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;
