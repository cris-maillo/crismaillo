import React from 'react';
import './../index.css';


function Okonomiyaki() {
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
            <p>I have a slight obsession with Okonomiyaki. In my opinion, it is a better omelette version compared to my own country (Tortilla Española), as it has more veg, uses way <i>way</i> less oil than the Spanish version, and slathering it in Kewpie mayo is not only not frowned upon but encouraged. 
                I have only tried it once from an actual Hiroshiman chef (<a href="https://www.pelliclemag.com/home/2021/3/8/fumio-tanga-bridging-the-izakaya-pub-divide-shofoodoh" target="_blank" rel="noreferrer">this article about him is a nice read</a>), however, I “cook” it religiously at home. 
                <br/><br/>You might have noticed the quotation marks around “cook” and this is because I won’t shy away from 
                admitting that I have taken extreme liberties on the original recipe that I first looked at (<a href="https://www.justonecookbook.com/okonomiyaki/" target="_blank" rel="noreferrer">Just One Cookbook</a>). Some ingredients I tend 
                to omit or replace just because they are a bit harder to find in London and others I skip as I prefer not to buy perishable ingredients that aren’t used entirely in a recipe.
                <br/>I am at peace with my modifications and I definitely will not claim authenticity of my recipe especially because (according to Wikipedia), 
                the name is derived from the word okonomi, meaning "how you like" or "what you like" and this is, no doubt, what I like.<br/><br/>
                Anyway, the Just One Cookbook recipe is great (it is based on the Kansai area Okonomiyaki variation), so I will leave that as the main resource and just note my adaptations:</p>
                <ul>
                    <li>I skip the Nagaimo as I haven’t found it anywhere and as a substitute use Baking Powder as recommended by Just One Cookbook</li>
                    <li>I use regular flour as an alternative to Okonomiyaki Flour</li>
                    <li>I normally use bacon over pork belly unless I am feeling fancy</li>
                    <li>I skip Tenkasu (Tempura Scraps) entirely</li>
                    <li>I always add green onions in the batter and as topping and usually grate carrot over the batter for some added nutrients.</li>
                    <li>I make my own homemade version of Okonomiyaki Sauce with JOC’s recipe too</li>
                    <li>I skip Katsuobushi entirely. It is fun to use and can be used to make Dashi but I have only seen it sold in big bags that ultimately go to waste in my kitchen.</li>
                    <li>And finally, I usually skip pickled red ginger too just because I haven’t tried it before but this can definitely be found in London.</li>
                </ul>
                <p>As a final note, I use the leftover cabbage to either make slaw or roasted cabagge, because there is always leftover cabbage.</p>
            </div>
        </div>
    </div>
  );
}

export default Okonomiyaki;