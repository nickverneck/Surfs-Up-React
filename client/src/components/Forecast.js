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
              <span className="badge rounded-pill bg-info text-dark m-2">
                {Math.round(data.surf.min) +
                  "-" +
                  Math.round(data.surf.max) +
                  "ft"}
              </span>
            </div>
          </div>
        </div>
      ))
        
    )
   
}
export default Forecast;