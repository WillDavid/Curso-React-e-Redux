import React from 'react';
import './Card.css';

export default function Card(props) {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }
    return (
        <div className="cardDiv" style={cardStyle}>
            <div className="titleDiv">
                {props.title}
            </div>
            <div className="contentDiv">
                {props.children}
            </div>
        </div>
    )
}