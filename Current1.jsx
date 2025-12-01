
import React from "react";

const Current = ({ current }) => {
  // if no data yet, show loading message
  if (!current || !current.condition) {
    return <p className="text-center mt-3">Loading current weather...</p>;
  }

  return (
    <div className="row">
      <div className="col-3">
        
          <div className="card">
            <button className="btn btn-light" ><p className="card-title">{current.condition.text}</p></button>
          </div>
    
      </div>
      <div className="col-3">
        
          <div className="card">
           <button className="btn btn-light " ><p className="card-temp"> Temperature: {current.temp_c}°C</p></button> 
          </div>
        </div>
         <div className="col-3">
        
          <div className="card">
           <button className="btn btn-light"><p className="card-text">💧 Humidity: {current.humidity}%</p></button> 
          </div>
        </div>
         <div className="col-3">
        
          <div className="card">
           <button className="btn btn-light">   <p className="card-text">💨 Wind: {current.wind_kph} km/h</p></button> 
          </div>
        </div>
      </div>
   
  );
};

export default Current;