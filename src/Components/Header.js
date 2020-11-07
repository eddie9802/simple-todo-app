import React from 'react';

function Header() {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    }
    return(
        <header style={headerStyle}>
        <h1 style={{fontSize: "19px", marginBottom: "15px"}}>Simple to do app</h1>
        <p style={{fontSize: "19px"}}>Please add what ever to-do items you want</p>
        </header>
    );
}
export default Header;