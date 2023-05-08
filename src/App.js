import './App.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import DashBoard from './Components/DashBoard';
import Studentsprofiles from './Components/Studentsprofiles';
import Teachersprofiles from './Components/Teachersprofiles';
import Add from './Components/Add';
import Edit from './Components/Edit';
import { useEffect, useState } from 'react';
import EditTeacher from './Components/EditTeacher';
import AddTeacher from './Components/AddTeacher';



function App() {
  const [data,setData]=useState([]);
  const [data2,setData2]=useState([]);
  const [ind,setInd]=useState();


  async function fetchStudents(){
    let response = await fetch("https://645899734eb3f674df7800be.mockapi.io/students", {
      method:"GET"
    });
    let result = await response.json();
    setData(result);
  }

  async function fetchTeachers(){
    let response = await fetch("https://645899734eb3f674df7800be.mockapi.io/teachers", {
      method:"GET"
    });
    let result = await response.json();
    setData2(result);
  }

  useEffect(() => {
    fetchStudents();
    fetchTeachers();
  }, []);



  return (
    <div className="App">
      
      
      <Switch>
        <Route exact path="/">
          <DashBoard
          stuData={data}
          techData={data2}
          ></DashBoard>
        </Route>

        <Route path="/student">
          <Studentsprofiles
          data={data}
          setData={setData}
          setInd={setInd}
          ></Studentsprofiles>
        </Route>


        <Route path="/teacher">
          <Teachersprofiles
          data={data2}
          setData={setData2}
          setInd={setInd}
          ></Teachersprofiles>
        </Route>


        <Route path="/add">
          <Add
          data={data}
          setData={setData}
          ></Add>
        </Route>


        <Route path="/addteacher">
          <AddTeacher
          data={data2}
          setData={setData2}
          ></AddTeacher>
        </Route>


        <Route path="/edit">
          <Edit
          ind={ind}
          setInd={setInd}
          data={data}
          setData={setData}
          ></Edit>
        </Route>



        <Route path="/editteacher">
          <EditTeacher
          ind={ind}
          setInd={setInd}
          data={data2}
          setData={setData2}
          ></EditTeacher>
        </Route>



      </Switch>


    </div>
  );
}

export default App;
