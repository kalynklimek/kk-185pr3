const Task = ({task, onDelete, onUpdate}) => {

    const highlight=() => {
        if (task.important) {
            return {
                backgroundColor: 'yellow',
                color: 'black'
            }
        }
        return null
    }

    return (
        <div onDoubleClick={() => onUpdate(task.id)}>
            <h3 style={highlight()}> {task.title} 
                <div style={{color:'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}>
                    Delete
                </div>
            </h3>
            <a href={task.textInfor}>{task.textInfor}</a>
            <p> {task.day} </p>
            {task.important && <p> important</p>}
        </div>
    )
}
export default Task