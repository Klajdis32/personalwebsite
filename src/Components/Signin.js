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
          <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Όνομα Χρήστη:</label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div>
                <label>Κωδικός Πρόσβασης:</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="submit">Είσοδος</button>
            </form>
        </div>
      </div>
    );
};
  
 
export default Signin; 