import { React } from "react";

const Card = (props) => {
  const { book, darkMode } = props;

  return (
    <div className="col">
      <div className="d-flex card-body-main">
        <p className="reading-progress">{book.progress}</p>
        <img src={book.thumbnail} alt="thumbnail" />
        <p className="genre">{book.genre}</p>
      </div>

      <div className="card-title">
        <p className="card-name" style={darkMode? {color: 'white'}: {color: '#1e1e1e'}}>{book.name}</p>
        <p className="card-author" style={darkMode? {color: '#969696'}: {color: '#696969'}}>{book.author}</p>
      </div>
    </div>
  );
};

export default Card;
