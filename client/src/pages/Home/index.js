import React, { useEffect, useState } from "react";
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
export const Home = () => {
  // access to the isAuthenticated property from the auth reducer state
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [beachData, setBeachData] = useState({});
//   const [waveHeightMin, setwaveHeightMin] = useState();
//   const [waveHeightMax, setwaveHeightMax] = useState();
//   const [windSpeed, setwindSpeed] = useState();
//   const [waterTemp, setwaterTemp] = useState();
//   const [temp, setTemp] = useState();
//   const [tempIcon, setTempIcon] = useState();
//   const [condition, setCondition] = useState();
  const [forecastData, setForecastData] = useState([]);
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
  // gonna grab all the Api Calls and change their userState
  useEffect(() => {
      getBeachData();
    getForecastData();
  }, []);

  const getBeachData = () => {
    axios
      .get(
        "https://services.surfline.com/kbyg/spots/reports?spotId=584204214e65fad6a7709d2b"
      )
      .then((res) => {
        setBeachData({...beachData,name:res.data.spot.name ,
            waveHeightMin:res.data.forecast.waveHeight.min,
            waveHeightMax:res.data.forecast.waveHeight.max,
            windSpeed:res.data.forecast.wind.speed,
            waterTemp:res.data.forecast.waterTemp.min,
            temp:res.data.forecast.weather.temperature,
            tempIcon:"https://wa.cdn-surfline.com/quiver/0.18.2/weathericons/" +res.data.forecast.weather.condition +".svg", 
            condition:res.data.forecast.waveHeight.humanRelation});
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getForecastData = () => {
    axios
      .get(
        "https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=584204214e65fad6a7709d2b"
      )
      .then( (res) => {
        let forecast = [];
         for (let i = 0 ; i < 144 ; i+=24){
             forecast.push(res.data.data.wave[i].timestamp);
          }
       

         setForecastData(forecast);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="beach-name">{beachData.name}</h1> {showBtn()}
        </div>
        <div className="card-body">
          <h3 className="wave-height">
            Wave Height: {beachData.waveHeightMin}-{beachData.waveHeightMax} FT
          </h3>
          <h3 className="wind-speed">Wind Speed: {beachData.windSpeed} Knots</h3>
          <h3 className="water-temp">water Temperature: {beachData.waterTemp}ºf</h3>
          <h3 className="weather">
            weather Temperature: {beachData.temp}ºf <img src={beachData.tempIcon} />
          </h3>
          <div className="alert alert-info" role="alert">
            <h2 className="surf-cond">Surf Condition: {beachData.condition}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
