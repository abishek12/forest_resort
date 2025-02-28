import React from 'react';
import BlogPostData from '../../jsonData/BlogPostData.json'
import SingleBlogContentV1 from './SingleBlogContentV1';
import Pagination from '../others/Pagination';

const BlogStandardContent = () => {
    return (
        <>
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="blog-item-box">
                                {BlogPostData.map(blog =>
                                    <SingleBlogContentV1 blog={blog} key={blog.id} />
                                )}
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStandardContent;