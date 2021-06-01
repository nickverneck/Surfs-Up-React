const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeachSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    SendEmail: {
        type: Boolean,
        require: false
    },
    SendText: {
        type: Boolean,
        require: false
    },
    waveHeight_min: {
        type:Number,
        require:false,
    },
    waveHeight_max: {
        type:Number,
        require:false,
    },
    waveHeight_min: {
        type:Number,
        require:false,
    },
    windSpeed: {
        type:Number,
        require:false,
    },
    temperature_min:{
        type:Number
    },
    temperature_max:{
        type:Number
    },
});

module.exports = Beach = mongoose.model("beach", BeachSchema);