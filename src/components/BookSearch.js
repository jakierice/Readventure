import React, { Component } from 'react';
import BookInput from './BookInput';
import GoogleBooks from './GoogleBooks';

const BookSearch = ({ children }) => {
  return (
    <BookInput>
      {title => (
        <GoogleBooks title={title}>{books => children(books)}</GoogleBooks>
      )}
    </BookInput>
  );
};

export default BookSearch;
