import React from 'react';
import { useSelector } from "react-redux";
export const BeachView = (props) => {
 
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const showBtn = () => {
        if (isAuthenticated) {
          return (
            <div>
              <a href={"/addfavorite/"+props.id} className="btn btn-outline-dark">Add to Favorites</a>
              {/* <button className="btn btn-outline-dark m-1">Get Location</button> */}
            </div>
          );
        }
      };

return (
    <div className="card">
    <div className="card-header">
      <h1 className="beach-name">{props.name} - {props.location}</h1> {showBtn()}
    </div>
    <div className="card-body">
      <h3 className="wave-height">
        Wave Height: {props.waveHeightMin}-{props.waveHeightMax} FT <i class="fas fa-arrows-alt-v" style={{color: '#0dcaf0'}}></i>
      </h3>
      <h3 className="wind-speed">
        Wind: {props.windSpeed} Knots<i className="fas fa-arrow-alt-circle-down" style={{transform: `rotate(${props.windDir}deg)`,color: '#0dcaf0' }}></i>
      </h3>
     <span className="badge rounded-pill  text-dark m-2 p-2" style={{backgroundColor:'#b7dbff8a'}}>
        water Temperature: {props.waterTemp}ºf{" "} <img src="https://wa.cdn-surfline.com/quiver/0.18.2/weathericons/WATER_ICON.svg" alt="Water Temp"/>
      </span>
      <span className="badge rounded-pill bg-warning text-dark m-2">
        weather Temperature: {props.temp}ºf{" "}
        <img src={props.tempIcon} alt="weather icon" />
      </span>
      <div className="alert alert-info" role="alert">
        <h2 className="surf-cond">Surf Condition: {props.condition}</h2>
      </div>
    </div>
  </div>
)

}
export default BeachView;