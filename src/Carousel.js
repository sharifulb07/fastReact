import React from "react";
import { useState } from "react";
import Books from "./bookList";


function Carousel(){
  const [count, setCount]=useState(0);

  let length=Books.length;
  let myBook=Books[count];

  const handleNext=(e)=>{
    e.preventDefault();
    setCount(count===length-1?0:count+1);
  }
  const handlePrv=(e)=>{
    e.preventDefault();
    setCount(count===0?length-1:count-1);
  }


  return(
    <>
   {/* {count>0 ? <button onClick={()=>setCount(count-1)}>Previous</button>:<button onClick={()=>setCount(0)}>Previous</button>}
  {count<Books.length-1 ? <button onClick={()=>setCount(count+1)}>Next</button>: <button onClick={()=>setCount(Books.length-1)}>Next</button>} */}
    <button type="button" onClick={handlePrv}>Previous</button>
    <button type="button" onClick={handleNext}>Next</button>
   
    <img src={myBook.url} key={myBook.id} alt="book_name" />
    </>
  )
}

export default Carousel;

