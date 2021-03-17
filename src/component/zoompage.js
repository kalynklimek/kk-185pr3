import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'

import AddTask from './addtask';
import Tasks from './tasks'

function ZoomData() {
    const [tasks, setTasks] = useState([])
    const [emptytasks, setEmptyTasks] = useState(false)
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
        if (data.length == 0) {
            setEmptyTasks(true)
        }
        return data
    }

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`,
        {method: 'DELETE'})
        setTasks(tasks.filter((task) => task.id !== id))
        if (tasks.length == 1) {
            setEmptyTasks(true)
        }
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
        setEmptyTasks(false)
        setButtonName("Create Meeting")
    }

    const updateTask = async (id, task) => {
        const updTask = { id: id, title: task.title, day: task.day, textInfor: task.textInfor, important: task.important }

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
                task.id === id ? { id: data.id, title: data.title, day: data.day, textInfor: data.textInfor, important: data.important } : task 
            )
        )
    }

    const showNewMeetingForm=(event) =>{
        if (event.target.innerHTML == "Create Meeting") {
            setShowForm(true)
            setShowTasks(false)
            setButtonName("Full Schedule")
            setEmptyTasks(false)
        }
        else if (event.target.innerHTML == "Full Schedule") {
            setShowForm(false)
            setShowTasks(true)
            setButtonName("Create Meeting")
            if (tasks.length == 0) {
                setEmptyTasks(true)
            }
        }
    }

    const newMeetingForm = <AddTask onAdd={addTask}/>
    const meetings = <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask}/>

    // return only one element
    return (
        <div className="zoom-container">
            <div className="header">
                {/* <Header title="zoom meeting manager"/> */}
                <h1 className="title">zoom meeting manager</h1>
                <button className="toggle-btn" onClick={showNewMeetingForm}>{buttonName}</button>
            </div>
            {showform && newMeetingForm}
            <div className="meeting-list">
                {showtasks && meetings}
            </div>
            {emptytasks && <p className="no-tasks">There are no available meetings.</p>}
        </div>
    )
}
export default ZoomData