import React from 'react';
import './style.css';

function DogCard(props) {
    return (
        <div className="card">
            <img className="content" style={ {height: 150, marginTop: 5 }}alt={props.name} src={props.image} onClick={() => props.checkImage(props.id)} key={props.id}/>
        </div>
    )
}

export default DogCard;