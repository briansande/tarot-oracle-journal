import React, { useState } from 'react';

function Card({ card }) {

    return (
        <div className='card'>
            <img src={card["img"]} alt="card" width="100px" />
        </div>
    );
}

export default Card;