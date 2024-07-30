import './App.css';
import TaskForm from './components/TaskForm';
import TaskLIst from './components/TaskLIst';
// import LoadingSpinner from './components/LoadingSpinner';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }
  const editTask = (updatedTask) =>{
    setTasks(tasks.map(task=>task.id === updatedTask.id ? updatedTask : task))
  }

  const deleteTask = (taskId)=>{
     setTasks(tasks.filter(task=>task.id !== taskId))     
  }

  // if(loading){
  //   return <LoadingSpinner/>
  // }
  // if(error){
  //   return <h>Error</h>
  // }
  return (
    <div className="App">
      <h2>Task Manager App</h2>
      <div className='totalWorking'>    
      <TaskForm addTask={addTask}/>
      <TaskLIst tasks={tasks} editTask={editTask}  deleteTask={deleteTask}/>
      </div>

    </div>
  );
}

export default App;
