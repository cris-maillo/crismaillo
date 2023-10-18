import React from 'react';
import './../index.css';


function Text() {
  return (
    <div>
      <div class="headerContainer">
        <div class="textHeading">
          <h2>Texts</h2> 
        </div>
        <div class="tags">
          <div class="tag">cooking</div>
          <div class="tag">crafting</div>
          <div class="tag">ambling</div>
          <div class="tag">surfing (the web)</div>
        </div>
      </div>
      <div class="textContainer">
        <div class="articleContainer" data-theme="cooking"><a href="articles/okonomiyaki.html">
            <div class="articleTitle">
                <h3>Okonomiyaki</h3>
            </div>
            <div class="articleDate">
                <h5>Wed 28 June</h5>
            </div>
            <div class="articleDescription">
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