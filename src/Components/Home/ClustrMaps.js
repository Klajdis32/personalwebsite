import { useEffect } from "react";
import "./home.css";

const ClustrMaps = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//clustrmaps.com/map_v2.js?d=G_WuskgjFcZapPC6EQwgJvIM1oYbYcbM3rCdOyjx9zs&cl=ffffff&w=a";
        script.id = "clustrmaps";
        script.type = "text/javascript";
    
        const container = document.getElementById("clustrmaps-container");
        if (container) {
          container.appendChild(script);
        }
    
        return () => {
          const cleanupContainer = document.getElementById("clustrmaps-container");
          if (cleanupContainer) {
            cleanupContainer.innerHTML = ""; // Καθαρισμός όταν φεύγουμε από τη σελίδα
          }
        };
      }, []);
    

  return (
    <div className="divMap">
      <div id="clustrmaps-container"></div>
    </div>
  );
};

export default ClustrMaps;