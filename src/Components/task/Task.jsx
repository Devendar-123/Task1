import React, { useState } from 'react';
import "./task.css"
function Task() {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!email || !password || !name) {
      setErrorMessage('All fields are required.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Invalid email format.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    setErrorMessage('');
    alert("Form submitted successfully")
  };

  return (
    <div className='form'>
      <h2 style={{textAlign :"center"}}>User Authentication</h2>
      <form onSubmit={handleSubmit} align="center" className='myForm'>
        <div>
          <label>UserName: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/> <br />
        </div> <br />

        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/> <br />
        </div> <br />

        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/> <br />
        </div> <br />

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task;
