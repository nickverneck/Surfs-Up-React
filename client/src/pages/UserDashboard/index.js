import React from "react";
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const UserDashboard = () => {
  // access to the currentUser property from the auth reducer state
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge"> User Dashboard </Header>

        <p>Welcome {user ? user.firstname + " " + user.lastname : ""}</p>
        <button className="btn btn-outline-dark">Edit Profile </button>
        <h1>Favorite Beaches</h1>
        <button className="btn btn-info">Add New Beach</button>
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

        <div className="m-5">
          <span className="beach-name m-1">New Smyrna</span>
          <div class="btn-group">
            <a href="#" class="btn btn-outline-dark" aria-current="page">
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
      </Message>
    </>
  );
};

export default UserDashboard;
