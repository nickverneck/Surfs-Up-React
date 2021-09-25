const axios = require("axios")

module.exports = {
    async closestBeach(req,res){
        try{
          console.log(req.query.lat)
         await axios.get(`https://services.surfline.com/kbyg/mapview/spot?lat=${req.query.lat}&lon=${req.query.lon}`).then((resp)=>{
             console.log(resp)
             res.send(resp.data)
         }).catch((err)=>{console.log(err)});
         

        }
        catch(e){
            console.log(e);
        }
    }
}