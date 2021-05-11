import React,{useState,useEffect} from "react";
import axios from "axios";

import Select from "react-select";


const AddPatient=()=>{

    const[state1,setState1]=useState({
      ids:[]
    })
  
    // useEffect(()=>{
    //   axios.get("http://localhost:4000/doctor").then(res=>{
    //     const arr=res.data.map(data=>({
    //       "label" : data.regno,
    //       "name":"regno"
    //     }))
    //     setState1({
    //       ids:arr
    //     })
    //     console.log(state1.ids)
    //   })
    // })

    useEffect(()=>{
      getOption()
    },[])
    async function getOption(){
      const res=await axios.get("http://localhost:4000/doctor");
     const arr=res.data.map(data=>({
       "label":data.regno,
       "name":"regno",
      
     }))
     setState1({
       ids:arr
     })
     console.log(state1.ids)
    }
    
    const[state,setState]=useState({
        name:"",
        dob:"",
        patientno:"",
        disease:"",
        regno:"",
        detail:[]
    })
    const change=(e)=>{
     
        const{name,value}=e.target;
        setState({
            ...state,
            [name]:value,
        })

    }
    const change1=(e)=>{
      const{name,label}=e;
      setState({
        ...state,
        [name]:label
      })
    }
    const submit=(e)=>{
       
        console.log(state)
        axios.post("http://localhost:4000/patient",{
            name:state.name,
            dob:state.dob,
            patientno:state.patientno,
            disease:state.disease,
            regno:state.regno,
            detail:state.detail,
        })
    }

    return(
        <div class="container">

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" onChange={change}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Date Of Admit</label>
    <input type="date" class="form-control" name="dob" onChange={change}/>
    
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Patient No</label>
    <input type="number" class="form-control"name="patientno" onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Disease</label>
    <input type="text" class="form-control" name="disease" onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Visiting Doctor id</label>
    <Select options={state1.ids} class="form-control" name="regno" onChange={change1}/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>
</form>
        </div>
    )
}
export default AddPatient;