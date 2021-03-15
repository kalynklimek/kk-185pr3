import {useState} from 'react'

const UpdateTask = ({id, onUpdate, displayForm}) => {
    // const fetchTask = async (id) => {
    //     const res = await fetch(`http://localhost:5000/tasks/${id}`)
    //     const data = await res.json()
    //     return data
    // }

    // const taskToUpdate= await fetchTask(id)
    // console.log("task to update: ", taskToUpdate)

    // TO DO: PRE FILL UPDATE MEETING FORM 

    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [textInfor, setUrl] = useState('')
    const [important, setImportant] = useState(false)
    const [error, setError] = useState(false)
    const [fields, setFields] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        // current date attributes
        var today = new Date()
        var month = today.getMonth() + 1
        var d = today.getDate()
        var year = today.getFullYear()

        // inputted date attributes
        var strMonth = day.substring(5,7)
        var strDay = day.substring(8)
        var strYear = day.substring(0,4)

        // error handling
        if (title.length == 0 || title.length > 30) {
            setError(true)
            setFields("title")
        }
        else if (day.length == 0 || strYear < year || (strYear == year && strMonth < month) || (strYear == year && strMonth == month && strDay < d)) {
            setError(true)
            setFields("day")
        }
        else if (!textInfor.includes("zoom")) {
            setError(true)
            setFields("zoom link")
        }
        else {
            onUpdate(id, {title, day, textInfor, important})
            setTitle('')
            setDay('')
            setUrl('')
            setImportant(false)
            setError(false)
            displayForm()
        }
    }

    return (
        <form className='meeting-form' id="update-form" onSubmit={onSubmit}>
            <div className='form-input'>
                <label>Meeting</label>
                <input type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-input'>
                <label>Date</label>
                <input type='datetime-local' placeholder='mm/dd/yyyy' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-input'>
                <label>Zoom Link</label>
                <input type='url' value={textInfor} onChange={(e) => setUrl(e.target.value)}/>
            </div>
            <div className='form-important'>
                <label>Important</label>
                <input type='checkbox' checked={important} value={important} onChange={(e) => setImportant(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Meeting' className='submit-btn'/>
            {error && <p className="error-msg">Please fix the {fields} field(s)</p>}
        </form>
    )
}
export default UpdateTask