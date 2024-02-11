import '../App.css';

function LoadingBar() {
    return(
        <div className='loadingBarContainer'>
            <p>fetching</p>
            <div className="loadingBar">
                <div className="loadingBarProgress"></div>
            </div>
        </div>
    )
}

export default LoadingBar;