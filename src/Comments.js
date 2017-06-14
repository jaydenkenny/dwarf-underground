import React, { Component } from 'react';
import './Comments.css'
import CommentText from './CommentText'

class Comments extends Component{
    // constructor(){
    // super()
    //     if(){
    //         return(
    //             <div>
    //                 <CommentText />
    //             </div>
    //         )
    //     }
    // }
    render(){
        return(
                <a className="article-link" href="#">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
        )
    }
}

export default Comments
