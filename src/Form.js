import React, { useState } from "react";
const initialValue={
    name:"Slavador Dally",
    artwork:{
        title:"Blue Nana",
        city:"Humburg",
        image:'https://i.imgur.com/Sd1AgUOm.jpg',
    }
}

function Form(){
    const [list, setList]=useState(initialValue);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted");
    }

    const handleNameChange=(e)=>{
        setList(e.target.value)

    }

    return(
       
       <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type='text' id="name" onChange={handleNameChange } className="name" value={list.name} />

       </form>
        
        
    )
}

export default Form;