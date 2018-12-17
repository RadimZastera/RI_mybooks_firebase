import React from 'react';
import {Link} from "react-router-dom";
import Book from "../components/BookShelve/Book/Book";
import * as actions from "../store/actions/books";
import connect from "react-redux/es/connect/connect";

class SearchPage extends React.Component {
     render() {
        let booksOut = "";
        if (this.props.searchBooks && this.props.searchBooks.length > 0) {
            booksOut = this.props.searchBooks.map((book, index) => {
                return <li key={'li' + book.id}><Book shelves={this.props.shelves} shelveChangeHandler={this.props.changeShelveEventHandler} key={book.id} book={book}/></li>
            })
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.props.searchText} onChange={this.props.searchBooksHandler} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {booksOut}
                    </ol>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
  return {
      searchBooks: state.bookReducer.searchBooks,
      shelves: state.bookReducer.shelves,
      searchText: state.bookReducer.searchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
      searchBooksHandler: (event) => dispatch(actions.searchBooksHandler(event))

  };
};

export default connect( mapStateToProps, mapDispatchToProps )( SearchPage );
