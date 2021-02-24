import React from 'react'
import './style.css'

function TextData() {
    // return only one element
    return (
        <div className="form-div">
            <h2>tell me about you!</h2>
            <form className="form">
                <div className="typed-section">
                    <div className="text-input">
                        <label>
                            name:
                            <input type="text" name="name"/>
                        </label>
                    </div>

                    <div className="text-input">
                        <label>
                            school:
                            <input type="text" name="school" />
                        </label>
                    </div>

                    <div className="text-input">
                        <label>
                            major:
                            <input type="text" name="major" />
                        </label>
                    </div>
                </div>

                <br /><label>school year:</label><br />
                <input type="radio" value="first" /> first year <br />
                <input type="radio" value="second" /> second year <br />
                <input type="radio" value="third" /> third year <br />
                <input type="radio" value="fourth" /> fourth year <br />
                <input type="radio" value="other" /> > fourth year <br /> <br />

                <input type="submit" value="submit"></input>
            </form>
        </div>
    );
}
export default TextData