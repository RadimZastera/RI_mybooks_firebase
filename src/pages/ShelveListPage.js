import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import * as actions from "../store/actions/books";
import BookShelve from "../components/BookShelve/BookShelve";

class ShelveListPage extends React.Component {

    componentDidMount() {
        this.props.initialLoadBooks();
    }


    filterBooksByShelve = (shelve) => {
        return this.props.books.filter((book, index) => {
            return book.shelf === shelve;
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.shelves.filter((shelve) => {
                            return shelve.code !== "None"
                        }).map((shelve, index) => {
                            return <BookShelve key={shelve.code}
                                               books={this.filterBooksByShelve(shelve.code)}
                                               shelve={shelve}/>
                        })}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
                <div className="open-comments" title={'Add comment'}>
                    <Link to="/comments">
                        <button>Add comment</button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
      books: state.bookReducer.books,
      shelves: state.bookReducer.shelves
  };
};

const mapDispatchToProps = dispatch => {
  return {
      initialLoadBooks: () => dispatch(actions.initialLoadBooks())

  };
};

export default connect( mapStateToProps, mapDispatchToProps )( ShelveListPage );
