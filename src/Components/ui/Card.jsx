import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from "react-icons/fa6";
import { toast } from 'react-toastify';

const Card = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {

    const { playerName, playerCountry, battingStyle, bowlingStyle, price, playerType, playerImage } = player;
    const isSelected = selectedPlayers.find(selectedPlayer => selectedPlayer.playerName === player.playerName);
    console.log(isSelected);
    console.log(selectedPlayers)

    const handleChoosePlayer = (player) => {
        if (coin <= price) {
            toast.error(`Not enough coin to purches this player`);
            return;
        }
        const availableCoin = coin - price;
        toast.success(`${player.playerName} is selected`);
        setCoin(availableCoin);
        setSelectedPlayers([...selectedPlayers, player]);
       
    }
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src={playerImage}
                    alt="player" className='w-full h-50' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <FaUser></FaUser>
                    {playerName}
                </h2>

                <div className='flex justify-between items-center'>
                    <p className='flex gap-2 items-center'>
                        <FaFlag />
                        {playerCountry}
                    </p>
                    <button className='btn'>{playerType}</button>
                </div>

                <div className="divider m-0"></div>

                <h2 className='font-bold'>Rating</h2>
                <div className='flex justify-between items-center '>
                    <p className='font-semibold'>{battingStyle}</p>
                    <p className='text-end'>{bowlingStyle}</p>
                </div>

                <div className='flex justify-between items-center '>
                    <p className='font-semibold'>price: ${price}</p>
                    <button
                        className='btn'
                        disabled={isSelected}
                        onClick={()=>{handleChoosePlayer(player)}}
                    >
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;