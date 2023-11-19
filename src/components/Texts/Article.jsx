import React from 'react';

function Article({ theme, href, title, date, description }) {
  return (
    <div className="articleContainer" data-theme={theme}>
      <a href={href}>
        <div className="articleTitle">
          <h3>{title}</h3>
        </div>
        <div className="articleDate">
          <h5>{date}</h5>
        </div>
        <div className="articleDescription">
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default Article;