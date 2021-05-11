import React,{useState,useEffect} from "react"
import axios from "axios";
import {Link} from "react-router-dom";

const PatientList=()=>{
    const[state,setState]=useState({
        patient:[]
    })
    useEffect(()=>{
        axios.get("http://localhost:4000/patient").then(res=>{
            setState({
                ...state,
                patient:res.data
            })
        })
    },[])
    return(
        <div class="container">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Patient No</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  <tbody>
    {state.patient.map(data=>
            <tr>
            <th scope="row">{data.patientno}</th>
            <td>{data.name}</td>
            <td>
               <Link to={`/updatepatient/${data.patientno}`}><button>Update</button></Link>&nbsp;&nbsp;
                <Link to={`/delete/${data.patientno}`}><button>Delete</button></Link>
            </td>
            
          </tr>
    )}
    
  </tbody>
</table>
        </div>
    )
}
export default PatientList;