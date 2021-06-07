import React,{useState,useEffect} from "react";
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import UserFavorites from "../../components/UserFavorites";
export const UserDashboard = () => {
  // access to the currentUser property from the auth reducer state
  const user = useSelector((state) => state.auth.currentUser);
 
  const  getFavorites = ()=>{
    
    if (user.favorites.length > 0)
    {
      return (
      <div className="card col-md-8 col-xs-12">
      <h1>Favorite Spots</h1>
     <UserFavorites {...user.favorites}/>
     </div>
      )
    }
  
  }
  const formatPhone=(entry)=> {

    const match = entry
    .replace(/\D+/g, '').replace(/^1/, '')
    .match(/([^\d]*\d[^\d]*){1,10}$/)[0]
  const part1 = match.length > 2 ? `(${match.substring(0,3)})` : match
  const part2 = match.length > 3 ? ` ${match.substring(3, 6)}` : ''
  const part3 = match.length > 6 ? `-${match.substring(6, 10)}` : ''    
  return `${part1}${part2}${part3}`
}
  return (
   
      <div className="container bg-light">
        <div className="p-5 m-2">
        <div class="row">
            <div class="col-md-4 col-xs-12">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="./images/avatar.jpg" alt="avatar" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>{user ? user.firstname + " " + user.lastname : ""}</h4>
                      <p class="text-secondary mb-1">{user.email}</p>
                      <p class="text-muted font-size-sm">{formatPhone(user.phone)}</p>
                      <button className="btn btn-outline-dark">Edit Profile </button>
                    </div>
                  </div>
                </div>
              </div>
              
              </div>
              {getFavorites()}
              </div>
        
        
        
        
        

        </div>
      </div>
    
  );
};

export default UserDashboard;
