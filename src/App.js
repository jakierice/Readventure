import React, { Component } from 'react';
import { BookSearch } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <BookSearch>
          {books => (
            <ul>
              {books.map(book => (
                <li>{book.volumeInfo.title}</li>
              ))}
            </ul>
          )}
        </BookSearch>
      </div>
    );
  }
}

export default App;
