import { useState } from 'react';
import { characters } from '../data';
import Card from './Card';
import './style/GameBoard.css'
import GameOverImage from './GameOverImage';

const log = console.log;
const difficultyParameters = {
    'easy': 5,
    'medium': 8,
    'hard': 12
};
const shuffleDeck = function (deck) {

    log('shuffling deck')

    let i = deck.length;
    let j = 0;
    let temp;

    while (i--) {
        j = Math.floor(Math.random() * i);

        temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;

    }

    return deck;
}

const loadDeck = function (numberOfCards) {
    log(`Pulling ${numberOfCards} cards into the deck`)

    let indexArray = []
    for (let k = 0; k < characters.length; k++) {
        indexArray.push(k);
    }

    let i = characters.length;
    let j = 0;
    let temp;

    while (i--) {
        j = Math.floor(Math.random() * i);

        temp = indexArray[i];
        indexArray[i] = indexArray[j];
        indexArray[j] = temp;
    }

    return indexArray.slice(0, numberOfCards);
}

export default function GameBoard({
    difficulty, onClick, setHighScore, highScore, score, setScore }) {
    // deck is an array of the shuffled "cards"
    const [deck, setDeck] = useState(loadDeck(difficultyParameters[difficulty]));
    // an array of the indeces of cards which have been clicked
    const [clickedCards, setClickedCards] = useState([]);
    const [showEndScreen, setShowEndScreen] = useState(false);

    function EndScreen({ outcome }) {
        return (
            <div className={`${outcome}-screen`}>

                <h2 className='end-message'>You {`${outcome}`}!</h2>
                <GameOverImage outcome={outcome} />
                <button
                    className='play-again'
                    onClick={() => {
                        log('play again -- resetting game')
                        setHighScore(score)
                        setScore(0);
                        setClickedCards(Array(characters.length).fill(false, 0))
                        setDeck(shuffleDeck(deck));
                        setShowEndScreen(false);
                        onClick(null);
                    }}>
                    Play Again</button>

            </div>
        )
    }


    function checkClickedCard(id) {

        if (clickedCards.includes(id)) {
            log('already clicked that card; resetting')
            score > highScore ?
                setHighScore(score)
                : null
            setScore(0);
            log('should bring up lose screen');
            setShowEndScreen(true);
        } else {
            setDeck(shuffleDeck(deck));
            setScore(() => score + 1);
            const newClickedCards = [...clickedCards]
            newClickedCards.push(id);
            setClickedCards(newClickedCards);
        }
    }

    function allCardsClicked() {
        if (clickedCards.length === difficultyParameters[difficulty]) return true;
        else return false;
    }

    if (allCardsClicked()) {
        log("You win!!")
        return (
            <EndScreen outcome={'win'} />
        )
    }

    return (
        <>
            {showEndScreen ? (
                <EndScreen outcome={'lose'} />
            ) : (
                <div className={`board ${difficulty}`}>
                    {deck.map((index) => {
                        return (
                            <>
                                <Card
                                    key={characters[index].id}
                                    id={index}
                                    imageURL={characters[index].url}
                                    cardTitle={characters[index].name}
                                    clicked={clickedCards.includes(index)}
                                    onClick={(cardId) => { checkClickedCard(cardId); }
                                    } />
                            </>)

                    })}
                </div>)}
        </>)
}

