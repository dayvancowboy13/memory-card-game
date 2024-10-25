import { useEffect, useRef } from "react";
import { winGifs, loseGifs } from "../data"

export default function GameOverImgage({ outcome }) {
    const refImg = useRef(null)

    const apiKey = 'ulZf3B6FJ1EuL71iG33CtYZo3aElQkU5';
    let gifID;

    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    outcome === 'win' ?
        gifID = winGifs[getRandomIndex(winGifs)].gif_ID :
        gifID = loseGifs[getRandomIndex(loseGifs)].gif_ID;

    console.log(gifID);

    const giphyURL = `https://api.giphy.com/v1/gifs/${gifID}?api_key=${apiKey}`

    useEffect(() => {
        async function runFetch() {
            fetch(giphyURL,
                { mode: 'cors' })
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    console.log(response);
                    refImg.current.src = response.data.images.original.url;
                });
        }

        runFetch();
    });

    return (
        <div className="gif-container">
            <img ref={refImg} ></img>
        </div>
    )

}