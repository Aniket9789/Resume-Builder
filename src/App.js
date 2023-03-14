import * as React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './component/navbar/Navbar';
import About from './page/About';
import Details from './page/Details';
import Preview from './page/Preview';
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Details' element={<Details/>}/>
      <Route path='/Preview' element={<Preview/>}/>
    </Routes>
    </>
  );
}

export default App;