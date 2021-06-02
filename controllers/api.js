const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/user");
module.exports = {
  async  savefavorite(req, res) {
try{
    const { user_id,beach_id, name, sendEmail, sendText, waveHeightMin, WaveHeightMax,windSpeed,tempMin,tempMax } = req.body;
    User.update(
        {"id" : user_id},
        {$set: { "id" : beach_id,
        "name":name,
        "sendEmail":sendEmail,
        "sendText":sendText,
        "waveHeight.min":waveHeightMin,
        "waveheight.max":WaveHeightMax,
        "windspeed":windSpeed,
        "temp.min":tempMin,
        "temp.max":tempMax}});
}  
catch(err) {
    throw err;
}
}

}