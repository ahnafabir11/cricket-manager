import React from 'react';
import './Teamplayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Teamplayer({player, removeTeamplayer}) {
  const { name, imgUrl, role, country, salary } = player;
  return (
    <div className="Teamplayer">
      <div className="player_info">
        <img
          src={imgUrl}
          alt={name}
          className="rounded-circle"
        />
        <h5>{name}</h5>
      </div>

      <div className="bg-dark text-white d-flex justify-content-between align-items-center p-2">
        <div className="player_short_details">
          <h6 className="mb-0">{country}</h6>
          <p className="mb-0"><small>{role}</small></p>
        </div>
        <h4>${salary}</h4>
        <button className="btn btn-danger" onClick={()=> removeTeamplayer(player)}>
          <FontAwesomeIcon icon={faDollarSign} />
        </button>
      </div>
    </div>
  )
}

export default Teamplayer;
