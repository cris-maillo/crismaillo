/* eslint-disable */
import { useState, useEffect } from 'react';
import '../../App.css';

import Title from '../Title';
import Tag from './Tag';
import ArticlePreview from './ArticlePreview';
import matter from 'gray-matter';
import articleFiles from './articles/index';
import { Link } from 'react-router-dom';

function Text() {
  const initialTags = ["cooking", "crafting", "ambling", "surfing (the web)"];
  const [selectedTags, setSelectedTags] = useState([]);
  const [articles, setArticles] = useState([]);
  const [initialArticles, setInitialArticles] = useState([]);

  useEffect(() => {
    Promise.all(articleFiles)
      .then(files => {
        return Promise.all(files.map(file => fetch(file.default).then(response => response.text())));
      })
      .then(contents => {
        const articlesWithMetadata = contents.map(content => {
          const { data } = matter(content);
          return {
            id: data.id,
            title: data.title,
            date: data.date,
            tag: data.tag,
            description: data.description,
          };
        });
        setArticles(articlesWithMetadata);
        setInitialArticles(articlesWithMetadata);
      })
      .catch(error => {
        console.error("Error loading articles:", error);
      });
  }, [])


  const toggleTag = (tag) => {
    const index = selectedTags.indexOf(tag);
    if (index === -1) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    }
  };

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
        {articles.map((article, index) => (
          <Link to={`/article/${article.id}`} key={index} style={{ textDecoration: 'none' }}>
            <ArticlePreview
              tag={article.tag}
              title={article.title}
              date={article.date}
              description={article.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Text;

