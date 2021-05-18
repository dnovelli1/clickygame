import React from 'react';
import './style.css';
function Navbar(props) {
    return (
        <nav className="navbar">
            <h3 style={{fontWeight: 'bolder'}}>Clicky Doge</h3>
            <h2>{props.status}</h2>
            <div className="score">
                Score: {props.total}
                Top Score: {props.topscore}
            </div>
        </nav>
    )
}

export default Navbar;