import React from 'react'
import CategoryDataListData from '../../jsonData/CategoryDataListData.json'
import { HashLink as Link } from 'react-router-hash-link'

const CategoryDataListWidget = () => {
    return (
        <>
            <div className="sidebar-item category">
                <h4 className="title">category list</h4>
                <div className="sidebar-info">
                    <ul>
                        {CategoryDataListData.map(category =>
                            <li key={category.id}>
                                <Link to="#">{category.category} <span>{category.post}</span></Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategoryDataListWidget;