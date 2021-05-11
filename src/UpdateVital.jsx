import React,{useState,useEffect} from "react";
import moment from "moment";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,

  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { KeyboardDatePicker } from '@material-ui/pickers'
const UpdateVital = (props) => {

  useEffect(()=>{
    axios.get(`http://localhost:4000/patient/${props.patientno}`).then(res=>{
      const detail1=res.data.detail.map(data=>({
        "date":data.date,
        "ol":data.ol,
        "bp":data.bp,
        "temp":data.temp,
        "remark":data.remark
      }))
      setState({
            ...state,
            detail:detail1,
         
            name: res.data.name,
            dob:res.data.dob,
            patientno:res.data.patientno,
            disease:res.data.disease,
            regno:res.data.regno,

      })
      
    })
                    
    
    
  },[])

  const[state,setState]=useState({
        vital:{
          date:"",
          ol:"",
          bp:"",
          temp:"",
          remark:""
        },
        detail:[],
        name:"",
        dob:"",
        patientno:"",
        disease:"",
        regno:""
  })

  const change=(e)=>{
      const{name,value}=e.target;
      setState({
        ...state,
         vital:{
           ...state.vital,
           [name]:value
         }
      })
     
  }

  const submit=()=>{
    
   let data=state.detail.filter(data=>data.date!==state.vital.date);
     
        data.push(state.vital)

        axios.post(`http://localhost:4000/patient/${state.patientno}`,{
          name:state.name,
          dob:state.dob,
          patientno:state.patientno,
          detail:data,
          disease:state.disease,
          regno:state.regno,
        })
       
  }
    
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 600,
    margin: "20px auto",
    
  };
  
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "30px 0" };
  return (
    <div class="bg_image">
      <Grid>
        <Paper elevation={30} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2> Vital Data</h2>
          </Grid>

          <TextField
              id="date"
              type="date"
              name="date"
              fullWidth
              onChange={change}
              
            />

          <TextField
            label="Oxygen Level"
            placeholder="Oxygen Level"
            fullWidth
            name="ol"
            onChange={change}
            
          />
          <TextField
            label="Body Temp"
            placeholder="Body Temp"
            fullWidth
            required
            name="temp"
            onChange={change}
          />
          <TextField label="BP" 
          placeholder="BP" 
          fullWidth 
          required
          name="bp"
          onChange={change}
          
          />
          <TextField
            label="Remarks"
            placeholder="Temark"
            fullWidth
            required
            name="remark"
            onChange={change}
          />
         

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={submit}
          >
            Submit
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};
export default UpdateVital;