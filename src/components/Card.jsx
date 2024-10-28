import './style/Card.css';

const log = console.log;

export default function Card({ id, imageURL, cardTitle, onClick }) {


    function handleClick() {
        log(`${cardTitle} clicked`);
        log('shuffling cards and updating states');

        onClick(id);
    }

    return (
        <>
            <button key={id} className="card"
                onClick={handleClick}>

                <img className='card-image' src={imageURL} />
                <div className="card-text">
                    <h2>{cardTitle}</h2>
                </div>
            </button >
        </>
    )
}