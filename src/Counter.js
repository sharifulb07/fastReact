import React,{useState} from "react";

const initialCount=[0,0,0]

const Counter=()=>{
const [count,setCount]=useState(initialCount);



const handleClick=(index)=>{


    const newCount=count.map((value,i)=>{
        if(i===index){
            return value+2;
        }else{
            return value;
        }
    })
    setCount(newCount);
}


    return(
        <>
        <ul>
            {count.map((value,i)=>(
                <li key={i}>{value}<button onClick={()=>handleClick(i)}>+2</button></li>
            ))}
        </ul>
        
        
        </>
    )
}


export default Counter;