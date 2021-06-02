import React, { useEffect, useState } from "react";
import BeachView from "../../components/BeachView";
import Forecast from "../../components/Forecast";
import Moment from "react-moment";
import axios from "axios";
import { useParams } from "react-router";
Moment.globalFormat = "D MMM";
export const Beach = () => {
    let {id} = useParams();
    const [beachData, setBeachData] = useState({});
    const [forecastData, setForecastData] = useState([]);
    useEffect(() => {
         getBeachData();
         getForecastData();
        
      }, []);
    // ----- Does an API request that returns current live Beach data --------------//

  const  getBeachData = () => {
    axios
      .get(
        "https://services.surfline.com/kbyg/spots/reports?spotId="+id
      )
      .then((res) => {
        setBeachData({
          ...beachData,
          id:id,
          name: res.data.spot.name,
          waveHeightMin: res.data.forecast.waveHeight.min,
          waveHeightMax: res.data.forecast.waveHeight.max,
          windSpeed: res.data.forecast.wind.speed,
          waterTemp: res.data.forecast.waterTemp.min,
          temp: res.data.forecast.weather.temperature,
          tempIcon:
            "https://wa.cdn-surfline.com/quiver/0.18.2/weathericons/" +
            res.data.forecast.weather.condition +
            ".svg",
          condition: res.data.forecast.waveHeight.humanRelation,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ------------- does an API request that returns forecast WAVE data for 144 hours //
// we are going to loop through the 144 and only get in 24 increments to return 6 day forecast
// we will need to wind & tide data later through other requests
const getForecastData = () => {
    axios
      .get(
        "https://services.surfline.com/kbyg/spots/forecasts/wave?spotId="+id
      )
      .then((res) => {
        let forecast = [];
        for (let i = 0; i < 144; i += 24) {
          forecast.push(res.data.data.wave[i]);
        }

        setForecastData(forecast);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return (
        <div className="container">
            <BeachView {...beachData}/>
        <div className="row">   
       <Forecast {...forecastData}/>
       </div>      
        </div>
    )
}
export default Beach;