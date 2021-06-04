import React,{useState} from "react";
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import UserFavorites from "../../components/UserFavorites";
export const UserDashboard = () => {
  // access to the currentUser property from the auth reducer state
  const user = useSelector((state) => state.auth.currentUser);
  // const [favoritesData, setFavoritesData] = useState({});
  const getFavorites = ()=>{
    if (user.favorites.length > 0 )
    {
      return (
      <div>
      <h1>Favorite Beaches</h1>
     <UserFavorites {...user.favorites}/>
     </div>
      )
    }
  }
  return (
    <>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge"> User Dashboard </Header>

        <p>Welcome {user ? user.firstname + " " + user.lastname : ""}</p>
        <button className="btn btn-outline-dark">Edit Profile </button>
        {getFavorites()}
        
        

        
      </Message>
    </>
  );
};

export default UserDashboard;
