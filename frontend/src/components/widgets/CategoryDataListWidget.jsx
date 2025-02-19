import React, { useEffect, useState } from "react";
import axios from "axios";
import { HashLink as Link } from "react-router-hash-link";

const CategoryDataListWidget = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8888/api/category");
        setCategories(response.data.items);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch categories");
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="sidebar-item category">
      <h4 className="title">Category List</h4>
      <div className="sidebar-info">
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {/* <Link to={`/category/${category.slug}`}> */}
                {category.title}
                {/* {category.title} <span>{category.postCount}</span> */}
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryDataListWidget;
