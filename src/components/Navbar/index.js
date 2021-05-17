import React from 'react';

function Navbar(props) {
    return (
        <nav className="navbar">
            <a href="/">Welcome</a>
            <h2>Click an Image to begin!</h2>
            <div>
                Score: {props.total}
            </div>
            <div>
                Top Score: {props.topscore}
            </div>
        </nav>
    )
}

export default Navbar;