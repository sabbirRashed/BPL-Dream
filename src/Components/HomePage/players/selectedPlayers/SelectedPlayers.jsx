import React from 'react';
import SelectedCard from '../../../ui/SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);

    return (
        <div className='space-y-6'>
            {
                selectedPlayers.length === 0
                    ? <div className='border text-center p-10 md:p-15 text-xl font-semibold space-y-3 rounded-lg'>
                        <h2 className='text-2xl md:text-3xl font-bold'>No players selected yet !</h2>
                        <p className='text-sm md:text-base'>Go to Available tab to select players</p>
                    </div>
                    : <div className='space-y-6'>
                        {
                            selectedPlayers.map((player, index) => {
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

                        <button className='btn py-6 rounded-xl text-white bg-[#1B4332]  hover:bg-[#EAB308] hover:text-white shadow-none border-none'>Add More Player</button>

                    </div>
            }
        </div>
    );
};

export default SelectedPlayers;