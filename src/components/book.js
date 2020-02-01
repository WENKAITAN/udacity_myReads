import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './shelfChanger';


const Book = props => {
    const { book, books, changeShelf } = props;

    // add fallbacks for missing cover images and title
    const coverImg =
        book.imageLinks && book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail
            : null;
    const title = book.title ? book.title : 'No title available';

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}
                    />
                    <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
                </div>
                <div className="book-title">{title}</div>
                {/* Check for authors and render each on separate line if exist*/
                    book.authors &&
                    book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>
                            {author}
                        </div>
                    ))}
            </div>
        </li>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default Book;