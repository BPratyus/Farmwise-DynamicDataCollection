import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import DisplayFields from './components/DisplayFields';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [rows, setRows] = useState([]); // Set the initial state for rows

  const onRowsUpdate = (updatedRows) => {
    setRows(updatedRows); // Update the state with the new rows
  };

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Form onRowsUpdate={onRowsUpdate}/>}/>
        
        <Route exact path='/display' element={
        
        <div className='container my-5'>
        <DisplayFields rows={rows}/>
        </div>
        
        }/>
        
      </Routes>
    </Router>
    </>

  );
}

export default App;
