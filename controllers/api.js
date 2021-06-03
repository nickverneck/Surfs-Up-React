const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/user");
module.exports = {
  async savefavorite(req, res) {
    try {
        console.log(req.body)
        console.log("im being accessed")
        res.send("beach has been added to favorites")
        
      const {
        userId,
        beachId,
        name,
        sendEmail,
        sendText,
        waveMin,
        waveMax,
        windSpeed,
        tempMin,
        tempMax,
      } = req.body;
      User.updateOne(
        { _id: userId },
        {
          $push: {
            favorites: [
              {
                id: beachId,
                name: name,
                sendEmail: sendEmail,
                sendText: sendText,
                waveMin: waveMin,
                waveMax: waveMax,
                windspeed: windSpeed,
                tempMin: tempMin, 
                tempMax: tempMax 
              },
            ],
          },
        }
      ).then((dbRes)=>{
        console.log(name)
        console.log(dbRes);
      }).catch((err)=>{console.log(err)})
    } catch (err) {
      throw err;
    }
  },
};
