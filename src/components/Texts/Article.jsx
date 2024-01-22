import './../App.css';


function Article() {
  return (
    <div>
        <div className="articleHead">
            <div className="returnButton">
                <h5><a href="/./text.html">← back</a></h5>
            </div>
            <div className="articleTitle">
                <h2>Okonomiyaki</h2>
            </div>
        </div>

        <div className="textContainer article">
            <div className="articleText">

            </div>
        </div>
    </div>
  );
}

export default Article;