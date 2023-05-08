import React from "react";
import Base from "../Base/Base";
import { useHistory } from 'react-router-dom'


function Studentsprofiles({ data, setData, setInd }) {
    const history = useHistory();

    async function deleteStudent(id) {


        const response = await fetch(`https://645899734eb3f674df7800be.mockapi.io/students/${id}`, {
            method: "DELETE"
        })


        const data2=await response.json();
        console.log(data2)
        
        
        setData(data.filter((ele, inx) => ele.id != id))


    }

    return (
        <Base
            heading={"Students Profiles"}
        >



            <div className="container">

                {/* add button */}
                <div className="add-btn-div">
                    <button className="btn btn-primary" onClick={() => history.push("/add")}>Add Student</button>
                    <p className="msg"><mark>Scrollable Table</mark></p>
                </div>

                <div className="row">
                    <div className="col-12 table-col">

                        {/* student content */}
                        <table className="container">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Class</th>
                                <th>Blood Group</th>
                                <th>Action</th>
                            </tr>

                            {
                                data.map((ele, ind) => (
                                    <tr key={ind}>
                                        <td>{ind + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.age}</td>
                                        <td>{ele.gender}</td>
                                        <td>{ele.class}</td>
                                        <td>{ele.bloodGroup}</td>


                                        {/* buttons */}
                                        <td>
                                            <div className="button-group" style={{ display: "flex" }}>

                                                {/* Edit */}
                                                <button className="btn btn-primary" onClick={() => (history.push(`/edit/${ind}`), setInd(ind))}>Edit</button>

                                                {/* Delete */}
                                                <button className="btn btn-danger" onClick={() => deleteStudent(data[ind].id)}>Delete</button>


                                            </div>
                                        </td>



                                    </tr>
                                ))

                            }

                        </table>


                    </div>
                </div>
            </div>



        </Base>
    );
}





export default Studentsprofiles
