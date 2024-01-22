/* eslint-disable */
import '../../App.css';

function Resource({ href, children }) {
  return (
    <div className="resource">
      <p>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </p>
    </div>
  );
}

export default Resource;