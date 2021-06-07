import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router";
export const AddFavorite = () => {
  const { currentUser, isAuthenticated } = useSelector(state => state.auth)
     const [beachData, setBeachData] = useState({});
     const [favoriteData, setfavoriteData] = useState({sendEmail:false,sendText:false,waveMin:0,waveMax:0,windSpeed:0, tempMin:0,tempMax:0});
     let {id} = useParams();
     useEffect(() => {
       
          getBeachData();
       
     }, []);
    // we need to make sure we are getting the right id & beach name 
      const  getBeachData = () => {
         axios.get("https://services.surfline.com/kbyg/spots/reports?spotId="+id)
           .then((res) => {
             setBeachData({...favoriteData,
             id:id,
             name: res.data.spot.name
             })
         console.log(beachData)
       })
    
           .catch((err) => {
             console.log(err);
           });
        }
        // notify
        // nce we click the button we gonna prevent the page from refreshing
        // then we gonna do a post method to /api/savefavorite with all the user settings

       const handleForm = (e)=>{
         e.preventDefault()
          console.log(favoriteData)
          console.log(currentUser._id)
          axios.post("/api/savefavorite",{
            userId:currentUser._id,
            beachId:beachData.id,
            name:beachData.name,
           windSpeed:favoriteData.windSpeed,
           waveMin:favoriteData.waveMin,
           waveMax:favoriteData.waveMax,
           tempMin:favoriteData.tempMin,
           tempMax:favoriteData.tempMax,
           sendEmail:favoriteData.sendEmail,
           sendText:favoriteData.sendText,



          }).then((res)=>{
            if (!("Notification" in window)) {
              console.log("This browser does not support desktop notification");
            } else {
              Notification.requestPermission();
            }
            new Notification(res.data)
           console.log(res)
          }).catch((err)=>{console.log(err)})
       }

    return(<div className="container">
        <form>
        <h3>{beachData.name}</h3>
        <h4>Settings</h4>
        {/* <input type="text"></input> */}

        <label for="customRange3" className="form-label"><h5>Wave Height(min,max): {favoriteData.waveMin} - {favoriteData.waveMax} FT</h5></label>
        <div className="col-3">
        <input type="range" className="form-range" min="0" max="100" step="1" id="wave-min" value="0" onChange={(e)=>{setfavoriteData({...favoriteData,waveMin:e.target.value})}}></input>
        <input type="range" className="form-range" min="0" max="100" step="1" id="wave-max" value="0" onChange={(e)=>{setfavoriteData({...favoriteData,waveMax:e.target.value})}}></input>
        </div>
        
        <label for="customRange3" className="form-label"><h5>Wind Speed(max): {favoriteData.windSpeed} Knots</h5></label>
        <div className="col-3">
        <input type="range" className="form-range" min="0" max="50" step="1" id="winds-speed" value="0" onChange={(e)=>{setfavoriteData({...favoriteData,windSpeed:e.target.value})}}></input>
        </div>
        
        <label for="customRange3" className="form-label"><h5>temperature(min,max): {favoriteData.tempMin} - {favoriteData.tempMax} °F</h5></label>
        <div className="col-3">
        <input type="range" className="form-range" min="0" max="110" step="1" id="temp-min" value="0" onChange={(e)=>{setfavoriteData({...favoriteData,tempMin:e.target.value})}}></input>
        <input type="range" className="form-range" min="0" max="110" step="1" id="temp-max" value="0" onChange={(e)=>{setfavoriteData({...favoriteData,tempMax:e.target.value})}}></input>
        </div>
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={(e)=>{setfavoriteData({...favoriteData,sendEmail:e.target.checked})}} id="email-alert"/>
  <label class="form-check-label" for="email-alert">Activate Email Alert</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={(e)=>{setfavoriteData({...favoriteData,sendText:e.target.checked})}} id="text-alert"/>
  <label class="form-check-label"  for="text-alert">Activate Text Alert</label>
</div>
        <button onClick={(e)=>{handleForm(e)}} className="btn btn-outline-dark">Save</button>
        </form>
    </div>)
}

export default AddFavorite;