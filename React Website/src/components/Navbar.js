import React from "react";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export const Nav = styled.nav`
    background: none;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    position: sticky; 
    top: 0;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavMenu>
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
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;