import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="cardDiv">
            <div className="titleDiv">
                {props.title}
            </div>
            <div className="contentDiv">
                {props.children}
            </div>
        </div>
    )
}