import { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    'Example task', 
  ]);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTasks[index].startsWith('DONE: ')
      ? updatedTasks[index].substring(6)
      : 'DONE: ' + updatedTasks[index];
    setTasks(updatedTasks);
  };

  const newElement = () => {
    const inputValue = document.getElementById('myInput').value;

    if (inputValue.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, inputValue]);
      document.getElementById('myInput').value = '';
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') newElement();
  };

  const handleRemove = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <body>
      <div className="container">
        <h2>To-Do List</h2>
        <div className="input-container">
          <input type="text" id="myInput" placeholder="Add Task Here..." onKeyDown={handleKeyDown} />
          <button onClick={newElement} className="addBtn">
            Add Task
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={`task-item ${task.startsWith('DONE: ') ? 'checked' : ''}`}>
              <span onClick={() => toggleTask(index)}>
                {task.startsWith('DONE: ') ? task.substring(6) : task}
              </span>
              <button onClick={() => handleRemove(index)} className="closeBtn">
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
};

export default App;
