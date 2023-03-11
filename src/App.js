import { useState } from 'react';
import './App.css';
import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

function App() {
    const [hover,setHover]=useState(false)
  
  const imagehover = ()=> {
    setHover(true)
  }
  setHover(false)

  return (
    <>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="https://static.startuptalky.com/2020/09/AImaBetter-Logo-_-Startuptalky.jpg" style={{ width: '150px' }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Resume Templates</a>
              <a className="nav-link active" href="#">My Resume</a>
              <a className="nav-link active" href="#">About Us</a>
            </div>
          </div>
        </div>
      </nav>
      {/* <br /> */}
      <h1>Templates</h1>
      <p>select a Template to get Started</p>
      <main className='main-content'>

        { hover ?  <button>use template</button>:<a href="#"><img src="https://d.novoresume.com/images/doc/functional-resume-template.png" alt="" onMouseOver={imagehover} /></a>}
        <a href="#"> <img src="https://marketplace.canva.com/EAE5vWhbOxA/1/0/1131w/canva-beige-modern-simple-professional-resume-template-roDe7ea2PCk.jpg" alt="" /></a>
        <a href="#"><img src="https://marketplace.canva.com/EAE5VuQRvl8/1/0/1131w/canva-navy-blue-minimalist-professional-simple-cv-resume-G59iSrw-09M.jpg" alt="" /></a>
        <a href="#"><img src="https://marketplace.canva.com/EAFCS9QeDYo/4/0/1131w/canva-minimalist-cv-resume-SjX0yZYMJWk.jpg" alt="" /></a>

      </main>
    
    </>
  );
}

export default App;