import '../../App.css';
import fittr from '../../assets/images/fittr.png';
import yogAI from '../../assets/images/yogAI.png';
import Title from '../Title';
import Project from './Project';


function Projects() {
    return (
        <div>
            <Title title="Projects" />
            <div className="projectsContainer">
                <div className='firstProjects'>
                    <Project
                        year="2022"
                        projectName="The Odin Project"
                        projectDescription={`For the past year, I have been following <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">The Odin Project&aposs</a> course for Full Stack Development. I&aposve done various of their practical assignments and can be seen on <a href="https://github.com/stars/cris-maillo/lists/the-odin-project" target="_blank" rel="noopener noreferrer">GitHub</a>.`}
                    />
                    <Project
                        year="2022"
                        projectName="Starship.toml"
                        projectDescription={`<a href="https://github.com/cris-maillo/prettystarshipconfig" target="_blank" rel="noopener noreferrer">.TOML file</a> of my starship.rs config to make my shell look pretty with documentation on how to make it work on Windows.`}
                    />
                </div>
                <Project
                    year="2021"
                    imgSrc={fittr}
                    projectName="Fittr.AI"
                    projectDescription={`Fittr.AI was my final year dissertation topic where I aimed to explore the viability and usability issues when using ML-models for exercising. The application I built and then validated is available <a href="https://fittrai.com/" target="_blank" rel="noopener noreferrer">here</a> and my paper is available upon request.`}
                />
                <Project
                    year="2020"
                    imgSrc={yogAI}
                    projectName="YogAI"
                    projectDescription={`I created <a href="https://cris-maillo.github.io/yogAI/" target="_blank" rel="noopener noreferrer">yogAI</a> inspired by various Machine Learning models for visual recognition I experimented with during my internship. YogAI is built using <a href="https://www.tensorflow.org/lite/models/pose_estimation/overview" target="_blank" rel="noopener noreferrer">Pose.Net</a>, developed by TensorFlow, and <a href="https://ml5js.org/" target="_blank" rel="noopener noreferrer">ml5.js</a>. You can watch me speak about it <a href="https://youtu.be/mW6Z9TIqNUQ" target="_blank" rel="noopener noreferrer">here</a> and you can access its public repo <a href="https://github.com/cris-maillo/yogAI" target="_blank" rel="noopener noreferrer">here</a>.`}
                />
            </div>
        </div>
    );
}

export default Projects;