import React from 'react';
import '../../index.css';

function Resource({ href, children }) {
  return (
    <div className="resource">
      <p>
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      </p>
    </div>
  );
}

export default Resource;