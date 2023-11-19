import React from 'react';
import '../../index.css';

import Title from './../Title';
import Tag from './Tag';
import Article from './Article';

function Text() {
  const tags = ["cooking", "crafting", "ambling", "surfing (the web)"];

  return (
    <div>
      <div className="headerContainer">
        <Title title="Texts" />
        <div className="tags">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
      <div className="textContainer">
        <Article
          theme="cooking"
          href="articles/okonomiyaki.html"
          title="Okonomiyaki"
          date="Wed 28 June"
          description="I have a slight obsession with Okonomiyaki. In my opinion, it is a better omelette version compared to my own country (Tortilla Española), as it has more veg, uses way way less oil than the Spanish version, and slathering it in Kewpie mayo is not only not frowned upon but encouraged."
        />
      </div>
    </div>
  );
}

export default Text;
