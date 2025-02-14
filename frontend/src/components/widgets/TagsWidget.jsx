import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import TagsData from '../../jsonData/TagsData.json'

const TagsWidget = () => {
    return (
        <>
            <div className="sidebar-item tags">
                <h4 className="title">tags</h4>
                <div className="sidebar-info">
                    <ul>
                        {TagsData.map(tag =>
                            <li key={tag.id}><Link to={tag.postLink}>{tag.tags}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TagsWidget;