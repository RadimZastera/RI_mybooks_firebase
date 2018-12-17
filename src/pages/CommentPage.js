import React from 'react';
import {Link} from "react-router-dom";

import * as actions from "../store/actions/database";
import connect from "react-redux/es/connect/connect";

class SearchPage extends React.Component {
    state = {
        commentText: "neco maleho",
        email: "radim@zastera.eu",
        password: "password"
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

    updateEmail = (event) => {
        const textik = event.target.value;
        this.setState({
            ...this.state,
            email: textik
        });
    };

    updatePassword = (event) => {
        const textik = event.target.value;
        this.setState({
            ...this.state,
            password: textik
        });
    };

    onClickSave(){
        if (this.state.commentText !== "") {
            this.props.saveComment({
                text: this.state.commentText,
                date: Date.now()
            });
            this.setState({
                ...this.state,
                commentText: ""
            });
        }
    }

    loginToDB(){
       this.props.loginToDB(this.state.email , this.state.password)
    }

    render() {
        let booksOut = "";
        if (this.props.comments && this.props.comments.length > 0) {
            booksOut = this.props.comments.map((comment, index) => {
                return <li key={'li' + index}><div>{comment.date}</div> <div>{comment.text}</div></li>
            })
        }

        let informationBar = "";
        let buttons = "";
        if (this.props.token) {
            informationBar = <input type="text" value={this.state.commentText} onChange={this.updateText} placeholder="Place some comments here"/>
        } else {
            informationBar = (
                <>
                    <input type="text" value={this.state.email} onChange={this.updateEmail} placeholder="email"/>
                    <input type="text" value={this.state.password} onChange={this.updatePassword} placeholder="password"/>
                </>
            )
        }

        if (this.props.token) {
            buttons = (
                <>
                    <button onClick={()=>this.onClickSave()}>save</button>
                    <button onClick={this.props.loadComments}>load</button>
                </>
            )
        } else {
            buttons = <button onClick={()=>this.loginToDB()}>login</button>

        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-comments-input-wrapper">
                        {informationBar}
                    </div>
                    <div className="right-container">
                        {buttons}
                    </div>
                </div>
                <div className="search-books-results">
                    <ol>
                        {booksOut}
                    </ol>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.databaseReducer.token,
        comments: state.databaseReducer.comments,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveComment: (comment) => dispatch(actions.saveComment(comment)),
        loadComments: (comment) => dispatch(actions.loadComments(comment)),
        loginToDB: (email,password) => dispatch(actions.loginToDB(email,password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
