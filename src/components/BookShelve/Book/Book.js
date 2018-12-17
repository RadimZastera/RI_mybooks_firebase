import React from 'react';
import connect from "react-redux/es/connect/connect";
import * as actions from "../../../store/actions/books";

const book = (props) => {

    let thumbnail = "";
    try {
        thumbnail = props.book.imageLinks.thumbnail;
    } catch (e) {
        // just without picture
    }

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            "url(" + thumbnail + ")",
                    }}
                />
                <div className="book-shelf-changer">
                    <select value={props.book.shelf} onChange={(e) => {
                        props.shelveChangeHandler(props.book, e)
                    }}>
                        <option value="move" disabled>
                            Move to...
                        </option>
                        {props.shelves.map((shelve) => {
                            return <option key={shelve.code} value={shelve.code}>{shelve.title}</option>
                        })}

                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
        </div>
    )
};

const mapStateToProps = state => {
  return {
      shelves: state.bookReducer.shelves
  };
};

const mapDispatchToProps = dispatch => {
  return {
      shelveChangeHandler: (bookId,event) => dispatch(actions.shelveChangeHandler(bookId,event)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( book );

