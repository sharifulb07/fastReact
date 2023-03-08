import React,{useState} from "react";

let indexId=0;

function List(){
const [name,setName]=useState('');
const [artists, setArtists]=useState([]);

const handleChange=(e)=>{
    setName(e.target.value);
}

const handleAdd=()=>{
    setName(' ');
    setArtists([
        {id:indexId++,name:name},
        ...artists,
    ])
}

    return(
        <>
        <h1>My Best Actress List: </h1>

        <input type='text' value={name} onChange={handleChange} />
       <button onClick={handleAdd}>Add</button> 


        <ul>
            {artists.map((artist)=>{
                return(
                    <li key={artist.id}>{artist.name}</li>
                )
            })}
        </ul>








        </>
    )
}

export default List;