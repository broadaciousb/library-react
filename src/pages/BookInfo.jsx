import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const BookInfo = ({ books }) => {
  <div id="books__body">
    <main id="books__main">
      <div className="books__container">
        <div className="row">
          <div className="book__selected--top">
            <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/book" className="book__link">
              <h2 className="book__selected--title--top">Books</h2>
            </Link>
          </div>
        </div>
      </div>
    </main>
  </div>
}

export default BookInfo