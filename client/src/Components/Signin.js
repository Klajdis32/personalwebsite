import { useContext, useState } from "react";
import "./signin.css";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {

    const [ credentials, setCridentials ] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCridentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type:"LOGIN_START" });
        try{
            const res = await axios.post("/auth/login", credentials );
            dispatch({ type:"LOGIN_SUCCESS", payload: res.data.details });
            navigate("/inside")
        } catch (err) {
            dispatch({ type:"LOGIN_FAILURE", payload: err.response.data });
        }
    };

    return <div className="grey">
        <div className="lContainer">
            <div className="tologokaitolabel">
                <h2>Login</h2>
            </div>
            <br/>
            <label className="tolabel" htmlFor="username">Όνομα :</label>
            <input 
                type="text" 
                placeholder="Username" 
                id="username" 
                onChange={handleChange} 
                className="lInput" 
            />   
            <label htmlFor="password">Κωδικός:</label>
            <br/><br/><br/>
            <input 
                type="password" 
                placeholder="Password" 
                id="password" 
                onChange={handleChange} 
                className="lInput" 
            /> 
            <br/>
            {error && <span className="toerroredw">{error.message}</span>}
            <br/><br/><br/>
            <div className="center12">
                <a disabled={loading} onClick={handleClick} className="tosubmit">Σύνδεση</a>
            </div>
            <br/>
        </div>
    </div>
};

export default Signin