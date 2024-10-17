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
        <>
            <button key={id} className="card"
                style={clicked ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
                onClick={handleClick}>

                <img className='card-image' src={imageURL} />
                <h2>{id} {cardTitle}</h2>
            </button >
        </>
    )
}