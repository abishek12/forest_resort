import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";

import Loader from "../../../../components/Loader";
import FormContainer from "../../../../components/FormContainer";
import { createBlog } from "../../../../actions/blogActions";
import "./BlogCreateScreen.scss";

const BlogCreateScreen = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(""); // Category (single)
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]); // Tags (multiple)
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const [categories, setCategories] = useState([]); // For Categories
  const [allTags, setAllTags] = useState([]); // For Tags

  const quillRef = useRef(null);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
      ],
    },
  };

  // Fetch categories and tags
  useEffect(() => {
    const fetchCategoriesAndTags = async () => {
      try {
        // Fetch categories (replace with your API endpoint)
        const categoryResponse = await axios.get("http://localhost:8888/api/category");
        setCategories(categoryResponse.data.items);

        // Fetch tags (replace with your API endpoint)
        const tagResponse = await axios.get("http://localhost:8888/api/tag");
        setAllTags(tagResponse.data.items);
      } catch (error) {
        setError("Failed to fetch categories or tags.");
      }
    };

    fetchCategoriesAndTags();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const blogData = {
        title,
        user: author,
        featured_image: "https://placehold.co/600x400",
        category,
        tags, 
        content,
        description,
      };
      await createBlog(blogData);
      toast.success("Blog created successfully");
      navigate("/admin/blogs");
    } catch (error) {
      toast.error(error.message || "Error creating blog");
      setError(error.message || "Error creating blog");
    }
  };

  return (
    <>
      <Link to="/admin/blogs" className="btn-bg mt-3 ml-5">
        Back
      </Link>
      <FormContainer>
        <h1 className="data-table-title">Create Blog</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="title">
            <Form.Label className="form-item">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="author">
            <Form.Label className="form-item">Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="category">
            <Form.Label className="form-item">Category</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="tags">
            <Form.Label className="form-item">Tags</Form.Label>
            <Form.Control
              as="select"
              multiple
              value={tags}
              onChange={(e) => setTags(Array.from(e.target.selectedOptions, option => option.value))}
            >
              {allTags.map((tag) => (
                <option key={tag._id} value={tag._id}>
                  {tag.title}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Label className="form-item">Content</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Short Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label className="form-item">Description</Form.Label>
            <ReactQuill
              key="quill-editor"
              ref={quillRef}
              modules={modules}
              theme="snow"
              value={description}
              onChange={setDescription}
              className="blog-description-input"
              placeholder="Write your story here..."
            />
          </Form.Group>

          <Button type="submit" className="cs_btn cs_style_1 tw-mt-20">
            <span>Create</span>
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default BlogCreateScreen;
