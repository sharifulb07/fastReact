import React from 'react'
import { useState } from "react";
import { sculptureList } from "./data.js";


function Gallery() {
const [index,setIndex]=useState(0);
const [showMore,setShowMore]=useState(false);
const hasNext=index<sculptureList.length-1;
const hasPrev=index>0;

const handlePrevious=()=>{
if(hasPrev){
    setIndex(index-1);
}else{
    setIndex(sculptureList.length-1);
}
}
const handleNext=()=>{
if(hasNext){
    setIndex(index+1);
}else{
    setIndex(0);
}
}


const handleShowMore=()=>{
    setShowMore(!showMore);
}

let sculpture=sculptureList[index];


  return (
    <div>
      {/* next and previous button */}
      <button onClick={handlePrevious}>
        Previous
      </button>
      <button onClick={handleNext}>
        Next
      </button>

    {/* name and artist */}
    <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
    </h2>




{/* show length */}

<h3>
    {index+1} of {sculptureList.length}
</h3>

{/* show images  */}
 <img src={sculpture.url} alt={sculpture.name} />

{/* show and hide info */}

<div>
    <button onClick={handleShowMore}>
        {showMore ?'Hide':'Show'} Details 
    </button>
</div>



    </div>
  )
}

export default Gallery

