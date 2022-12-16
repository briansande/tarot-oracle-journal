import React, { useState } from 'react';
import Card from './Card';
import jsonCards from '../data/cards.json';


function CardContainer({ n }) {
    const cards = jsonCards["PlayingCards"]["Cards"];
    let random_N_cards = cards.sort(() => .5 - Math.random()).slice(0, n)
    console.log(random_N_cards);

    return (
        <div className='card-container'>


            {random_N_cards.map((card, i) =>
                <Card key={i} card={card} />
            )
            }

        </div>

    );
}

export default CardContainer;