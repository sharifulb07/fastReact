import React, {useState} from 'react';
import './App.css';





function App() {
  const [name,setName]=useState("Dave");
  const [count,setCount]=useState(0);




  const randomName=()=>{
    const names=["shariful","kabir","Mahon"];
    const num=Math.floor(Math.random()*names.length);
    setName(names[num]);
  }
  const date=new Date();
  const doubleClick=()=>{
    setCount(count+1)
  }
  return (
    <div className="App">
     <div>
     {name} 
       
       </div> 
      <button className='App-link' onClick={randomName}>Click me here</button>
      {doubleClick()}
      <button className='App-link' onDoubleClick={doubleClick}>click me </button>

      <h3>{date.getFullYear()}</h3>
    </div>
  );
}

export default App;
