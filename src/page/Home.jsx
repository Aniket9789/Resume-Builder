import React from 'react'
import './Home.css'
import Navbar from '../component/navbar/Navbar'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>The Ultimate Resume Builder</h1>
        <span>
          Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.
        </span>
        <br />
        <button className='btn' id='button onclick'> <b>Try for Free</b></button>
      </div>
      <hr />
      <div className="logo">
        <span><img src="https://lh3.googleusercontent.com/toiqVE-p79tI6I6Qj_FJEVD78tutS5GP2rjbnBwD_YS7jIXF73rgjsAL0ITANf4YnvjgZyr5kwyp77M34pyaOyjdrVPRt8qwMSz5G-3I" alt="" /></span>

        <div className='promo'>
          <span><h1>Create a resume to land your next job</h1></span> <p> We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.
          </p>
          <button className='btn' id='button' onClick={'go to next page'}> <b>Build Your Resume</b></button>
        </div>
      </div>
      <hr />
      <div className='last-div'>
        <img src="https://lh3.googleusercontent.com/QcDy1LJweaj54J1aqzIZvcYnjeD6K1MsK-_ee6WXxcg7Biiku4gQfs0pei98S-j1H4HS6RSpL7y-DcCJvRRmYfAadXou0ntaFfoYSZDA" alt="" />
        <h2>
        Why our customers love our resume builder
        </h2>
        <div className='header'>Resume.io’s online builder tool and collection of elegant, recruiter-tested templates are used by more than 10 million people around the globe! We are incredibly proud to empower so many active professionals.</div>
        <button className='btn' id='button onclick' >Get Started Now</button>
      </div>
      <footer> &copy; 2023 - Resume-Builder</footer>
    </div>
  )
}

export default Home
