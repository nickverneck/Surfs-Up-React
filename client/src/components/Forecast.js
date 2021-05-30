import React from 'react';
import Moment from "react-moment";
Moment.globalFormat = "D MMM";
export const Forecast = (props) => {
    const  forecastData = Object.values(props)
    return (
      
        forecastData.map((data) => (
      
            <div className="col">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">
                <Moment unix>{data.timestamp}</Moment>
              </h5>
              <p className="card-text">
                {Math.floor(data.surf.min) +
                  "-" +
                  Math.ceil(data.surf.max) +
                  "ft"}
              </p>
            </div>
          </div>
        </div>
      ))
        
    )
   
}
export default Forecast;