import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [textInfor, setUrl] = useState('')
    const [important, setImportant] = useState(false)
    const [titleerror, setTitleError] = useState(false)
    const [dateerror, setDateError] = useState(false)
    const [linkerror, setLinkError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        
        // current date attributes
        var today = new Date()
        var month = today.getMonth() + 1
        var d = today.getDate()
        var year = today.getFullYear()

        // inputted date attributes
        var strMonth = day.substring(5,7)
        var strDay = day.substring(8,10)
        var strYear = day.substring(0,4)

        // error handling
        if (title.length == 0 || title.length > 30 || day.length == 0 || strYear < year || (strYear == year && strMonth < month) || (strYear == year && strMonth == month && strDay < d) || !textInfor.includes("zoom")) {
            if (title.length == 0 || title.length > 30) { setTitleError(true) }
            else { setTitleError(false) }

            if (day.length == 0 || strYear < year || (strYear == year && strMonth < month) || (strYear == year && strMonth == month && strDay < d)) { setDateError(true) }
            else { setDateError(false) }

            if (!textInfor.includes("zoom")) { setLinkError(true) }
            else { setLinkError(false) }
        }
        else {
            onAdd({title, day, textInfor, important})
            setTitle('')
            setDay('')
            setUrl('')
            setImportant(false)
        }
    }

    return (
        <form className='meeting-form' onSubmit={onSubmit}>
            <div className='form-input'>
                <label>Meeting:</label>
                <input type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            {titleerror && <p className="error-msg">Please fix the title field</p>}
            <div className='form-input'>
                <label>Date:</label>
                <input type='datetime-local' placeholder='mm/dd/yyyy' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            {dateerror && <p className="error-msg">Please fix the date field</p>}
            <div className='form-input'>
                <label>Zoom Link:</label>
                <input type='url' value={textInfor} onChange={(e) => setUrl(e.target.value)}/>
            </div>
            {linkerror && <p className="error-msg">Please fix the zoom link field</p>}
            <div className='form-important'>
                <label>Important</label>
                <input type='checkbox' checked={important} value={important} onChange={(e) => setImportant(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Meeting' className='submit-btn'/>
        </form>
    )
}
export default AddTask