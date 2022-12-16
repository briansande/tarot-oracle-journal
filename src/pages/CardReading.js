import React, { useState } from 'react';
import PickCard from '../components/PickCard';
import GetNCards from '../components/GetNCards';
import CardContainer from '../components/CardContainer';





function CardReading() {
    const [numCards, setNumCards] = useState(0);
    // React.useEffect(() => { setNumCards(numCards) }, [numCards])

    return (
        <div>
            <div>
                <p>Card Reading</p>
                <p>Number of cards {numCards}</p>

                <button onClick={() => setNumCards(1)}>One Card</button>
                <button onClick={() => setNumCards(3)}>Three Card</button>
                <button onClick={() => setNumCards(5)}>Five Card</button>
            </div>

            <div>
                {/* show numCards Card components */}
                {/* <PickCard /> */}
                <CardContainer n={numCards} />

                <button onClick={() => setNumCards(0)}>Reset</button>



            </div>



        </div>
    );
}

export default CardReading;