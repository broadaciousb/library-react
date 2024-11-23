import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Book = ({ book }) => {
  const rating = 4;


  return (
    <div className="book">
      <Link to="/books/1">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <div className="book__ratings">
        {
          new Array(Math.floor(book.rating)).fill(0).map((_, index)=> <FontAwesomeIcon icon="star" key={index} />)
        }
        {
          !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />

        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <div>
            <span className="book__price--normal">{book.originalPrice.toFixed(2)}</span>$
            {book.salePrice.toFixed(2)}
          </div>
        ) : (
          <div>
            ${book.originalPrice.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
