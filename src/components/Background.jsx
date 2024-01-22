import './../App.css';
import yellow2 from '../assets/images/yellow2.svg';
import yellow from '../assets/images/yellow.svg';
import green from '../assets/images/green.svg';


function Background() {
  return (
    <div className="background">
        <div>
            <img className="greenSvg" src={green} alt="Blur" />
        </div>
        <div>
            <img className="yellowSvg" src={yellow} alt="Blur"/>
        </div>
        <div>
            <img className="bottomSvg" src={yellow2} alt="Blur" />
        </div>
    </div>
)}

export default Background;