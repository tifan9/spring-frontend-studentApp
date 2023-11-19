import React, { useEffect, useState } from 'react'
import axios from "axios";
const StudentsView = () => {

    const [students, setStudents] = useState([]);

    useEffect(() =>{
        loadStudents();
    }, []);
    // create method that load student from database to the table
    const loadStudents = async()=>{
        const result = await axios.get(
            "http://localhost:8080/students", {
                validateStatus: ()=>{
                    return true;
                }
            }
            );
            if(result.status === 302){
                setStudents(result.data);
            }
            
    }

  return (
    <section>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Department</th>
      <th colSpan="3">Action</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student, index)=>(
        <tr key={student.id}>
       <th scope="row" key={index}>
            {index + 1}
       </th>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{student.email}</td>
        <td>{student.department}</td>
        <td className="mx-2 ">
            <button className="btn btn-info">
                View
            </button>
            </td>
        <td className="mx-2">
        <button className="btn btn-warning">
                Update
            </button>
            </td>
        <td className="mx-2">
        <button className="btn btn-danger">
                Delete
            </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </section>
  )
}

export default StudentsView
