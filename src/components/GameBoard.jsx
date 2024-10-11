import { useState } from 'react';
import Card from './Card';
import { characters } from '../data';
import './style/GameBoard.css'

const log = console.log;
const shuffleDeck = function () {

    log('shuffling deck')
    let randomizedNumbers = [];
    let tempArray = [];

    for (let i = 0; i < characters.length; i++) {
        tempArray.push(i);
    }

    randomizedNumbers = tempArray.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

    log(randomizedNumbers);
    return (randomizedNumbers);
    //setDeck(randomizedNumbers);
}

export default function GameBoard() {
    // deck is an array of the shuffled "cards"

    const [deck, setDeck] = useState(shuffleDeck());



    // put the card ids into a state
    // shuffle those
    // use that array to place the cards on the board

    return (
        <div className='board'>
            {deck.map((index) => {
                // console.log(key.url);
                return (
                    <>
                        <Card
                            key={characters[index].name}
                            imageURL={characters[index].url}
                            cardTitle={characters[index].name}
                            onClick={() =>
                                setDeck(shuffleDeck)
                            } />
                    </>)

            })}
        </div>
    )
} ``