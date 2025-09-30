import React from 'react';
import "../styles/Header.css"

function Header() {
    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return (<div >
        <h1 className='header'>To-Do List</h1>
        <h2 className='currentDate'>{formattedDate}</h2>
    </div>);
}

export default Header;