import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showBtn = () => {
        if (isAuthenticated) {
            return (<div>
                <button className="btn btn-outline-dark">Add to Favorites</button>
                <button className="btn btn-outline-dark m-1">Get Location</button>
                </div>
            )
        }
    }

    return (
        <div className="container">
            <div class="card">
  <div class="card-header">
  <h1 className="beach-name">Cocoa Beach</h1> {showBtn()}
  </div>
  <div class="card-body">
  <h3 className="wave-height">Wave Height: 1-2 FT</h3>
        <h3 className="wind-speed">Wind Speed: 7 Knots</h3>
        <h3 className="water-temp">water Temperature: 67 F</h3>
        <div class="alert alert-info" role="alert"><h2 className="surf-cond">Surf Condition: Knee to tight high</h2></div>  
  </div>
</div>
        
         

        </div>
    )
};

export default Home;
