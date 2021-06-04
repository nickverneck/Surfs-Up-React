const nodemailer = require('nodemailer');
const cron = require('node-cron');
const User = require("../models/user");
// Alright this is the most important part of the whole app.
// first we gonna Start a scheduler that will check the report every 6hr*
//  once the amount of hours have passed we will get all users in the database
// we will check if they have any favorite beaches saved, if they dont we move on to the next user
// if they do we gonna we gonna loop through their favorite beaches forecast and check
// if forecastdata is inbetween user settings then we will check if they want to receive notificaiton by email or text or both
// then we will trigger the notifications to the user
//* now we don't know what will be the ideal ocurrency of checks so we might increase to 12 hours if it feels too spammy
//* we might also do a check to see if we sent a notifcation before and prevent us from doing notification from same day
module.exports = {
 async surfNotification() {
    cron.schedule('* * * * *',()=>{
        console.log("testing this task")
    })
    
},

// function to get all users in the database
async getAllUsers() {
    // return all users that have at least one favorites
   const users = await User.find({"favorites.0":{$exists:true}})
   console.log(users.length)
}
}