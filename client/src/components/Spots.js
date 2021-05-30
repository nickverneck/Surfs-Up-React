import React from 'react';

export const Spots = (props) => {
    const  spotData = Object.values(props)
    return (
      
        spotData.map((data) => (
      
            <div className="col">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">
                {data.name}
              </h5>
              <p className="card-text">
                {Math.floor(data.waveHeight.min) +
                  "-" +
                  Math.ceil(data.waveHeight.max) +
                  "ft"}
              </p>
            </div>
          </div>
        </div>
      ))
        
    )
   
}
export default Spots;