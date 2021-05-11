import axios from "axios";
import React,{useState} from "react";


const Create=()=>{
        const[state,setState]=useState({
            email:"",
            name:"",
            password:"",
        })
        const change=(e)=>{
            const{name,value}=e.target;
            setState({
                ...state,
                [name]:value,
            })
        }
        const submit=()=>{

           axios.post("http://localhost:4000/user",{
             name:state.name,
             email:state.email,
             password:state.password
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
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" name="email" onChange={change} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input type="password" class="form-control" name="password" onChange={change} />
  </div>
  
  <button type="button" class="btn btn-primary" onClick={submit}>Submit</button>
</form>
        </div>
    )
}
export default Create;