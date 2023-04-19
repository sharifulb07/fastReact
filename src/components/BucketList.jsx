import React, { useState } from 'react'

const initialList=[
    {id:0, title:'Big Billies', seen:false},
    {id:1, title:'landscape', seen:true},
    {id:2, title:'Lunar Moon', seen:false},
]

function BucketList() {

const [list, setList]=useState(initialList);

const handleToggle=(artworkId, nextSeen)=>{
    setList(list.map(artwork=>{
        if(artwork.id===artworkId){
            return {...artwork, seen:nextSeen};
        }else{
            return artwork;
        }
    }))
}

  return (
    <div>
        <ItemList
        artworks={list}
        handleToggle={handleToggle}
        />

      
    </div>
  )
}

const ItemList=({artworks, handleToggle})=>{

    return(
        <div>
            <ul>
                {artworks.map((artwork,index)=>(
                    <li key={artwork.id}>
                        <label>
                        
                            <input
                            type='checkbox'
                            checked={artwork.seen}
                            onChange={e=>{
                                handleToggle(artwork.id, e.target.checked)
                            }}
                            />
                            {artwork.title}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BucketList
