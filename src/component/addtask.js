import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [important, setImportant] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({title, day, important})
        setTitle('')
        setDay('')
        setImportant(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Meeting</label>
                <input type='text' placeholder='Add Task' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='mm/dd/yyyy' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Important</label>
                <input type='checkbox' checked={important} value={important} onChange={(e) => setImportant(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save' className='btn btn-block'/>
        </form>
    )
}
export default AddTask