import React,{useState} from "react";


const initialNames=[
    {id:1,name:"Shariful Islam"},
    {id:2,name:"Rariqul Islam"},
    {id:3,name:"Shofiqul Islam"},
    {id:4,name:"Babian Islam"},
]

const NameReverse=()=>{
    const [names,setNames]=useState(initialNames);


    const handleClick=()=>{
        const newName=[...names];
        newName.reverse();
        setNames(newName);
    }


    return(
        <>
        <button onClick={handleClick}>Reverse </button>
        {names.map((name)=>(
            <p key={name.id}>{name.name}</p>
        ))}
        </>
    )
}

export default NameReverse;