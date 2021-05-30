import React, { useEffect, useState } from "react";
import Spots from "../../components/Spots";
import Beach from "../../components/Beach";
import Forecast from "../../components/Forecast";
import axios from "axios";
import Moment from "react-moment";
Moment.globalFormat = "D MMM";
export const Home = () => {
    const [userLocation, setUserLocation] = useState({});
    const [beachID, setBeachID] = useState();
    const [nearbySpots, setnearbySpot]= useState([]);
  const [beachData, setBeachData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  // gonna grab all the Api Calls and change their userState
  useEffect(() => {
    // getBeachData();
    // getForecastData();
    getUserLocation();
  }, []);
//   make sure get closebeach only run if userlocation has changed
  useEffect(()=>{
      getClosestBeach();
  },[userLocation])
// //   make sure nearby spots run only after it got an beachID from getclosestBeach()
  useEffect(()=>{
   getNearbySpots()
  },[beachID])
// ----- Does an API request that returns current live Beach data --------------//

  const getBeachData = () => {
    axios
      .get(
        "https://services.surfline.com/kbyg/spots/reports?spotId=584204214e65fad6a7709d2b"
      )
      .then((res) => {
        setBeachData({
          ...beachData,
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
        "https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=584204214e65fad6a7709d2b"
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
// ---- this function will grab users location and save as useState to display the closest or closeby beaches 
const getUserLocation = ()=>{
axios.get("https://services.surfline.com/geo-target/region").then((res)=>{
setUserLocation({
    lat: res.data.location.latitude,
    lon:res.data.location.longitude,
    city:res.data.city.name
})

}).catch((err)=> console.log(err))
}
// this one will use userLocation usestate lat and long cordinates to find the users closest beach
// the cordinates are super accurate but the api doesnt return a good match
// there is no fix since the problem is on their api but atleast we get a beach id that we can use to find all closeby beaches
const getClosestBeach = ()=> {
    axios.get(`https://services.surfline.com/kbyg/mapview/spot?lat=${userLocation.lat}&lon=${userLocation.lon}`).then((res)=>{
    setBeachID(res.data.spot._id)
    console.log(userLocation)
   }).catch((err)=> console.log(err))
}

// now here is then function that will help us populate the home. it will grab the beachID and do an api call to grab all nearby beaches
// this api call will literally give us all information we need for each beach which we can send as props to a component and build a layout
// with most relevant data from each beach, right now is limited to 4 entries but can be increased to more depending how the layout looks
const getNearbySpots = ()=>{
axios.get(`https://services.surfline.com/kbyg/spots/nearby?spotId=${beachID}`).then((res)=>{
let spots = []
for (let i = 0; i < 5; i ++) {
    spots.push(res.data.data.spots[i]);
  } 
  setnearbySpot(spots)
}).catch((err)=> console.log(err))
}
  return (
    <div className="container">
      <div className="row">
      <Spots {... nearbySpots}/>
      </div>
      
    </div>
  );
};

export default Home;
