import { func } from 'prop-types'
import React, { useState } from 'react'

const EmployeeComponent = () => {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  function saveEmployee(e) {
    e.preventDefault();

    let employee = {firstName: firstName, lastName: lastName, email: email};
    console.log(employee);
  }

  return (
    <div className='container mt-2 mb-2'>
        <br/><br/>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center mt-2 mb-2'>Add Employee</h2>
            <form className='mb-2'>
              <div className='form-group mb-2'>
                <label>First Name:</label>
                <input placeholder='First Name' name='firstName' className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className='form-group mb-2'>
                <label>Last Name:</label>
                <input placeholder='Last Name' name='lastName' className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className='form-group mb-2'>
                <label>Email:</label>
                <input placeholder='Email' name='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <button className='btn btn-success' onClick={saveEmployee}>Save</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default EmployeeComponent