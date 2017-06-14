import React, { Component } from 'react';
import './CommentText.css'
import './Comments.css'


class CommentText extends Component{
    render(){
        return(
            <form>
                <input name="textbox" placeholder="Got something to say? We dig it." type="textbox" className="textbox" autofocus/>
                <a className="article-link" href="#">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Say Something Inflammatory!</span>
                </a>
            </form>
        )
    }
}
export default CommentText