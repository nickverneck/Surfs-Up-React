const nodemailer = require("nodemailer");
const cron = require("node-cron");
const User = require("../models/user");
const axios = require("axios");
// Alright this is the most important part of the whole app.
// first we gonna Start a scheduler that will check the report every 6hr*
//  once the amount of hours have passed we will get all users in the database
// we will check if they have any favorite beaches saved, if they dont we move on to the next user
// if they do we gonna we gonna loop through their favorite beaches forecast and check
// if forecastdata is inbetween user settings then we will check if they want to receive notificaiton by email or text or both
// then we will trigger the notifications to the user
//* now we don't know what will be the ideal ocurrency of checks so we might increase to 12 hours if it feels too spammy
//* we might also do a check to see if we sent a notifcation before and prevent us from doing notification from same day



// checks if n1 and n3 are inbetween n2 and n4
const inbetween= (n1,n2,n3,n4)=>{
    if (Math.round(n1) >= n2 && Math.round(n3) <= n4)
    {
        return true;
    }
    else{
        return false;
    }
}
module.exports = {
  async surfNotification() {
    cron.schedule("* * * * *", () => {
      this.getAllUsers();
    });
  },

  // function to get all users in the database
  async getAllUsers() {
    try {
      // return all users that have at least one favorites
      const users = await User.find({ "favorites.0": { $exists: true } });
      //  loop through each user then loop through their favorites
      users.forEach(function (user) {
        user.favorites.forEach(async function (beach) {
          // get forecast from beach id and return results
          // the forecast is divided into 4 categories, wave,wind,weather and tide.
        
          const waveData = await axios.get(
            "https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=" +
              beach.id
          );
          const windData = await axios.get(
            "https://services.surfline.com/kbyg/spots/forecasts/wind?spotId=" +
              beach.id
          );
          const weatherData = await axios.get(
            "https://services.surfline.com/kbyg/spots/forecasts/weather?spotId=" +
              beach.id
          );
         
        //   console.log(waveData.data.data.wave[1].timestamp)
        //   each entry returns 144 hours so we gonna loop through them and check if any of them are inbetween users choices
        let options = [];
          for (let i = 0; i <= 1; i++){

            let surf = waveData.data.data.wave[i].surf
            let wind = windData.data.data.wind[i]
            let weather = weatherData.data.data.weather[i]
            let time =waveData.data.data.wave[i].timestamp
             console.log(wind.speed)
             console.log(beach)
             console.log(weather)
         let isSurf= inbetween(surf.min,beach.waveMin,surf.max,beach.waveMax)
         let isWind= inbetween(0,0,wind.speed,beach.windSpeed)
         let isWeather= inbetween(weather.temperature,beach.tempMin,weather.temperature,beach.tempMax)
          //  now we gonna add them to the options array to later send the notification but only if the conditions are good
         if (isSurf && isWind && isWeather)
             {
               options.push({time:time,waveMin:surf.min,waveMax:surf.max,windSpeed:wind.speed,weatherTemp:weather.temperature})
               

             }
          }
          // we looped through the forecast now we gonna check if our array has any entries if it does we continue, otherwise we move on
          if (options.length>0)
        {
          
          // call function to send email
          if (beach.sendEmail)
          {
            
          }
          // call function to send text
          if (beach.sendText)
          {

          }
        }
        });
      });
    } catch (err) {
      console.log(err);
    }
  },
  
};
