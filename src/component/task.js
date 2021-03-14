import {useState} from 'react'
import UpdateTask from './updatetask'

const Task = ({task, onDelete, onUpdate}) => {
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
        setForm(<UpdateTask id={id} onUpdate={onUpdate}/>)

        // add or remove update form
        if (update) { setUdpate(false) }
        else { setUdpate(true) }
        console.log("task double clicked.");
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