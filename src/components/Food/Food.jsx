/* eslint-disable */
import '../../App.css';


function Food({ data }) {

    function formatDate(dateString) {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).format(date);
    }

    return (
        <div className='foodCard'>
            <div className="image">
                <img src={data.image.display.url} />
            </div>
            <div className="info">
                <div className='infoTags'>
                    <div className="foodTag tag">{(data.title).split(/\s+/, 1)}</div>
                    <div className="location">{(data.title).split(/\s+/).slice(1).join(' ')}</div>
                </div>
                <p className="description">{data.description}</p>
                <div className="date">{formatDate(data.created_at)}</div>
            </div>
        </div>
    );
}

export default Food;