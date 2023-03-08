import React,{useState} from "react";

const initialPlayers=[
    {id:1,name:"Shakib Al Hasan"},
    {id:2,name:"Musfiqur Rahim"},
    {id:3,name:"Riyad "},
]

function RemoveList(){
    const [players,setPlayers]=useState(initialPlayers);

    return(
        <>
        
        <h2>Your favourite Player list here </h2>
        <ul>
          
          {
            players.map(player=>(
                <li key={player.id}>
                    {player.name} {' '}
                    <button onClick={()=>{
                        setPlayers(players.filter(pl=>pl.id!==player.id));
                    }}>Delete</button>
                </li>
            ))
          }
        </ul>
        </>
    )
}

export default RemoveList;