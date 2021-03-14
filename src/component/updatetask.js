import {useState} from 'react'

const UpdateTask = ({id, onUpdate}) => {
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
            setFields("url")
        }
        else {
            onUpdate(id, {title, day, textInfor, important})
            setTitle('')
            setDay('')
            setImportant(false)
            setError(false)
        }
    }

    return (
        <form className='update-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Meeting</label>
                <input type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='date' placeholder='mm/dd/yyyy' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Zoom Link</label>
                <input type='url' value={textInfor} onChange={(e) => setUrl(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Important</label>
                <input type='checkbox' checked={important} value={important} onChange={(e) => setImportant(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Meeting' className='btn btn-block'/>
            {error && <p className="error-msg">Please fix the {fields} field(s)</p>}
        </form>
    )
}
export default UpdateTask