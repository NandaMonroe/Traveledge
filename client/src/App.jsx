import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Dash from './Components/Dash';
import Main from './Components/Main';
import AddPlace from './Components/AddPlace';
import OnePlace from './Components/OnePlace';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/index" />} />
        <Route path='/index' element={<Dash />} />
        <Route path='/places' element={<Main />} />
        <Route path='/places/add' element={<AddPlace />} />
        <Route path='/places/:id' element={<OnePlace />} />
      </Routes>
    </>
  )
}

export default App
