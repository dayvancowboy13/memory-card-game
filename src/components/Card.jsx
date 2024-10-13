import './style/Card.css';
import { useState } from 'react';

const log = console.log;

export default function Card({ id, imageURL, cardTitle, clicked, onClick }) {
    // const [clicked, setClicked] = useState(false)
    // const [bgColor, setBGColor] = useState('red')
    // console.log(imageURL);

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
                <h3>{id} {cardTitle}</h3>
            </button>
        </div >
    )
}