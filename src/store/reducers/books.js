import * as actionTypes from './../actions/actionTypes';

const initialState = {
    showSearchPage: false,
    books: [],
    searchBooks: [],
    comments: [],
    searchText: "",
    shelves: [{title: "Currently Reading", code: "currentlyReading"}, {title: "Want to Read", code: "wantToRead"}, {title: "Read", code: "read"}, {title: "None", code: "None"}]
}

const books = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ALL_BOOKS:
            return setAllBooks(state, action);
        case actionTypes.LOAD_SEARCH_BOOKS:
            return setAllSearch(state, action);
        default:
            return state;
    }
};


const setAllBooks = (state, action) => {
    return {
        ...state,
        books: action.books
    };
}

const setAllSearch = (state, action) => {
    return {
        ...state,
        searchBooks: action.searchBooks,
        searchText: action.searchText,
    };
}


export default books;
