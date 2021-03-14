import Task from './task'

const Tasks = ({tasks, onDelete, onUpdate}) => {
    const test = (id) => {
        console.log("id: ", id);
        console.log("task double clicked.");
    }

    return (
        <div>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>))}
        </div>
    )
}
export default Tasks;