import React from 'react';
import './style.css';
function Navbar(props) {
    return (
        <nav className="navbar">
            <h3 style={{fontWeight: 'bolder'}}>Clicky Doge</h3>
            <h2>{props.status}</h2>
            <div className="score">
                <h3>Score: {props.total}</h3>
                <h3>Top Score: {props.topscore}</h3>
            </div>
        </nav>
    )
}

export default Navbar;