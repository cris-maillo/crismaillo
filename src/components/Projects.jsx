import React from 'react';
import './../index.css';


function Projects() {
  return (
    <div>
      <div class="textHeading">
        <h2>Projects</h2> 
      </div>
      <div class="projectsContainer">
        <div class="project">
            <div class="projectYear">
              <h5>2022</h5>
            </div>
            <div class="projectName">
              <h3>The Odin Project</h3>
            </div>
            <div class="projectDescription" style="paddingBottom: 40px;">
                <p>For the past year I have been following <a href="https://www.theodinproject.com/" target="_blank">The Odin Project's</a> course for Full Stack Development.
                I've done various of their practical assigments and can be seen on <a href="https://github.com/stars/cris-maillo/lists/the-odin-project" target="_blank">GitHub</a>.</p>
            </div>
            <div class="projectYear">
                <h5>2022</h5>
            </div>
            <div class="projectName">
                <h3>Starship.toml</h3>
            </div>
            <div class="projectDescription">
                <p><a href="https://github.com/cris-maillo/prettystarshipconfig" target="_blank">.TOML file</a> of my starship.rs config to make my shell look pretty with documentation on how to make it work on Windows.</p>
            </div>
        </div>
        <div class="project">
            <div class="projectYear">
                <h5>2021</h5>
            </div>
            <div class="projectImg">
                <img src="imgs/fittr.png"/>
            </div>
            <div class="projectName">
                <h3>Fittr.AI</h3>
            </div>
            <div class="projectDescription">
                <p>Fittr.AI was my final year dissertation topic where I aimed to explore the viability and usability issues 
                    when using ML-models for exercising.<br/>The application I built and then validated is available <a href="https://fittrai.com/" target="_blank">here</a> and my
                    paper is available upon request.
                </p>
            </div>
        </div>
        <div class="project">
            <div class="projectYear">
                <h5>2020</h5>
            </div>
            <div class="projectImg">
                <img src="imgs/yogAI.png"/>
            </div>
            <div class="projectName">
                <h3>YogAI</h3>
            </div>
            <div class="projectDescription">
                <p>I created <a href="https://cris-maillo.github.io/yogAI/" target="_blank">yogAI</a> inspired by various Machine Learning models for visual recognition I experimented with 
                    during my internship.<br/>YogAI is built using <a href="https://www.tensorflow.org/lite/models/pose_estimation/overview" target="_blank">Pose.Net</a>,
                     developed by TensorFlow, and <a href="https://ml5js.org/" target="_blank">ml5.js</a>.<br/>You can watch me speak about it <a href="https://youtu.be/mW6Z9TIqNUQ" target="_blank">here</a> and you can access its public repo <a href="https://github.com/cris-maillo/yogAI" target="_blank">here</a>.</p>
            </div>
        </div>
        
    </div>
    </div>

  );
}

export default Projects;