import React from 'react'
import TaskItem from './TaskItem'

function TaskLIst({tasks, editTask, deleteTask}) {
  return (
    <div>
       <ul>
        {
            tasks.map((task)=>(
                <TaskItem
                key={task.id}
                task={task}
                editTask={editTask}
                deleteTask={deleteTask} 
                />
            ))
        }
       </ul>
    </div>
  )
}

export default TaskLIst