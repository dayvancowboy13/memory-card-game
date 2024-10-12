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

    return (randomizedNumbers);
}

export default function GameBoard() {
    // deck is an array of the shuffled "cards"

    const [deck, setDeck] = useState(shuffleDeck);
    const [clickedCards, setClickedCards] = useState(Array(characters.length).fill(false, 0))
    const [count, setCount] = useState(0);


    log(clickedCards)

    log(count);
    log(deck);

    return (
        <div className='board'>
            {deck.map((index) => {
                // console.log(key.url);
                return (
                    <>
                        <Card
                            id={index}
                            key={characters[index].name}
                            imageURL={characters[index].url}
                            cardTitle={characters[index].name}
                            clicked={clickedCards[index]}
                            onClick={(cardId) => {
                                setDeck(shuffleDeck);
                                setCount(() => count + 1);
                                setClickedCards(...clickedCards[cardId] = true);
                            }
                            } />
                    </>)

            })}
        </div>
    )
} ``