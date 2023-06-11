import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import ContactUs from './ContactUs';
import { useState } from 'react';
import contextData from './ContextAPI';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';

function App() {
  const [data,setData]=useState([
    {name:"John",age:"24",course:"MERN",batch:"October"},
    {name:"Doe",age:"25",course:"MERN",batch:"November"},
    {name:"Biden",age:"26",course:"MERN",batch:"September"},
    {name:"Barar",age:"22",course:"MERN",batch:"Setember"},
    {name:"Christ",age:"23",course:"MERN",batch:"October"},
    {name:"Elent",age:"24",course:"MERN",batch:"November"},
  ])
  return (
    <>
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={
        <contextData.Provider value={{entries:data,updateData:setData}}>
        <Student/>
        </contextData.Provider>
        }/>
        <Route path="/newstudent" element={
          <contextData.Provider value={{entries:data,updateData:setData}}>
          <AddStudent/>
          </contextData.Provider>
        }/>
        <Route path="/updatestudent" element={
          <contextData.Provider value={{entries:data,updateData:setData}}>
          <UpdateStudent/>
          </contextData.Provider>
        }/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/Home" element={<Home/>}/>


      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}
export default App;
