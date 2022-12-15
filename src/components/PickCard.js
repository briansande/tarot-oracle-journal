import jsonCards from '../data/cards.json';
import React, { useState } from 'react';
import Card from './Card';


function PickCard() {
    const cards = jsonCards["Cards"];

    const [card, setCard] = React.useState([]);


    // function to pick a random card and return the card object
    function pickCard() {
        // pick a random card
        const cardID = Math.floor(Math.random() * 52);
        // return the card object
        // console.log(cards[cardID]);
        setCard(cards[cardID]);
    }

    return (
        <div>
            <p>Card Component</p>
            <button onClick={pickCard}>Pick a Card</button>
            <Card card={card} />
        </div>
    );
}

export default PickCard;