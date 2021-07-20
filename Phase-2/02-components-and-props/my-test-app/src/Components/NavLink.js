import React from 'react';


function NavLink( {linkName = "placeholder"} ){
    return (
        <h2 className="App-link">{linkName}</h2>
    )
};

export default NavLink