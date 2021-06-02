import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
export const AddFavorite = () => {
     const [beachData, setBeachData] = useState({});
     const [favoriteData, setfavoriteData] = useState({waveMin:0,waveMax:0,windSpeed:0, tempMin:0,tempMax:0});
     let {id} = useParams();
     useEffect(() => {
       
        //  getBeachData();
       
     }, []);
    
      const  getBeachData = () => {
         axios.get("https://services.surfline.com/kbyg/spots/reports?spotId="+id)
           .then((res) => {
             setBeachData({
             id:id,
             name: res.data.spot.name
             })
         console.log(beachData)
       })
    
           .catch((err) => {
             console.log(err);
           });
        }
       

    return(<div className="container">
        <form>
        <h3>{beachData.name}</h3>
        <h4>Settings</h4>
        {/* <input type="text"></input> */}

        <label for="customRange3" className="form-label"><h5>Wave Height(min,max):</h5><span>{favoriteData.waveMin} - {favoriteData.waveMax} FT</span></label>
        <div className="col-3">
        <input type="range" className="form-range" min="0" max="100" step="1" id="wave-min" onChange={(e)=>{setfavoriteData({...favoriteData,waveMin:e.target.value})}}></input>
        <input type="range" className="form-range" min="0" max="100" step="1" id="wave-max" onChange={(e)=>{setfavoriteData({...favoriteData,waveMax:e.target.value})}}></input>
        </div>
        
        <label for="customRange3" className="form-label"><h5>Wind Speed(max): {favoriteData.windSpeed} Knots</h5></label>
        <div className="col-3">
        <input type="range" className="form-range" min="0" max="50" step="1" id="winds-speed" onChange={(e)=>{setfavoriteData({...favoriteData,windSpeed:e.target.value})}}></input>
        </div>
        
        <label for="customRange3" className="form-label"><h5>temperature(min,max): {favoriteData.tempMin} - {favoriteData.tempMax} °F</h5></label>
        <div className="col-3">
        <input type="range" className="form-range" min="0" max="110" step="1" id="temp-min" onChange={(e)=>{setfavoriteData({...favoriteData,tempMin:e.target.value})}}></input>
        <input type="range" className="form-range" min="0" max="110" step="1" id="temp-max" onChange={(e)=>{setfavoriteData({...favoriteData,tempMax:e.target.value})}}></input>
        </div>
        <button type ="submit" className="btn btn-outline-dark">Save</button>
        </form>
    </div>)
}

export default AddFavorite;