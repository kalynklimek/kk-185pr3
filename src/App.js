import './App.css';

import Body from './component/body';
import Tablist from './component/tablist';
import { useState, useEffect } from 'react';

function App() {
  const [active, setactive] = useState(1)
  const [tasks, setTasks] = useState([])

  useEffect( () => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, []) // empty dependency array

  const fetchTasks = async () => {
    const res = await fetch("https://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  const tabs =[{
    id:1,
    title:'home'
  },
  {
    id:2,
    title:'text'
  },
  {
    id:3,
    title:'image'
  },
  {
    id:4,
    title:'video'
  },
  {
    id:5,
    title:'table'
  },
  {
    id:6,
    title:'email'
  }]
  const changetab =(id) =>{
    setactive(id)
  }

  return (
    <div className="App">
      <div className="nav-bar">
        <Tablist tabs ={tabs} activetab ={active} ctab ={changetab}/>
      </div>
      <div className="main-body">
        <Body activetab ={active}/>
      </div>
    </div>
  );
}

export default App;
