import React from 'react';
import Pagination from '../others/Pagination';
import BlogColumnData from '../../jsonData/BlogColumnData.json'
import SingleBlog3Column from './SingleBlog3Column';

const Blog3ColumnContent = () => {
    return (
        <>
            <div className="blog-area blog-grid-colum default-padding">
                <div className="container">
                    <div className="row">
                        {BlogColumnData.map(blog =>
                            <div className="col-lg-4 col-md-6 mb-50" key={blog.id}>
                                <SingleBlog3Column blog={blog} />
                            </div>
                        )}
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default Blog3ColumnContent;