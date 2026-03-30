import React from 'react';
import Card from '../../../ui/Card';


const AvailablePlayers = ({ playersData, coin, setCoin,selectedPlayers, setSelectedPlayers }) => {

    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 pb-20 mx-auto'>

            {
                playersData.map((player, index) => {
                   return <Card
                        key={index}
                        player={player}
                        coin={coin}
                        setCoin={setCoin}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    >
                    </Card>
                })
            }

        </div>

    );
};

export default AvailablePlayers;