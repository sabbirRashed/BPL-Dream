import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from './selectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, coin, setCoin }) => {

    const playersData = use(playersPromise);
    const [selectedType, setSelectedType] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-8'>
                <h2 className='text-lg md:text-2xl font-bold'>
                    {selectedType === 'available' 
                    ? 'Available Players' : `Selected Player (${selectedPlayers.length}/${playersData.length})`}
                </h2>
                <div className='flex items-center'>
                    <button
                        onClick={() => { setSelectedType("available") }}
                        className={`btn text-[#346739] rounded-l-xl rounded-r-none px-6 
                        ${selectedType === 'available'
                                ? "bg-[#EAB308] text-white"
                                : ''
                            } `}>
                        Available
                    </button>
                    <button
                        onClick={() => { setSelectedType("selected") }}
                        className={`btn text-[#346739] rounded-l-none rounded-r-xl 
                        ${selectedType === 'selected'
                                ? "bg-[#EAB308] text-white"
                                : ""
                            }`}>
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {
                selectedType === "available" ?
                    <AvailablePlayers
                        playersData={playersData}
                        coin={coin}
                        setCoin={setCoin}
                        setSelectedPlayers={setSelectedPlayers}
                        selectedPlayers={selectedPlayers}
                    >
                    </AvailablePlayers>
                    : <SelectedPlayers
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                        coin={coin}
                        setCoin={setCoin}
                        setSelectedType={setSelectedType}
                    >
                    </SelectedPlayers>
            }
        </div>
    );
};

export default Players;