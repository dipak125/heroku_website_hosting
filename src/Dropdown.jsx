import React,{useState,useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { BrowserRouter } from "react-router-dom";
import {useHistory,Link} from "react-router-dom"

//import './Details.css'
import Foot from './Foot'

import Select from "react-select";
import axios from "axios";

import NavLog from "./NavLog";



const Doctor=()=>{
  const[state,setState]=useState({
      patient:[],
      patientno:"",
  })
  const regno=3
let options
const history=useHistory()
useEffect(()=>{
  axios.get(" http://localhost:4000/patient ").then(res=>{
     
     const option=res.data.filter(d=> d.regno==regno)
      options=option.map(data=>({
         "label":data.name,
         "value":data.patientno,
     }))
     console.log(options)
     setState({
         patient:options
     })
      
})
},[])
const change=(e)=>{
 

       history.push(`/patient/${e.value}`)
}

return(
  <>
      
    
    <div stlye={{}}>
      <div class="bg_image">
      <NavLog/>
      <Card
        style={{
          width: 600,
          height:400,
          backgroundColor: "#ebddb9",
          marginLeft:50,
          marginTop:100
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            <h4 class='top'><center>Dr: Name: Raz Raza</center></h4>
          </Typography>
          <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
          <Select options={state.patient} onChange={change}/>
            
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions>
      </Card>
      <Foot/>
    </div>
    </div>
    
  );
     
  </>
)
}
export default Doctor;