import React from "react";
import { NavLink } from 'react-router-dom';
import '../componentStyling/Navbar.css'


const Navbar = () => {
    return (
        <div className='nav'>
           <div className='nav-menu'>
                <div>
                <NavLink to="/cv" activeStyle>
                    Virtual CV
                </NavLink>
                </div>
                <div>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                </div>
                <div>
                <NavLink to="/projects" activeStyle>
                    Projects
                </NavLink>
                </div>
            </div> 
        </div> 
    );
};
export default Navbar;