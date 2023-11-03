import React from 'react';
import './../index.css';
import fittr from '../assets/images/fittr.png';
import yogAI from '../assets/images/yogAI.png';


function Projects() {
  return (
    <div>
      <div className="textHeading">
        <h2>Projects</h2> 
      </div>
      <div className="projectsContainer">
        <div className="project">
            <div className="projectYear">
              <h5>2022</h5>
            </div>
            <div className="projectName">
              <h3>The Odin Project</h3>
            </div>
            <div className="projectDescription" style={{paddingBottom: '40px'}}>
                <p>For the past year I have been following <a href="https://www.theodinproject.com/" target="_blank" rel="noreferrer">The Odin Project's</a> course for Full Stack Development.
                I've done various of their practical assigments and can be seen on <a href="https://github.com/stars/cris-maillo/lists/the-odin-project" target="_blank" rel="noreferrer">GitHub</a>.</p>
            </div>
            <div className="projectYear">
                <h5>2022</h5>
            </div>
            <div className="projectName">
                <h3>Starship.toml</h3>
            </div>
            <div className="projectDescription">
                <p><a href="https://github.com/cris-maillo/prettystarshipconfig" target="_blank" rel="noreferrer">.TOML file</a> of my starship.rs config to make my shell look pretty with documentation on how to make it work on Windows.</p>
            </div>
        </div>
        <div className="project">
            <div className="projectYear">
                <h5>2021</h5>
            </div>
            <div className="projectImg">
                <img src={fittr} alt="screenshot of fittr app's landing page"/>
            </div>
            <div className="projectName">
                <h3>Fittr.AI</h3>
            </div>
            <div className="projectDescription">
                <p>Fittr.AI was my final year dissertation topic where I aimed to explore the viability and usability issues 
                    when using ML-models for exercising.<br/>The application I built and then validated is available <a href="https://fittrai.com/" target="_blank" rel="noreferrer">here</a> and my
                    paper is available upon request.
                </p>
            </div>
        </div>
        <div className="project">
            <div className="projectYear">
                <h5>2020</h5>
            </div>
            <div className="projectImg">
                <img src={yogAI} alt="screenshot of yogAI's landing page"/>
            </div>
            <div className="projectName">
                <h3>YogAI</h3>
            </div>
            <div className="projectDescription">
                <p>I created <a href="https://cris-maillo.github.io/yogAI/" target="_blank" rel="noreferrer">yogAI</a> inspired by various Machine Learning models for visual recognition I experimented with 
                    during my internship.<br/>YogAI is built using <a href="https://www.tensorflow.org/lite/models/pose_estimation/overview" target="_blank" rel="noreferrer">Pose.Net</a>,
                     developed by TensorFlow, and <a href="https://ml5js.org/" target="_blank" rel="noreferrer">ml5.js</a>.<br/>You can watch me speak about it <a href="https://youtu.be/mW6Z9TIqNUQ" target="_blank" rel="noreferrer">here</a> and you can access its public repo <a href="https://github.com/cris-maillo/yogAI" target="_blank" rel="noreferrer">here</a>.</p>
            </div>
        </div>
        
    </div>
    </div>

  );
}

export default Projects;