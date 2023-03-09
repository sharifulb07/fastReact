import React,{useState} from "react";

let nextId=5;
const initialArtists=[
    {id:1,name:'shariful'},
    {id:2,name:'hasan'},
    {id:3,name:'Adiyat Islam'},
    {id:4,name:'shariful'},

];


const Insertion=()=>{
    const [name,setName]=useState('');
    const [artists,setArtists]=useState(initialArtists);


    const handleClick=()=>{
        const insertId=2;
        const newArtists=[
            ...artists.slice(0,insertId),
            {id:nextId++,name:name},
            ...artists.slice(insertId),

        ]
        setArtists(newArtists);
        setName(' ');

    }

    return(
        <>
        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={handleClick}>Insert</button>
        {artists.map((artist)=>(
            <p key={artist.id}>{artist.name}</p>
        ))}
        
        </>
    )
}

export default Insertion;