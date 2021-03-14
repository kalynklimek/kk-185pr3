import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

import Header from './header';
import AddTask from './addtask';
import Tasks from './tasks'

function ZoomData() {
    const [tasks, setTasks] = useState([])
    const [showform, setShowForm] = useState(false)
    const [showtasks, setShowTasks] = useState(true)
    const [buttonName, setButtonName] = useState("Create Meeting")

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

    // const fetchTask = async (id) => {
    //     const res = await fetch(`http://localhost:5000/tasks/${id}`)
    //     const data = await res.json()
    //     return data
    // }

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
        setShowForm(false)
        setShowTasks(true)
        setButtonName("Create Meeting")
    }

    // const updateTask = async (id) => {
    //     const taskToToggle = await fetchTask(id)
    //     const updTask = { ...taskToToggle, important: !taskToToggle.important }

    //     const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updTask)
    //     })

    //     const data = await res.json()

    //     setTasks(
    //         tasks.map((task) =>
    //             task.id === id ? { ...task, important: data.important } : task 
    //         )
    //     )
    // }

    const showNewMeetingForm=(event) =>{
        if (event.target.innerHTML == "Create Meeting") {
            setShowForm(true)
            setShowTasks(false)
            setButtonName("Full Schedule")
        }
        else if (event.target.innerHTML == "Full Schedule") {
            setShowForm(false)
            setShowTasks(true)
            setButtonName("Create Meeting")
        }
    }

    const newMeetingForm = <AddTask onAdd={addTask}/>
    //const meetings = <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask}/>
    const meetings = <Tasks tasks={tasks} onDelete={deleteTask}/>
    // const updateMeetingForm = <UpdateTask/>

    // return only one element
    return (
        <div className="zoom-container">
          <Header title="zoom meeting manager"/>
          <button className="add" onClick={showNewMeetingForm}>{buttonName}</button>
          {showform && newMeetingForm}
          {showtasks && meetings}
        </div>
    )
}
export default ZoomData