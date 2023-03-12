import * as React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Details from './page/Details';
import Preview from './page/Preview';
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Details' element={<Details/>}/>
      <Route path='/Preview' element={<Preview/>}/>
    </Routes>
    </>
  );
}

export default App;