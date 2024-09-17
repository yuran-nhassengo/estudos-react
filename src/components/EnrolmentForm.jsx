import React, { useState } from 'react'
import './EnrolmentForm.css'

const EnrolmentForm = (props) => {

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("Welcome");

    const handleClick = (event) => {
      handleInputReset("","","");
        setMessage(`Welcome ${firstName} ${lastName} enrolled. 
          Email sent to - ${email}`);
        props.setUpdatedSeats(props.currentSeats-1);
        event.preventDefault();
    }

    const handleInputChange = (setInput, event) =>{
      setInput(event.target.value);
    }

    const handleInputReset = (fname,lname,email) =>{
      setFirstName(fname);
      setLastName(lname);
      setEmail(email);
    }

  return (
    <div className="enrolContainer">
      <form className="enrolForm" name="enrolForm" >
        <ul className="ulEnrol">

          <li>
            <label htmlFor="firstname"></label>
            <input type="text" 
              className="inputFields"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => handleInputChange
                (setFirstName,event)
              }
            />
          </li>

          <li>
            <label htmlFor="lastname"></label>
            <input type="text" 
              className="inputFields"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => handleInputChange(setLastName
                ,event
              )}
            />
          </li>

          <li>
            <label htmlFor="email"></label>
            <input 
              type="email"
              className="inputFields"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(event) => handleInputChange(setEmail,event)}
            />
          </li>
          
          <li id="center-btn">
              <input type="submit"
              id="btnEnrol"
              name="Enrol"
              alt="Enrol"
              value="Enrol"
              onClick={handleClick}
              />
          </li>
          <li>
            <label id="studentMsg" >
              {message}
            </label>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default EnrolmentForm
