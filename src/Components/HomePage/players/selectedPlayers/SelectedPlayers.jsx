import React from 'react';
import SelectedCard from '../../../ui/SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);

    return (
        <div className='space-y-6'>
            {
                selectedPlayers.length === 0
                    ? <div className='border text-center p-15 text-xl font-semibold space-y-3 rounded-lg'>
                        <h2 className='text-3xl font-bold'>No players selected yet</h2>
                        <p>Go to Available tab to select players</p>
                    </div>
                    : selectedPlayers.map((player, index) => {
                        return (
                            <div>
                                <SelectedCard
                                    key={index}
                                    player={player}
                                    selectedPlayers={selectedPlayers}
                                    setSelectedPlayers={setSelectedPlayers}
                                    coin={coin}
                                    setCoin={setCoin}
                                >
                                </SelectedCard>
                            </div>
                        )
                    })
            }
        </div>
    );
};

export default SelectedPlayers;