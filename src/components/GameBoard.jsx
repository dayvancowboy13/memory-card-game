import { useState } from 'react';
import { characters } from '../data';
import Card from './Card';
import './style/GameBoard.css'
import GameOverImage from './GameOverImage';

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

export default function GameBoard({
    difficulty, onClick, setHighScore, highScore, score, setScore }) {
    // deck is an array of the shuffled "cards"
    const [deck, setDeck] = useState(shuffleDeck);
    const [clickedCards, setClickedCards] = useState(Array(characters.length).fill(false, 0));
    const [showEndScreen, setShowEndScreen] = useState(false);

    function EndScreen({ outcome }) {
        return (
            <div className={`${outcome}-screen`}>

                <h2>You {`${outcome}`}!</h2>
                <GameOverImage outcome={outcome} />
                <button
                    onClick={() => {
                        log('play again -- resetting game')
                        setHighScore(score)
                        setScore(0);
                        setClickedCards(Array(characters.length).fill(false, 0))
                        setDeck(shuffleDeck);
                        setShowEndScreen(false);
                        onClick(null);
                    }}>
                    Play Again</button>

            </div>
        )
    }


    function checkClickedCard(id) {
        if (!clickedCards[id]) {
            setDeck(shuffleDeck);
            setScore(() => score + 1);
            const newClickedCards = [...clickedCards]
            newClickedCards[id] = true;
            setClickedCards(newClickedCards);
        } else {
            log('already clicked that card; resetting')
            score > highScore ?
                setHighScore(score)
                : null
            setScore(0);
            log('should bring up lose screen');
            setShowEndScreen(true);
        }
    }

    function allCardsClicked() {
        for (let i = 0; i < clickedCards.length; i++) {
            if (!clickedCards[i]) return false
        }
        return true;
    }

    if (allCardsClicked()) {
        log("You win!!")
        return (
            <EndScreen outcome={'win'} />
        )
    }

    log(`${difficulty} was selected for the difficulty,\nwe'll do something with that later`)



    return (
        <>
            {showEndScreen ? (
                <EndScreen outcome={'lose'} />
            ) : (
                <div className='board'>
                    {deck.map((index) => {
                        return (
                            <>
                                <Card
                                    key={characters[index].id}
                                    id={index}
                                    imageURL={characters[index].url}
                                    cardTitle={characters[index].name}
                                    clicked={clickedCards[index]}
                                    onClick={(cardId) => { checkClickedCard(cardId); }
                                    } />
                            </>)

                    })}
                </div>)}
        </>)
}

