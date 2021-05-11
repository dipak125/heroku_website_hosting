import React,{useState,useEffect} from "react";

import axios from "axios";

import NavLog from "./NavLog";

const ViewVital=(props)=>{
  const{id}=props;
  const[state,setState]=useState({
        vitals:[],
        name:"",
        patientno:props.patientno,
        
  });

 useEffect(()=>{
    axios.get(`http://localhost:4000/patient/${props.patientno}`).then(res=>{
     
      const detail=res.data.detail.map(data=>({
          "date":data.date,
          "bp":data.bp,
          "ol":data.ol,
          "temp":data.temp,
          "remark":data.remark,
      }))
      setState({
          ...state,
         name:res.data.name,
         vitals:detail,
      })
      console.log("detail is ",detail)
         
         
    })
   
},[])

    return(
      <>
      <NavLog/>
      <div class="container">
    
      <h2> Patient Name:{state.name}</h2>
      <h2> Patient No:{state.patientno}</h2>
      <div class="card">
       
        <div class="card-body">
        <table class="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">temperature</th>
                    <th scope="col">Oxygen level</th>
                    <th scope="col">Blood pressure</th>
                    <th scope="col">Remarks</th>
                    <th scope="col">Report</th>

                    
                    
                    
                  </tr>
                </thead>
                <tbody>
                {state.vitals.map(data=>
                
                <tr>
                <th scope="row">{data.date}</th>
                <td>{data.temp}</td>
                <td>{data.ol}</td>
                <td>{data.bp}</td>
                <td>{data.remark}</td>
                <td>
                    <button>Download</button>
                </td>
               
             </tr>   
                
                )
                
               

                    
                 
                 
                }
                </tbody>
              </table>
        </div>
      </div>
    </div>
    </>


    )
}
export default ViewVital;