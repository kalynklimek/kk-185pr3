import React from 'react'
// import './style.css'

function EmailData() {
    // return only one element
    return (
        <div className="form-div">
          <h2>email validation</h2>
          <form className="form" id="email-form">
            <div id="form-before-submit">
                <label>
                    Enter your email:
                    <input type="email" id="email" name="email" />
                </label>

                <p id="email-val-msg"></p>
            </div>

            <input type="button" id="clear" value="clear" />
            <input type="submit" value="submit" />
          </form>
        </div>
    )
}
export default EmailData