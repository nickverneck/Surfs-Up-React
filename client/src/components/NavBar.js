import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export const NavBar = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    // helper to show links on Navbar if user is authenticated
    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <Link to="/dashboard" className="item">{currentUser.email}</Link>
                    <Logout />
                </>
            )
        } else {
            return (
                <>
                    <Link to="/login" className="item">Login</Link>
                    <Link to="/register" className="item">Register</Link>
                </>
            )
        }

    }

    return (
        <div className="ui  menu">
            <h1 className="logo">Surf's UP</h1>
            <Link to="/" className="item">Home</Link>
            {isAuthenticated ? <Link to="/pageone" className="item">Page One</Link> : ""}
            <div className="right menu">
            <input classname="btn btn-warning"/>
                {showLinks()}
            </div>
        </div>
    )
}

export default NavBar;
