import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Inside = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Έλεγχος εάν υπάρχει χρήστης. Αν όχι, ανακατεύθυνση στη σελίδα σύνδεσης.
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handleLogout = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        try {
            const res = await axios.post("/auth/logout", user);
            dispatch({ type: "LOGOUT_SUCCESS", payload: res.data.details });
            localStorage.removeItem("user");
 
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGOUT_FAILURE", payload: err.response.data });
        }
    };

    return (
        <div>
            <h1>Hello maga moy <span>{user ? user.username : ""}</span> and Welcome sta eglezika!</h1>
            <a className="navButton" onClick={handleLogout}>Logout</a>
        </div>
    );
};

export default Inside;
