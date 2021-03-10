import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

import Header from './header';
import AddTask from './addtask';
import Tasks from './tasks'

function ZoomData() {
    const [tasks, setTasks] = useState([])

    useEffect( () => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, []) // empty dependency array

    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()
        console.log("tasks loaded from server: ", data);
        return data
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    const deleteTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`,
        {method: 'DELETE'})
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()
        setTasks([...tasks, data])
    }

    const updateTask = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, important: !taskToToggle.important }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, important: data.important } : task 
            )
        )
    }

    // return only one element
    return (
        <div className="zoom-container">
          <Header title="zoom meeting manager"/>
          <AddTask onAdd={addTask}/>
          <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask}/>
        </div>
    )
}
export default ZoomData