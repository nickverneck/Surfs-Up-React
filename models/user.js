const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone:{
    type:String
   },
  password: {
    type: String,
    require: true,
  },
  favorites: [{
      id:String,
      name:String,
      sendEmail:Boolean,
      sendText:Boolean,
      windSpeed:Number,
      waveMin:Number,
      waveMax:Number,
      tempMin:Number,
      tempMax:Number
  }],
});

module.exports = User = mongoose.model("user", UserSchema);
