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
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function checkClickedCard(id) {
        if (!clickedCards[id]) {
            setDeck(shuffleDeck);
            setScore(() => score + 1);
            setClickedCards(...clickedCards[id] = true);
        } else {
            log('already clicked that card; resetting')
            score > highScore ?
                setHighScore(score)
                : null
            setScore(0);

            // reset clicked
            setClickedCards(Array(characters.length).fill(false, 0))
        }
    }

    // log(count);
    // log(deck);

    return (
        <>
            <div className='scores'>
                <h2>Current Score: {score}</h2>
                <h2>High Score: {highScore}</h2>
            </div>
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
                                    checkClickedCard(cardId);

                                }
                                } />
                        </>)

                })}
            </div>
        </>)
}