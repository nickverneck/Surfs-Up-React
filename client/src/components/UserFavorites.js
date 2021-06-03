import React from 'react';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const UserFavorites = (props) => {
return (
    <div className="m-5">
          <span className="beach-name m-1">Cocoa Beach</span>
          <div class="btn-group">
            <a href="#" class="btn btn-outline-dark active" aria-current="page">
            <FontAwesomeIcon icon="bell" />
            </a>
            <a href="#" class="btn btn-outline-dark">
            <FontAwesomeIcon icon="cogs" />
            </a>
            <a href="#" class="btn btn-outline-dark">
            <FontAwesomeIcon icon="minus" />
            </a>
          </div>
        </div>
)
}
export default UserFavorites;
 