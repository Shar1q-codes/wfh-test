
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Artifacts from './Components/Artifacts/Artifacts';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop'
import About from './Components/About/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/artifacts' element={<Artifacts/> }/>
        <Route path='/shop' element={<Shop/> }/>
        <Route path='/about' element={ <About/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
