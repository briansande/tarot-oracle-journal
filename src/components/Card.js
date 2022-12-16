import React, { useState } from 'react';

function Card({ card }) {
    const [flipped, setFlipped] = useState(false);
    React.useEffect(() => { setFlipped(false) }, [card])
    const back_img = "assets/images/back_red.png"
    return (
        <div className='card'>
            <img src={flipped ? card["img"] : back_img} onClick={() => setFlipped(flipped => !flipped)} alt="card" width="100px" />
        </div>
    );
}

export default Card;