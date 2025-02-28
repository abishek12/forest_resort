import React from 'react'
import BlogCommentData from '../../jsonData/BlogCommentData.json'
import SingleBlogComment from './SingleBlogComment';

const BlogComment = ({ blogInfo }) => {
    const { title } = blogInfo

    return (
        <>
            <div className="comments-title">
                <h3>{`3 Comments On “${title}”`}</h3>
                <div className="comments-list">
                    {BlogCommentData.map(comment =>
                        <SingleBlogComment comment={comment} key={comment.id} />
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogComment;