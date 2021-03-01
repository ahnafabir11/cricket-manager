import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import Teamplayer from './components/TeamPlayer/Teamplayer';
import PlayersData from './PlayerData/playerdata.json';

function App() {
  const [playerData, setPlayerData] = useState([]);
  const [team, setTeam] = useState([]);
  const budget = team.reduce( (sum, player)=> sum + player.salary, 0);

  useEffect(() => {
    setPlayerData(PlayersData);
  }, []);

  const addPlayer = (player)=> {
    const isExist = team.find((teammate) => teammate === player);
    if(isExist === undefined){
      setTeam([...team, player]);
    }else{
      alert('Player Already Selected');
    }

  }
  
  const removeTeamplayer = (player) => {
    const newTeam = team.filter((teammate) => teammate !== player);
     setTeam(newTeam);
  }
  
  return (
    <div className="App">
      <Header />
      <main className="container-fluid">
        <div className="row flex-md-row-reverse">
          <div className="col-md-3 myteam-list">
            <h4 className="text-center">Your Dream Team</h4>
            <h6 className="text-center text-info">Player Selected : {team.length}</h6>
            <h5 className="text-center text-success">Team Budget : ${budget}</h5>
            <div>
              {
                team.map((player, index) => {
                  return <Teamplayer key={index} player={player} removeTeamplayer={removeTeamplayer} />
                })
              }
            </div>
          </div>

          <div className="col-md-9 players-list border border-secondary">
            {
              playerData.map((player, index)=> {
                return <Player key={index} player={player} addPlayer={addPlayer} />
              })
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
