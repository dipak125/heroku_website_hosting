import React,{useState,useEffect} from "react";
import axios from "axios";



const UpdatePatient=(props)=>{
    const[state,setState]=useState({
        arr:[],
        name:"",
        patientno:"",
        dob:"",
        disease:"",
        regno:"",
        observation:{
            bp:"",
            ol:"",
            temp:"",
            date:"",
        }


    })
    useEffect(()=>{
        axios.get(`http://localhost:4000/patient/${props.no}`).then(res=>{
           
            setState({
            name:res.data.name,
            patientno:res.data.patientno,
            dob:res.data.dob,
            disease:res.data.disease,
            regno:res.data.regno,
            arr:res.data.detail

            })
        })
    },[])

    const change=(e)=>{
        const{name,value}=e.target;
        setState({
            ...state,
            observation:{
                ...state.observation,
                [name]:value
            }

        })

    }
    const submit=(e)=>{
        e.preventDefault();
        let arr1=[];
        arr1=[...state.arr];
        arr1.push(state.observation);
        console.log(arr1)
        console.log("patientno",props.no)
        axios.post(`http://localhost:4000/patient/${props.no}`,{
            

            name:state.name,
                patientno:state.patientno,
                dob:state.dob,
                disease:state.disease,
                regno:state.regno,
                detail:arr1
        })

    }

    return(
        <div class="container">

<form>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Date </label>
    <input type="date" class="form-control" name="date" onChange={change}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Blood Pressure</label>
    <input type="text" class="form-control" name="bp" onChange={change}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Oxyger Lever</label>
    <input type="text" class="form-control" name="ol" onChange={change} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Body Temp</label>
    <input type="number" class="form-control"name="temp" onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Remark</label>
    <input type="text" class="form-control" name="remark" onChange={change}/>
  </div>
  
  
  <button type="button" class="btn btn-primary" onClick={submit}>Submit</button>
</form>
        </div>
    )
}
export default UpdatePatient;