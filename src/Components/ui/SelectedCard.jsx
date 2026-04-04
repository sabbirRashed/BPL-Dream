import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers}) => {

    const handleSelectedPlayers = (player) => {
        console.log(player);
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);
        console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers)
        setCoin(coin + player.price)
    }

    return (
        <div
            className='flex justify-between items-center border rounded-xl p-5'>
            <div className='flex items-center gap-6'>
                <img className='h-15 w-20 rounded-xl' src={player.playerImage} alt="" />
                <div className='font-semibold space-y-2'>
                    <h2 className='text-base md:text-xl font-bold flex items-center gap-2'><FaUser></FaUser> {player.playerName}</h2>
                    <p className='text-sm md:text-base'>{player.playerType}</p>
                </div>
            </div>

            <button
                onClick={() => { handleSelectedPlayers(player) }} className='btn text-xl md:text-2xl text-red-500'>
                <MdDelete></MdDelete>
            </button>
        </div>
    );
};

export default SelectedCard;