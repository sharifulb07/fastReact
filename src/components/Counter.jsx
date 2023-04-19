import React, { useState } from 'react'

function Counter() {
    const [score, setScore]=useState(0);

    const handleScore=()=>{
        setScore(s=>s+1);
    }



  return (
    <div>
        <p> {score} </p>
        <button onClick={handleScore}>+1</button>
        <button onClick={
            ()=>{
                handleScore();
                handleScore();
                handleScore();
            }
            
            }>+3</button>
      
    </div>
  )
}

export default Counter
