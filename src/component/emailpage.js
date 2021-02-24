import React from 'react'
import { useState } from 'react';
import './style.css'

function EmailData() {
    const [email, setemail] = useState("")
    const [validationmsg, setvalidationmsg] = useState("")

    const handleEmail =(event) => {
        setemail(event.target.value);
    }

    const handleSubmit =(event) =>{
        event.preventDefault();

        var emailName = email;
        var emailLength = emailName.length;

        // -1 if @ never occurs
        if (emailName.indexOf("@") == -1 || (emailName.substring(emailLength-4) != ".edu" && emailName.substring(emailLength-4) != ".com")) {
            setvalidationmsg("Invalid email address.")
        }

        else {
            setvalidationmsg("Email successfully recorded.")
        }
    }

    const handleClear =(event) => {
        setemail(" ")
        setvalidationmsg("")
    }

    // return only one element
    return (
        <div className="form-div">
          <h2>email validation</h2>
          <form className="form" id="email-form" onSubmit={handleSubmit}>
            <div id="form-before-submit">
                <label>
                    enter your email:
                    <input type="email" id="email" name="email" value={email} onChange={handleEmail}/>
                </label>

                <p id="email-val-msg">{validationmsg}</p>
            </div>

            <input type="button" id="clear" value="clear" onClick={handleClear} />
            <input type="submit" value="submit" />
          </form>
        </div>
    )
}
export default EmailData