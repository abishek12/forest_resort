import React from 'react'
import RecentPostData from '../../jsonData/RecentPostData.json'
import SingleRecentPost from './SingleRecentPost';

const RecentPostWidget = ({blogs}) => {

    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    const recentPosts = sortedBlogs.slice(0, 3);

    return (
        <>
            <div className="sidebar-item recent-post">
                <h4 className="title">Recent Post</h4>
                <ul>
                    {recentPosts.map(post =>
                        <SingleRecentPost post={post} key={post.id} />
                    )}
                </ul>
            </div>
        </>
    );
};

export default RecentPostWidget;