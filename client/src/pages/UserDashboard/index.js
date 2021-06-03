import React,{useState} from "react";
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import UserFavorites from "../../components/UserFavorites";
import Axios from "axios";
export const UserDashboard = () => {
  // access to the currentUser property from the auth reducer state
  const user = useSelector((state) => state.auth.currentUser);
  const [favoritesData, setFavoritesData] = useState({});
  const getFavorites = ()=>{
Axios.get(`/api/getfavorites/${user._id}`).then((res)=>{
setFavoritesData(res)
}).catch((err)=> console.log(err))
  }
  return (
    <>
      <Message className="message-container" size="huge" secondary="true">
        <Header size="huge"> User Dashboard </Header>

        <p>Welcome {user ? user.firstname + " " + user.lastname : ""}</p>
        <button className="btn btn-outline-dark">Edit Profile </button>
        <h1>Favorite Beaches</h1>
        
        <UserFavorites {...favoritesData}/>

        
      </Message>
    </>
  );
};

export default UserDashboard;
