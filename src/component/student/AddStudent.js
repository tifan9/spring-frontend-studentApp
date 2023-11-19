import React, { useState } from 'react'

// create the variables
const AddStudent = () => {
    const [student, setStudents] =  useState({
        firstName : '',
        lastName : '',
        email : '',
        department : ''
    })
    //create student object to structure the above variables 
    const {firstName, lastName,email,department}= student;
  return (
    <div className='col-sm-8 co py-2 px-5 offset-2 shadow'>
        <form>
            <div className='input-group mb-5'>
                <label
                className='input-group-text'
                htmlFor='firstName'
                >First Name</label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='firstName'
                id='firstName'
                placeholder='Enter First Name'
                required
                value={firstName}/>
            </div>
            <div className='input-group mb-5'>
                <label
                className='input-group-text'
                htmlFor='lastName'
                >Last Name</label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Enter Last Name'
                required
                value={lastName}/>
            </div>
            <div className='input-group mb-5'>
                <label
                className='input-group-text'
                htmlFor='email'
                >Email</label>
                <input
                className='form-control col-sm-6'
                type='email'
                name='email'
                id='email'
                placeholder='Enter Email'
                required
                value={email}/>
            </div>
            <div className='input-group mb-5'>
                <label
                className='input-group-text'
                htmlFor='department'
                >Department</label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='department'
                id='department'
                placeholder='Enter Department'
                required
                value={department}/>
            </div>
            
        </form>
    </div>
  )
}

export default AddStudent
