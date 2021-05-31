import React from 'react';
import { useSelector } from "react-redux";
export const BeachView = (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const showBtn = () => {
        if (isAuthenticated) {
          return (
            <div>
              <button className="btn btn-outline-dark">Add to Favorites</button>
              <button className="btn btn-outline-dark m-1">Get Location</button>
            </div>
          );
        }
      };

return (
    <div className="card">
    <div className="card-header">
      <h1 className="beach-name">{props.name}</h1> {showBtn()}
    </div>
    <div className="card-body">
      <h3 className="wave-height">
        Wave Height: {props.waveHeightMin}-{props.waveHeightMax} FT
      </h3>
      <h3 className="wind-speed">
        Wind Speed: {props.windSpeed} Knots
      </h3>
      <h3 className="water-temp">
        water Temperature: {props.waterTemp}ºf
      </h3>
      <h3 className="weather">
        weather Temperature: {props.temp}ºf{" "}
        <img src={props.tempIcon} alt="weather icon" />
      </h3>
      <div className="alert alert-info" role="alert">
        <h2 className="surf-cond">Surf Condition: {props.condition}</h2>
      </div>
    </div>
  </div>
)

}
export default BeachView;