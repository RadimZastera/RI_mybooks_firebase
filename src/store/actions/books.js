import * as actionTypes from "./actionTypes";
import * as BooksAPI from '../../BooksAPI'



const getAllBooks = (books) => {
    return {
        type: actionTypes.LOAD_ALL_BOOKS,
        books: books
    }
};

const getSearchBooks = (books,value) => {
    return {
        type: actionTypes.LOAD_SEARCH_BOOKS,
        searchBooks: books,
        searchText:value
    }
};

export const initialLoadBooks = () => {
    return dispatch => {
        BooksAPI.getAll().then(books => {
            dispatch(getAllBooks(books))
        });
    }
};

export const shelveChangeHandler = (bookToChange, event) => {
    return (dispatch) => {
        const shelveName = event.target.value;
        BooksAPI.update(bookToChange, shelveName).finally(() => {
            BooksAPI.getAll().then(books => {
                dispatch(getAllBooks(books))
            });
        });
    }
};

export const searchBooksHandler = (event) => {
    return (dispatch) => {
        const value = event.target.value;
        BooksAPI.search(value).then(searchBooks =>
            dispatch(getSearchBooks(searchBooks,value))
        );
    }
};






