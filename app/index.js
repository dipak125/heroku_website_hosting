
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dbrl="mongodb+srv://admin:dipak123@cluster0.hefx5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const app=express();

app.use(
    bodyParser.urlencoded({
        extended:true
    })
)
app.use(bodyParser.json());
app.use(cors())
mongoose.connect(dbrl,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("not connected")
})

const DoctorSchema=mongoose.Schema({
    name:"",
    specialization:"",
    regno:"",
    degree:"",
    mob:""
},
{
    timestamps:true
}
)
const PatientSchema=mongoose.Schema({
    name:"",
    dob:"",
    patientno:"",
    disease:"",
    detail:[],
    regno:"",
},
{
    timestamps:true
})
const UserSchema=mongoose.Schema({
    name:"",
    email:"",
    password:"",
},
{
    timestamps:true
})
const User=mongoose.model("user",UserSchema);
const Doctor=mongoose.model("doctor",DoctorSchema);
const Patient=mongoose.model("patient",PatientSchema);

app.post("/user",(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    console.log(user)
    user.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message:"unable to add"
        })
    })
})
app.get("/user",(req,res)=>{
    User.find().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message:"unable to get"
        })
    })
})

app.post("/patient",(req,res)=>{
    const patient=new Patient({
        name:req.body.name,
        dob:req.body.dob,
        patientno:req.body.patientno,
        disease:req.body.disease,
        detail:req.body.detail,
        regno:req.body.regno,
    })
    console.log(patient);
    patient.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message:"unable to add patient"
        })
    })
})
app.post("/doctor",(req,res)=>{
  const doctor=new Doctor({
     name:req.body.name,
     specialization:req.body.specialization,
     regno:req.body.regno,
     degree:req.body.degree,
     mob:req.body.mob
  })
  console.log(doctor);
  doctor.save().then(data=>{
      res.send(data)
  }).catch((err)=>{
      res.send({
          message:"unable to send"
      })
  })
})
app.get("/patient",(req,res)=>{
    Patient.find().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message:"unable to get data"
        })
    })
})
app.get("/patient/:patientno",(req,res)=>{
    console.log("running",req.params.patientno)
    Patient.findOne({patientno:req.params.patientno}
     ).then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message:"unable to get data"
        })
    })
})
app.post("/patient/:patientno",(req,res)=>{
    console.log("running",req.params.patientno)
    Patient.findOneAndUpdate({patientno:req.params.patientno},{
        name:req.body.name,
        dob:req.body.dob,
        patientno:req.body.patientno,
        disease:req.body.disease,
        detail:req.body.detail,
        regno:req.body.regno,
    },{new:true}).then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message:"unable to get data"
        })
    })
})
app.get("/doctor",(req,res)=>{
    Doctor.find().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message:"unable to get"
        })
    })
})


app.listen(4000,()=>{
    console.log("4000 is running")
})