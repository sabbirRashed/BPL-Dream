import React, { use, useState } from 'react';
import AvailablePlayers from './availablePlayers/AvailablePlayers';
import SelectedPlayers from './selectedPlayers/SelectedPlayers';

const Players = ({ playersPromise }) => {

    const playersData = use(playersPromise);
    const [selectedType, setSelectedType] = useState('available');

    return (
        <div>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='text-2xl font-bold'>
                    {selectedType === 'available' ? 'Available Players' : 'Selected Player (0/15)'}
                </h2>
                <div>
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
                        Selected (0)
                    </button>
                </div>
            </div>

            {
                selectedType === "available" ?
                    <AvailablePlayers playersData={playersData}></AvailablePlayers>
                    : <SelectedPlayers></SelectedPlayers>
            }
        </div>
    );
};

export default Players;