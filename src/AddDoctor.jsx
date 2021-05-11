import React,{useState,useEffect} from "react";
import axios from "axios";


const AddDoctor=()=>{
    const[state,setState]=useState({
        name:"",
        specialization:"",
        regno:"",
        degree:"",
        mob:"",
    })
    const change=(e)=>{
        const{name,value}=e.target;
        setState({
          ...state,
          [name]:value
        })
    }
    const submit=()=>{
        console.log(state);
        axios.post("http://localhost:4000/doctor",{
            name:state.name,
            specialization:state.specialization,
            regno:state.regno,
            degree:state.degree,
            mob:state.mob
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
    <label for="exampleInputPassword1" class="form-label">Specialization</label>
    <input type="text" class="form-control" name="specialization" onChange={change} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Doctor id</label>
    <input type="text" class="form-control"name="regno" onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Degree</label>
    <input type="text" class="form-control" name="degree" onChange={change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mob No</label>
    <input type="tel" class="form-control" name="mob" onChange={change}/>
  </div>
  
  <button type="button" class="btn btn-primary" onClick={submit}>Submit</button>
</form>
        </div>
    )
}

export default AddDoctor;