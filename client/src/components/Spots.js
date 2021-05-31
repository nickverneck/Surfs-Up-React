import React from 'react';

export const Spots = (props) => {
    const  spotData = Object.values(props)
    return (
      
        spotData.map((data) => (
             
            <div className="col-6">
                <a href={'/beach/'+data._id}>
          <div className="card m-2">
            <div className="card-body">
              <h3 className="card-title">
                {data.name}
              </h3>
              <p className="card-text">
                {Math.floor(data.waveHeight.min) +
                  "-" +
                  Math.ceil(data.waveHeight.max) +
                  "ft"}
              </p>
              <p>{data.weather.temperature}ºf <img src="https://wa.cdn-surfline.com/quiver/0.18.2/weathericons/WATER_ICON.svg" alt="Water Temp"/></p>
              <p>{data.waterTemp.min}ºf <img src={'https://wa.cdn-surfline.com/quiver/0.18.2/weathericons/'+data.weather.condition+'.svg'} alt="weather icon" /></p>
              
            </div>
          </div>
          </a>
        </div>
      ))
        
    )
   
}
export default Spots;