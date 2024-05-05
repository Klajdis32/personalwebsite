import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "./signin.css";

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);

    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Υποβλήθηκε η φόρμα με τα εξής στοιχεία:');
      console.log('Όνομα Χρήστη:', username);
      console.log('Κωδικός Πρόσβασης:', password);
    };

    return (
      <div className="grey">
        <div className="ContainertoyLogin">
              <h2 className="center">Sign in</h2> <br/>
        
                <span className="spanform">Username:</span><br/><br/>
                <input
                  type="text"
                  placeholder="Username..." 
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
            
              <br/> <br/>
            
                <span className="spanform">Password:</span><br/><br/>
                <input
                  type="password"
                  placeholder="Password..." 
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                  <br/><br/>
          
              <div className="todivtoya">
                <a type="submit" className="tosubmit">Sign in</a>
              </div>
              <br/> <br/>
        </div>
      </div>
    );
};
  
 
export default Signin; 