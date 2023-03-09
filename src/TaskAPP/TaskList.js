import React, { useState } from "react";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
    return (
        <>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                        </li>

                    )

                })}

            </ul>


        </>

    )
}



const Task = ({ task, onChange, onDelete }) => {
    const [isEditing, setEditing] = useState(false);
    let TaskContent;
    if (isEditing) {
        TaskContent = (
            <>
                <input value={task.text} onChange={(e) => onChange({ ...task, text: e.target.value })} />

                <button onClick={() => setEditing(false)}>Save</button>

            </>
        )
    } else {
        TaskContent = (
            <>
                {task.text}
                <button onClick={() => setEditing(true)}>Edit</button>

            </>
        )
    }
    return (
        <>
            <label>
                <input type='checkbox' checked={task.done} onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked,
                    })
                }} />
                {TaskContent}
                <button onClick={() => onDelete(task.id)}>Delete</button>


            </label>

        </>
    )
}

export default TaskList;