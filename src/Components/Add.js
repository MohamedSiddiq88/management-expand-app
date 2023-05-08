import React from "react";
import Base from "../Base/Base";
import "./Add.css";
import { TextField } from "@mui/material";



function Add({data, setData }) {

  // to ahndel onsubmit
  const handelsubmit = async(event) => {

    
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const clas = event.target.class.value;
    const bloodgroup = event.target.bloodgroup.value;

    
    
    //fetch data
    const response=await fetch("https://645899734eb3f674df7800be.mockapi.io/students", {
      method:"POST",
      body:JSON.stringify({ name, age, gender, class: clas, bloodGroup: bloodgroup }),
      headers:{
        "content-Type":"application/json"
      }
    })

    const data2=await response.json();

    

    setData([...data, data2])

    console.log(data)

    // to claear all field after updating
    event.target.reset();
  }

  return (
    <Base
      heading={"Add Data"}
    >




      <div className="container">
        {/* row*/}
        <div className="row add-container">


          {/* col */}
          <div className="col-12">

            {/* col add-form*/}
            <form className="container add-form " onSubmit={handelsubmit}>
              <h1 className="add-heading"><b>Add Student's Data</b></h1>


              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Name"
                name="name"
              />

              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Age"
                name="age"
                type="number"
              />


              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Gender"
                name="gender"
              />


              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Class"
                name="class"
              />

              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Blood Group"
                name="bloodgroup"
              />






              <button className='btn btn-success' >Add</button>
            </form>
          </div>
        </div>
      </div>






    </Base>
  );

}



export default Add