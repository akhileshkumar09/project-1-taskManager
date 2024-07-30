import React, { useState } from 'react'

function TaskForm({addTask}) {
    const [task, setTask] = useState('')

    const handleSubmit = (e)=>{
         e.preventDefault()
         if(task){
            addTask({id : Date.now(), text : task})
            setTask('');
         } 
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='taskForm'>
            <input
            type='text'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder='Enter task'
            />
            <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default TaskForm