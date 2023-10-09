/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";

const Event = () => {
    
    const { id,name  } = useParams()






    return (
        <div className="card-container">
       <h2>How showing post {id}</h2>
       <h2>Please {name}</h2>
      </div>

      
    );
};

export default Event;