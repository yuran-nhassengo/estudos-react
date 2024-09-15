import React, { useState } from 'react'
import './EnrolmentForm.css'

const EnrolmentForm = () => {

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [message,setMessage] = useState("Welcome");

    const handleSubmit = (event) => {
        setMessage(`Welcome ${firstName} ${lastName}`);
        event.preventDefault();
    }

  return (
    <div>
      <form className="enrolForm">
        <h1>Student Details</h1>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" onBlur ={(event) =>
                setFirstName(event.target.value)
            } />
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" onBlur={ (event) =>
                setLastName(event.target.value)
            }/>
        </div>
        <div>
            <input type="submit" value="Submit" onClick={handleSubmit} />
        </div>
        <div>
            <label htmlFor="message" className="message">{message}</label>
        </div>
      </form>
    </div>
  )
}

export default EnrolmentForm
