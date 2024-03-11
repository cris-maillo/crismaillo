/* eslint-disable */
import { useState, useEffect } from 'react';
import '../../App.css';

import Title from './../Title';
import Tag from './Tag';
import ArticlePreview from './ArticlePreview';

function Text() {
  const initialTags = ["cooking", "crafting", "ambling", "surfing (the web)"];
  const initialArticles = [
    {
      tag: "cooking",
      href: "articles/okonomiyaki.html",
      title: "Okonomiyaki",
      date: "Wed 28 June 2023",
      description: "I have a slight obsession with Okonomiyaki. In my opinion, it is a better omelette version compared to my own country (Tortilla Española), as it has more veg, uses way way less oil than the Spanish version, and slathering it in Kewpie mayo is not only not frowned upon but encouraged."
    },
    {
      tag: "ambling",
      href: "articles/london-guide.html",
      title: "London Guide 2024",
      date: "Sat 9 March 2024",
      description: "My recommendations in London, by neighbourghood, with a focus on food, of course."
    },
    {
      tag: "crafting",
      href: "articles/cyanotype.html",
      title: "Sun Printing and some thoughts on art or creating",
      date: "Thurs 20 July 2023",
      description: "or cyanotype making"
    }
  ];

  const [selectedTags, setSelectedTags] = useState([]);
  const [articles, setArticles] = useState([]);

  const toggleTag = (tag) => {
    const index = selectedTags.indexOf(tag);
    if (index === -1) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    }
  };

  useEffect(() => {
    setArticles(initialArticles); 
  }, []);

  useEffect(() => {
    if (selectedTags.length === 0) {
      setArticles(initialArticles);
    } else {
      const filteredArticles = initialArticles.filter(article =>
        selectedTags.includes(article.tag)
      );
      setArticles(filteredArticles);
    }
  }, [selectedTags]);

  return (
    <div>
      <div className="headerContainer">
        <Title title="Texts"/>
        <div className="tags">
          {initialTags.map((tag, index) => (
            <Tag
              key={index}
              text={tag}
              onClick={() => toggleTag(tag)}
              isSelected={selectedTags.includes(tag)}
            />
          ))}
        </div>
      </div>
      <div className="textContainer">
        {/* {articles.map((article, index) => (
          <ArticlePreview
            key={index}
            tag={article.tag}
            href={article.href}
            title={article.title}
            date={article.date}
            description={article.description}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Text;

