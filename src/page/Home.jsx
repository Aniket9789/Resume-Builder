import React from 'react'
import './Home.css'
import Navbar from '../component/navbar/Navbar'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homecontent">
        <h1>The Ultimate Resume Builder</h1>
        <span>
          Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.
        </span>
        <br />
        <button className='trybtn'> <b>Try for Free</b></button>
      </div>
      <br />
      <hr />
      <div className="home-logo">
        <span><img src="https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659__340.jpg" alt="" /></span>

        <div className='promo'>
          <span><h1>Create a resume to land your next job</h1></span> <p> We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.
          </p>
          <button className='buildbtn'> <b>Build Your Resume</b></button>
        </div>
      </div>
      <br />
      <hr />
      <div className='last-div'>
        <img src="https://media.istockphoto.com/id/1128519333/photo/concept-of-love-giving-gifts-donorship.jpg?b=1&s=170667a&w=0&k=20&c=5zqlLDWKrxqwxh8Liha3uB-cbi8LgMB6qokeZDM6PFA=" alt="" />
        <h2>
        Why our customers love our resume builder
        </h2>
        <div className='homeheader'>Resume.io’s online builder tool and collection of elegant, recruiter-tested templates are used by more than 10 million people around the globe! We are incredibly proud to empower so many active professionals.</div>
        <button className='getbtn'>Get Started Now</button>
      </div>
      <footer> &copy; 2023 - Resume-Builder</footer>
    </div>
  )
}

export default Home
