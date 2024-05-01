import './projects.css';
import Math from "../Assets/math.png";

const Projects = () => {

    return (
        <div class="container">
            <br />
            <div class="divmath">
                <img src={Math} alt="" class="math" />
            </div>
            <div><h2>Projects</h2></div>
            <br />
            <form onsubmit="event.preventDefault();" role="search">
                <input id="search" type="search" placeholder="Αναζήτηση..." autofocus required />
                <button type="submit">Go</button>    
            </form>
            <br /><br />

            <div id="dynamicContentContainer"></div>
            
            <div class="loadmore" id="loadmore">
                <a>Load More</a><br />
            </div>

            <br /><br /><br /><br />

        </div>
    );
}
 
export default Projects; 