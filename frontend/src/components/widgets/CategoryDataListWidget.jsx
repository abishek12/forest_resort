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

        if (response.data && Array.isArray(response.data.items)) {
          setCategories(response.data.items);
        } else {
          throw new Error("Invalid data structure");
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
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
      <div className="relative mb-2">
      <p className="mb-1 tw-text-2xl text-black tw-font-bold">Category List</p>
          <svg width="22%" height="2" border="2px" className="absolute">
            <line x2="100%" y2="100%" stroke="#1A7218F2" strokeWidth="5" />
          </svg>
      </div>
      <div className="sidebar-info mt-2 tw-text-black">
        <ul>
          {categories.map((category) => (
            <li key={category.id || category.slug}> {category.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryDataListWidget;
