//import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useState } from 'react';
import { Task } from './Task';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
      currtask: newTask,
      completed: false,
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (taskid) => {
    setTodoList(todoList.filter((task) => task.id !== taskid));
    console.log(todoList);
  }

  const completeTask = (taskid) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === taskid) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  }
  return (
    <div className="main">

      <div className="header">
        <ResponsiveAppBar />
      </div>

      <div className="body">
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">
          {todoList.map((task) => {
            return (
              <Task id={task.id} 
              currtask={task.currtask} 
              completed={task.completed} 
              deleteTask={deleteTask} 
              completeTask={completeTask} />
            );
          })}
        </div>
      </div>

    </div>
  );
}


export default App;
