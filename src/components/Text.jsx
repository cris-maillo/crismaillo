import React from 'react';
import './../index.css';


function Text() {
  return (
    <div>
      <div className="headerContainer">
        <div className="textHeading">
          <h2>Texts</h2> 
        </div>
        <div className="tags">
          <div className="tag">cooking</div>
          <div className="tag">crafting</div>
          <div className="tag">ambling</div>
          <div className="tag">surfing (the web)</div>
        </div>
      </div>
      <div className="textContainer">
        <div className="articleContainer" data-theme="cooking"><a href="articles/okonomiyaki.html">
            <div className="articleTitle">
                <h3>Okonomiyaki</h3>
            </div>
            <div className="articleDate">
                <h5>Wed 28 June</h5>
            </div>
            <div className="articleDescription">
                <p>I have a slight obsession with Okonomiyaki. 
                    In my opinion, it is a better omelette version compared to my own country (Tortilla Española), 
                    as it has more veg, uses way <i>way</i> less oil than the Spanish version, and slathering it in Kewpie mayo is not only not 
                    frowned upon but encouraged. </p>
            </div>
        </a></div>
    </div>
    </div>
  );
}

export default Text;