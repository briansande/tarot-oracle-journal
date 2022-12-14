import jsonCards from '../data/cards.json';
import React, { useState } from 'react';


function Card() {
    const cards = jsonCards["Cards"];

    const [card, setCard] = React.useState([null]);


    // function to pick a random card and return the card object
    function pickCard() {
        // pick a random card
        const cardID = Math.floor(Math.random() * 52);
        // return the card object
        console.log(cards[cardID]);
        setCard(cards[cardID]);
    }

    return (
        <div>
            <p>Card Component</p>
            <button onClick={pickCard}>Pick a Card</button>
            <p>Card is {card["img"]}</p>
            <img src={card["img"]} alt="card" width="100px" />
            <p></p>
        </div>
    );
}

export default Card;