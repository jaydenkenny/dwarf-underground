import React, { Component } from 'react'
import './Article.css'
import Comments from './Comments'
import Share from './Share'
import TitleInfo from './TitleInfo'
import BodyInfo from './BodyInfo'

class Article extends Component{
    render(){
        return(
           <div className="large-8 medium-12 columns article">
               <TitleInfo />
                <BodyInfo />
                <div className="article-links">
                <Comments />
                <Share />
                </div>
          </div>
        )
    }
}

export default Article