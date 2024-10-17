export default function DifficultySelector({ onClick }) {
    return (
        <>
            <ul className='difficulty-selector'>
                <h2>Choose your difficulty:</h2>
                <li className='difficulty list-item'>
                    <button
                        onClick={() => onClick("easy")}
                        className="easy-button">Easy</button>
                </li>
                <li className='difficulty list-item'>
                    <button
                        onClick={() => onClick("medium")}
                        className="medium-button">Medium</button>
                </li>
                <li className='difficulty list-item'>
                    <button
                        onClick={() => onClick("hard")}
                        className="hard-button">Hard</button>
                </li>
            </ul>
        </>
    )
}