import React from 'react';
import { useParams  } from 'react-router-dom';
import { books } from "seed.js";

const BookDetailPage = () => {
    const { bookName } = useParams();
    const decodedbookName = encodeURIComponent(bookName);
    const book = books.find(
      (book) => encodeURIComponent(book.title) === decodedBookName
    );
  
    if (!book) return <div>book not found</div>;
  
    return (
      <div>
        <h1>{book.title}</h1>
        <img src={book.posterPath} alt={book.title} />
        <p>Release Date: {book.releaseDate}</p>
        <p>Cast: {book.cast.join(", ")}</p>
      </div>
    );
  };
  
  export default BookDetailPage;