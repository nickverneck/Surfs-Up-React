import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import SearchForm from "./SearchForm";
export const NavBar = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    // helper to show links on Navbar if user is authenticated
    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <Link to="/dashboard" className="btn btn-outline-dark">{currentUser.email}</Link>
                    <Logout />
                </>
            )
        } else {
            return (
                <>
                    <Link to="/login" className="btn btn-outline-dark m-1">Login</Link>
                    <Link to="/register" className="btn btn-info">Register</Link>
                </>
            )
        }

    }

    return (
        <div className="p-3 ">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none">
        <h1 className="logo">Surf's UP</h1>  
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="item">Home</Link></li>
          
         
        </ul>

       <SearchForm/>

        <div className="text-end">
        {showLinks()}
         
        </div>
      </div>
    </div>
  </div>




     
    )
}

export default NavBar;
