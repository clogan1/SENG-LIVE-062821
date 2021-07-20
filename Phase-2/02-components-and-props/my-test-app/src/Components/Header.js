import React from 'react';


function Header({ header, subheader, location}){
    return (
        <header className="App-header">
            <h1>{header}</h1>
            <h3>{subheader}</h3>
            <h5>{location}</h5>
        </header>
    )
};

export default Header