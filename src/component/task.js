import {useState} from 'react'
import UpdateTask from './updatetask'

const Task = ({task, onDelete, onUpdate}) => {
    const[update, setUdpate] = useState(false)
    const[form, setForm] = useState(null)

    // get a nicer date string to display on webpage
    var date = task.day;
    var day = date.substring(8,10)
    var month = date.substring(5,7)
    var year = date.substring(0,4)
    var hour = date.substring(11,13)
    var hourNum = parseInt(hour)
    var xm = "am"
    if (hourNum == 12) { xm = "pm" }
    if (hourNum > 12) {
        hourNum = hourNum - 12
        xm = "pm"
    }
    if (hourNum == 24) { xm = "am" }
    if (hourNum == 0) { hourNum = 12 }
    var minute = date.substring(14)
    const dateString = month + "/" + day + "/" + year + " @ " + hourNum.toString() + ":" + minute + xm

    const highlight=() => {
        if (task.important) {
            return {
                borderLeft: '5px solid yellow'
            }
        }
        return null
    }

    const closeForm=() => {
        setUdpate(false)
    }

    const clickedMeeting = (id) => {
        setForm(<UpdateTask id={id} onUpdate={onUpdate} displayForm={closeForm}/>)

        // add or remove update form
        if (update) { setUdpate(false) }
        else { setUdpate(true) }
    }

    return (
        <div>
            <div className="meeting" onDoubleClick={() => clickedMeeting(task.id)} style={highlight()}>
                <div className="meeting-header">
                    <h3> {task.title} </h3>
                    <h3 className="delete-btn" style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}>Delete</h3>
                </div>
                <p className="meeting-date"> {dateString} </p>
                <a className="zoom-link" href={task.textInfor}>{task.textInfor}</a>
            </div>
            {update && form}
        </div>
    )
}
export default Task