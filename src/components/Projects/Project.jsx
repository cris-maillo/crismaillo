/* eslint-disable */
import '../../App.css';

function Project({ year, imgSrc, projectName, projectDescription }) {
    const createMarkup = (description) => ({ __html: description });

    return (
    <div className="project">
        <div className="projectYear">
            <h5>{year}</h5>
        </div>
        {imgSrc && (
            <div className="projectImg">
                <img src={imgSrc} alt={`screenshot of ${projectName}'s landing page`} />
            </div>
        )}
        <div className="projectName">
            <h3>{projectName}</h3>
        </div>
        <div className="projectDescription" dangerouslySetInnerHTML={createMarkup(projectDescription)}/>
    </div>
    );
}

export default Project;