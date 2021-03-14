import {useState} from 'react'
//import UpdateTask from './updatetask'
import AddTask from './addtask'
import UpdateTask from './updatetask'

// const Task = ({task, onDelete, onUpdate}) => {
const Task = ({task, onDelete}) => {
    const[update, setUdpate] = useState(false)
    const[form, setForm] = useState(null)

    const highlight=() => {
        if (task.important) {
            return {
                backgroundColor: 'yellow',
                color: 'black'
            }
        }
        return null
    }

    const clickedMeeting = (id) => {
        console.log("id double clicked: ", id)
        setForm(<UpdateTask id={id} onUpdate={updateTask}/>)

        // add or remove update form
        if (update) { setUdpate(false) }
        else { setUdpate(true) }
        console.log("task double clicked.");
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    const updateTask = async (id, task) => {
        console.log("task parameter: ", task)
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, important: !taskToToggle.important }
        console.log("updTask: ", updTask)

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        console.log("data in updateTask: ", data)

        // setTasks(
        //     tasks.map((task) =>
        //         task.id === id ? { ...task, important: data.important } : task 
        //     )
        // )

        // setUdpate(false) // close update form
    }

    return (
        // <div onDoubleClick={() => onUpdate(task.id)}>
        <div>
            <div onDoubleClick={() => clickedMeeting(task.id)}>
                <h3 style={highlight()}> {task.title} 
                    <div style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}>
                        Delete
                    </div>
                </h3>
                <a href={task.textInfor}>{task.textInfor}</a>
                <p> {task.day} </p>
                {task.important && <p> important</p>}
            </div>
            {update && form}
        </div>
    )
}
export default Task