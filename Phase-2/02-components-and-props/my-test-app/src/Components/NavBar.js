import React from 'react';
import NavLink from './NavLink'


function NavBar({ isLoggedIn }){
    //console.log({isLoggedIn})
    return (
        <aside>
            {isLoggedIn ? <p>Logged In</p> : <p>Logged Out</p> }
            {/* <p>{ isLoggedIn ? "Logged In" : "Logged Out" }</p> */}
            <NavLink linkName="Home"/>
            <NavLink linkName="About" />
            <NavLink linkName="Products" />
            <NavLink linkName="Contact" />
        </aside> 
    )
};

export default NavBar