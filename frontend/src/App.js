
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Gform from './Gform';
import Success from './Success';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Gform/>}/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
