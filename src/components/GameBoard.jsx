import Card from './Card';
import { characters } from '../data';
import './style/GameBoard.css'

export default function GameBoard() {
    return (
        <div className='board'>
            {characters.map((key) => {
                // console.log(key.url);
                return (
                    <>
                        <Card
                            key={key.name}
                            imageURL={key.url}
                            cardTitle={key.name} />
                    </>)

            })}
        </div>
    )
}