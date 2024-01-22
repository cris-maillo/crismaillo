/* eslint-disable */
import '../../App.css';
import IMG1812 from '../../assets/images/film/IMG_1812.jpeg';


function Food({ data }) {

    return (
        <div>
            <div className="image">
                <img src={IMG1812} />
            </div>
            <div className="info">
                <div className="foodTag">{data.type}</div>
                <div className="location">{data.location}</div>
                <div className="description">{data.description}</div>
                <div className="date">{data.date}</div>
            </div>
        </div>
    );
}

export default Food;