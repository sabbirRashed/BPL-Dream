import React from 'react';
import Card from '../../../ui/Card';


const AvailablePlayers = ({ playersData }) => {

    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 pb-20 mx-auto'>

            {
                playersData.map((player, index) => <Card key={index} player={player}></Card>)
            }

        </div>

    );
};

export default AvailablePlayers;