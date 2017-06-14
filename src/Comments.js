import React, { Component } from 'react';
import './Comments.css'
import CommentText from './CommentText'

class Comments extends Component{
    constructor(){
    super()
        this.state = {
            showComments:false
        }
    }
    
    render(){
        let textbox 
        if(false){
            textbox=
                <div>
                    <CommentText />
                </div>
        }
        return(
                <div>
                <a className="article-link" href="#">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                {textbox}
                </div>
        )
    }
}

export default Comments
