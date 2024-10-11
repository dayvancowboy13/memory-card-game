import './style/Card.css';
import { useState } from 'react';

const log = console.log;

export default function Card({ imageURL, cardTitle, onClick }) {
    const [clicked, setClicked] = useState(false)
    // console.log(imageURL);

    function handleClick(e) {
        log(`${cardTitle} clicked`);
        log('shuffling cards');
        log('updating state');
        !clicked ?
            setClicked(true) : setClicked(false);
        log(clicked)
        onClick();
    }

    return (
        <div key={cardTitle} className="card"
            style={clicked ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
            }>
            <button
                onClick={e => handleClick(e)}>
                <img src={imageURL} />
                <h3>{cardTitle}</h3>
            </button>
        </div >
    )
}