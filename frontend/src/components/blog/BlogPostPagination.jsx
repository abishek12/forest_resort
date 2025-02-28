import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const BlogPostPagination = () => {
    return (
        <>
            <div className="post-pagi-area">
                <div className="post-previous">
                    <Link to={void (0)}>
                        <div className="icon"><i className="fa-solid fa-angle-double-left"></i></div>
                        <div className="nav-title"> Previous Post <h5>Discovery incommode</h5></div>
                    </Link>
                </div>
                <div className="post-next">
                    <Link to={void (0)}>
                        <div className="nav-title">Next Post <h5>Discovery incommode</h5></div>
                        <div className="icon"><i className="fa-solid fa-angle-double-right"></i></div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogPostPagination;