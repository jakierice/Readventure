import React, { Component } from 'react';

export default class extends Component {
  state = {
    books: []
  };

  componentDidUpdate(prevProps) {
    if (prevProps.title !== this.props.title) {
      console.log('GoogleBooks did update');
      this.getBooks();
    }
  }

  getBooks = async () => {
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=:${
        this.props.title
      }&maxResults=10&maxAllowedMaturityRating=not-mature`
    );
    const books = await data.json();

    this.setState({ books: books.items });
  };

  render() {
    return this.props.children(this.state.books);
  }
}
