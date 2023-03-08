import React,{useState} from "react";

const initialShapes=[
    {id:1,type:'square',x:50,y:100},
    {id:2,type:'circle',x:150,y:100},
    {id:3,type:'square',x:250,y:100},
];

const Circle=()=>{
    const [shapes,setShapes]=useState(initialShapes);

    const handleClick=()=>{
       const nextShape= shapes.map(shape=>{
            if(shape.type==='circle'){
                return shape;
            }
            return{
                ...shape,
                y:shape.y+50,
            }
        })
        setShapes(nextShape);
    }

    return(
        <>
        <button onClick={handleClick}>
            Move Down
        </button>
        
            {shapes.map(shape=>(
                <div key={shape.id} style={{backgroundColor:'purple', position:'absolute', left:shape.x,top:shape.y, borderRadius:shape.type==='square'?'50%':' ',width:30,height:30}} />
            ))}




        </>
    )
}

export default Circle;