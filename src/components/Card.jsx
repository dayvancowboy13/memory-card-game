import './style/Card.css';
// import { useState } from 'react';

const log = console.log;

export default function Card({ id, imageURL, cardTitle, clicked, onClick }) {


    function handleClick() {
        log(`${cardTitle} clicked`);
        log('shuffling cards and updating states');

        onClick(id);
    }

    return (
        <div key={cardTitle} className="card"
            style={clicked ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
        >
            <button
                onClick={handleClick}>
                <img src={imageURL} />
                <h2>{id} {cardTitle}</h2>
            </button>
        </div >
    )
}