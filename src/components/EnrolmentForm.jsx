import React from 'react'
import './EnrolmentForm.css'

const EnrolmentForm = () => {
  return (
    <div>
      <form>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default EnrolmentForm
