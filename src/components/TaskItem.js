import React, { useState } from 'react'

function TaskItem({task, editTask, deleteTask}) {
    const [isEditing, setIsEditing] = useState(false)
    const [newText, setNewText] = useState(task.text)

    const handleSave = () =>{
        editTask({...task, newText})
        setIsEditing(false)
    }
  return (
    <div>
        <li>
            {
                (isEditing) ? 
                (<>
                    <input
                    type='text'
                    value={newText}
                    onChange={(e)=>setNewText(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>) :
                (<div className='taskItem'>
                    <span className='text'>{task.text}</span>
                    <div className='taskItemButton'>
                    <button onClick={()=>setIsEditing(true)}>Edit</button>
                    <button onClick={()=>deleteTask(task.id)}>Delete</button>
                    </div>
                </div>)
            }
        </li>
    </div>
  )
}

export default TaskItem