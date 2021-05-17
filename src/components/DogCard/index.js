import React from 'react';
import './style.css';

function DogCard(props) {
    return (
        <div className="card">
            <img alt={props.name} src={props.image} onClick={() => props.checkImage(props.id)} key={props.id}/>
        </div>
    )
}

export default DogCard;