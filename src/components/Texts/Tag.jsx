/* eslint-disable */

function Tag({ text, onClick, isSelected }) {
  return (
    <div className={`tag ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      {text}
    </div>
  );
}

export default Tag;