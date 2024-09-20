import "./404.css";
import gif from "../../assets/404.gif";
const NotFound = () => {

    return (
        <div className="divcenter1">
            <div className="periexomena">
                <h1><em>404</em> Page Not Found</h1>
                <img src={gif}  alt="" className="pc"/>
                <h2>Use the footer below to navigate elsewhere</h2>

            </div>
        </div>
    );
}
 
export default NotFound; 
