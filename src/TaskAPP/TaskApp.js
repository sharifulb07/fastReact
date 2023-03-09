import React,{useState} from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";



const TaskApp=()=>{
    const [tasks,setTasks]=useState(initialTasks);

    const handleAddTask=(text)=>{
        setTasks([
            ...tasks,
            {id:nextId++,text:text,done:false},
        ])
    }


    const handleChangeTask=(task)=>{
        setTasks(tasks.map((t)=>{
            if(t.id===task.id){
                return task;
            }else{
                return t;
            }
        }))
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter((t) => t.id !== taskId));
      }

    return (
        <>
        <h2>Prague Itinerary </h2>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
        
        </>
    )
}





export default TaskApp;



let nextId=3;
const initialTasks=[
    {id:0,text:"Visit Gragory Meseum",done:true},
    {id:1,text:"Enjob the party show",done:false},
    {id:2,text:"Walk out for country Side ",done:false},
]