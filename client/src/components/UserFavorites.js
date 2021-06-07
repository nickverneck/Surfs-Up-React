import React from 'react';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const UserFavorites = (props) => {
    const  favoritesData = Object.values(props)
return (
    favoritesData.map((data) => (
    <div className="m-1 card">
          <a href={"/beach/"+data.id} style={{textDecoration:'none', color:'black'}}><span className="beach-name m-1" style={{ fontSize:23}}>{data.name}</span></a>
          <div className="btn-group">
            <a href="#" className="btn btn-outline-dark active" aria-current="page">
            <FontAwesomeIcon icon="bell" />
            </a>
            <a href="#" className="btn btn-outline-dark">
            <FontAwesomeIcon icon="cogs" />
            </a>
            <a href="#" className="btn btn-outline-dark">
            <FontAwesomeIcon icon="minus" />
            </a>
          </div>
        </div>
))
    )
}
export default UserFavorites;
 