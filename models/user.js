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
  password: {
    type: String,
    require: true,
  },
  favorites: [{
      id:String,
      name:String,
      sendEmail:Boolean,
      sendText:Boolean,
      waveHeight:[{
       min:Number,
       max:Number,
      }],
      windSpeed:Number,
      temperature:[{
          min:Number,
          max:Number
      }]
  }],
});

module.exports = User = mongoose.model("user", UserSchema);
