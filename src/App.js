
import './App.css';
import {BrowserRouter,Route,Link} from "react-router-dom";
import AddPatient from "./AddPatient";
import AddDoctor from './AddDoctor';
import PatientList from "./PatientList";
import UpdatePatient from "./UpdatePatient";

import Create from "./Create.jsx";
import Doctorhome from "./Doctorhome.jsx";
import Dropdown from "./Dropdown.jsx";
import Patient from "./Patient.jsx";
import ViewVital from "./ViewVital.jsx";
import UpdateVital from "./UpdateVital.jsx";


function App() {
  return (
     <>
        <BrowserRouter>
            <Route exact path="/adddoctor" component={()=>  <AddDoctor/>}/>
            <Route exact path="/addpatient" component={()=><AddPatient/>}/>
            <Route exact path="/patientlist" component={()=><PatientList/>}/>
            <Route exact path="/updatepatient/:no" component={(props)=><UpdatePatient no={props.match.params.no}/>}/>
           
            <Route exact path="/create" component={()=> <Create/>}/>
            <Route exact path="/doctorhome" component={()=> <Doctorhome/>}/>
            <Route exact path="/dropdown" component={()=> <Dropdown/>}/>
            <Route exact path="/patient/:id" component={(props)=> <Patient patientno={props.match.params.id}/>}/>
            <Route exact path="/view/:id" component={(props)=> <ViewVital patientno={props.match.params.id}/>}/>
            <Route exact path="/update/:id" component={(props)=> <UpdateVital patientno={props.match.params.id}/>}/>
        </BrowserRouter>
     </>
  );
}

export default App;
