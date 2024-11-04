
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'

const EmployeeComponent = () => {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const {id} = useParams();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const navigator = useNavigate();

  useEffect(() => {
    if(id){
      getEmployee(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch(error => {
        console.error(error);
      })
    }
  }, [id])

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if(validateForm()){
      let employee = {firstName: firstName, lastName: lastName, email: email};
      console.log(employee);
      
      if(id){
        updateEmployee(id, employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        }).catch(error => {
          console.error(error);
        })
      } else{
        createEmployee(employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        }).catch(error => {
        console.error(error);
        })
      }
    }
  }

  function validateForm(){
    let valid = true;

    const errorsCopy = {... errors};

    if(firstName.trim()){
      errorsCopy.firstName = '';
    }
    else{
      errorsCopy.firstName = 'First Name is required';
      valid = false;
    }

    if(lastName.trim()){
      errorsCopy.lastName = '';
    }
    else{
      errorsCopy.lastName = 'Last Name is required';
      valid = false;
    }

    if(email.trim()){
      errorsCopy.email = '';
    }
    else{
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle(){
    if(id){
      return <h2 className='text-center mt-2 mb-2'>Update Employee</h2>
    }else{
      return <h2 className='text-center mt-2 mb-2'>Add Employee</h2>
    }
  }

  return (
    <div className='container mt-2 mb-2'>
        <br/><br/>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
              pageTitle()
            }
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label>First Name:</label>
                  <input placeholder='First Name' name='firstName' className={`form-control ${errors.firstName ? 'is-invalid': ''}`} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>
                <div className='form-group mb-2'>
                  <label>Last Name:</label>
                  <input placeholder='Last Name' name='lastName' className={`form-control ${errors.lastName ? 'is-invalid': ''}`} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                </div>
                <div className='form-group mb-2'>
                  <label>Email:</label>
                  <input placeholder='Email' name='email' className={`form-control ${errors.email ? 'is-invalid': ''}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>
                <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Save</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EmployeeComponent