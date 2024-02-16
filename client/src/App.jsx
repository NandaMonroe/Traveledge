import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Dash from './Components/Dash';
import Main from './Components/Main';
import AddPlace from './Components/AddPlace';
import OnePlace from './Components/OnePlace';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path='/welcome' element={<Dash />} />
        <Route path='/places' element={<Main />} />
        <Route path='/places/add' element={<AddPlace />} />
        <Route path='/places/view/:id' element={<OnePlace />} />
      </Routes>
    </>
  )
}

export default App
