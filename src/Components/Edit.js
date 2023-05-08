import React from "react";
import Base from "../Base/Base";
import "./Add.css"
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextField } from "@mui/material";

function Edit({ ind, setInd, data, setData }) {

  const history = useHistory();
  // console.log(ind);
  // console.log(`App ind ${data[ind].name}`)


  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [clas, setClas] = useState("")
  const [bloodgroup, setBloodGroup] = useState("")



  useEffect(() => {
    const editStudent = data[ind]
    setName(editStudent.name)
    setAge(editStudent.age)
    setGender(editStudent.gender)
    setClas(editStudent.class)
    setBloodGroup(editStudent.bloodGroup)
  }, [data, ind])

async  function onUpdate1(event) {




    event.preventDefault();


    const editedData={
      name : name,
      age : age,
      gender : gender,
      class : clas,
      bloodGroup : bloodgroup
    }
    data[ind]=editedData;

    const response=await fetch(`https://645899734eb3f674df7800be.mockapi.io/students/${ind}`, {
      method:"PUT",
      body:JSON.stringify(editedData),
      headers:{
        "content-Type":"application/json"
      }
    }) 

    

    const data2=await response.json();
    console.log(`data2 ${data2.name}`)
      if(data2){
        console.log(data2);
        setData([...data]);
    history.push("/student")
      }
    
  }


  return (


    <Base
      heading={"Edit Data"}
    >

      <div className="container">
        {/* row*/}
        <div className="row add-container">



          <div className="col-12">
            {/* col add-form*/}
            <form className="container add-form" onSubmit={(e) => (onUpdate1(e))}>
              <h1 className="add-heading"><b>Edit Student's Data</b></h1>
              
              
              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Age"
                name="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />


              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />


              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Class"
                name="class"
                value={clas}
                onChange={(e) => setClas(e.target.value)}
              />

              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Blood Group"
                name="bloodgroup"
                value={bloodgroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              />


              

              <button className='btn btn-success'>Update</button>
            </form>
          </div>



        </div>
      </div>

    </Base>
  );




}



export default Edit