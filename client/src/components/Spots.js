import React from 'react';

export const Spots = (props) => {
    const  spotData = Object.values(props)
    return (
      
        spotData.map((data) => (
             
            <div className="col-4">
                
          <div className="card m-2">
          <img src={data.thumbnail} altclass="card-img-top" style={{width: '100%', height: 300}}alt="..."/>
            <div className="card-body">
              <h3 className="card-title">
                {data.name}<a href={'/beach/'+data._id} className="btn btn-info m-2">Surf Report</a>
              </h3>
              
              <span className="badge rounded-pill bg-info text-dark m-2"> {Math.floor(data.waveHeight.min) +
                  "-" +
                  Math.ceil(data.waveHeight.max) +
                  "ft "}</span>
                  <span className="badge rounded-pill bg-light text-dark m-2">{ data.tide.next.type+ ' TIDE'} </span>
              <span className="badge rounded-pill bg-light text-dark m-2">{data.waterTemp.min}ºf <img src={'https://wa.cdn-surfline.com/quiver/0.18.2/weathericons/'+data.weather.condition+'.svg'} alt="weather icon" /></span>
              <span className="badge rounded-pill bg-light text-dark m-2">{data.weather.temperature}ºf <img src="https://wa.cdn-surfline.com/quiver/0.18.2/weathericons/WATER_ICON.svg" alt="Water Temp"/></span>
             
              
            </div>
          </div>
         
        </div>
      ))
        
    )
   
}
export default Spots;