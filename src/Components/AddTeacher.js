import React from "react";
import Base from "../Base/Base";
import "./Add.css";
import { TextField } from "@mui/material";



function AddTeacher({ data, setData }) {

  // to ahndel onsubmit
  const handelsubmit = async(event) => {
    console.log(data)
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const subject = event.target.subject.value;
    const bloodgroup = event.target.bloodgroup.value;

     //fetch data
     const response=await fetch("https://645899734eb3f674df7800be.mockapi.io/teachers", {
      method:"POST",
      body:JSON.stringify({ name, age, gender, subject, bloodGroup: bloodgroup }),
      headers:{
        "content-Type":"application/json"
      }
    })

    const data2=await response.json();

    setData([...data, data2])

    // to claear all field after updating
    event.target.reset();
  }

  return (
    <Base
      heading={"Add Data"}
    >


      {/* container */}
      <div className="container">

        {/* row*/}
        <div className="row add-container">




          {/* col add-form*/}
          <div className="col-12">
          <form className="container-fluid add-form" onSubmit={handelsubmit}>
            <h1 className="add-heading"><b>Add Teacher's Data</b></h1>
            

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
                placeholder="Enter the Subject"
                name="subject"
              />

              <TextField
                fullWidth
                id="fullWidth outlined-required"
                required
                placeholder="Enter the Blood Group"
                name="bloodgroup"
              />



            <button className='btn btn-success'>Add</button>
          </form>
          </div>




          

        </div>


      </div>



    </Base>
  );

}



export default AddTeacher