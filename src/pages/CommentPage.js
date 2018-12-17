import React from 'react';
import {Link} from "react-router-dom";

import * as actions from "../store/actions/database";
import connect from "react-redux/es/connect/connect";

class SearchPage extends React.Component {
    state = {
        commentText: "neco maleho"
    }

    componentDidMount() {
        //load all comments
    }

    updateText = (event) => {
        const textik = event.target.value;
        this.setState({
            ...this.state,
            commentText: textik
        });
    };

    render() {
        let booksOut = "";
        if (this.props.comments && this.props.comments.length > 0) {
            booksOut = this.props.comments.map((comment, index) => {
                return <li key={'li' + index}>{comment}</li>
            })
        }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.commentText} onChange={this.updateText} placeholder="Place some comments here"/>
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
        comments: state.bookReducer.comments,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveComment: (comment) => dispatch(actions.saveComment(comment))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
