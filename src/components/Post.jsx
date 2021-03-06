import React, { Component } from 'react'
import { connect } from 'react-redux';
import {deletePost} from '../actions/postActions'

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
    render() {
        let { post } = this.props;
        if(!post){
            post = {
                id: 20,
                title: 'No Post',
                content: 'Couldn\'t get post now, perhaps no internet, Try again when you are online'
            }
        }

        return (
            <div className="container post">
                <h4 className="center red darken-3">{post.title}</h4>
                <p>{post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)