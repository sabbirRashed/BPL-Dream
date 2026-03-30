import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from "react-icons/fa6";

const Card = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {

    const { playerName, playerCountry, battingStyle, bowlingStyle, price, playerType, playerImage } = player;
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {
        if (coin <= price) {
            alert("You do not have suffecient ballence for this player");
            return;
        }
        const availableCoin = coin - price;
        alert(`${playerName} is selected`)
        setIsSelected(true);
        setCoin(availableCoin);
        setSelectedPlayers([...selectedPlayers, player]);
        console.log(selectedPlayers)
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
                        onClick={handleChoosePlayer}
                    >
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;