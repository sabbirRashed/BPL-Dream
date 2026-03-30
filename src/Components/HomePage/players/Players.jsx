import React, { use } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';

const Players = ({ playersPromise }) => {

    const playersData = use(playersPromise);

    return (

        <div className='container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 pb-20 mx-auto'>

            {
                playersData.map((player, index) => <AvailablePlayers key={index} player={player}></AvailablePlayers>)
            }

        </div>
    );
};

export default Players;