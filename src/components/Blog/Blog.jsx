import './Blog.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { audiance, author, authorImg, bannerImg, publishDate, time, title } = props.blogData

    return (
        <div style={{paddingBottom:'38px',borderBottom:'1px solid rgba(17, 17, 17, 0.10)',marginBottom:'38px'}}>
            <div className="blogImage">
                <img src={bannerImg} alt="sijan" />
            </div>
            <div className="blogAuthor">
                <div className="authorImage">
                    <img src={authorImg} alt="sijan" />
                </div>
                <div className="AuthorName">
                    <p className="authorName">{author}</p>
                    <p className="releaseDate">{publishDate}</p>
                </div>
                <div className="timeToRead">
                    <p>
                        {time} min read &nbsp;
                        <FontAwesomeIcon icon={faBookmark} />
                    </p>
                </div>
            </div>
            <h1 className="title">{title}</h1>
            <div className="audiance">
                <ul>
                    <li>{audiance[0]}</li>
                    <li>{audiance[1]}</li>
                </ul>
            </div>
            <a href="">Mark As Read</a>
        </div>
    );
};

export default Blog;