import axios from "axios";
import React, { useRef, useState } from "react";
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
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const blogData = {
        title,
        user: author,
        featured_image: "https://placehold.co/600x400",
        category: "67a9bdf32d115c71f365990c",
        tags: ["67a9cf787d42844e1bd5240d", "67a9cd6c218df1e01a505291"],
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

          <Form.Group controlId="images">
            <Form.Label className="form-item">Images</Form.Label>
            <Form.Control type="file" label="Choose File" multiple />
            {uploading ? (
              <Loader />
            ) : (
              <div className="image-preview">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Preview ${index}`}
                    className="image-preview-item"
                  />
                ))}
              </div>
            )}
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
              <option value="swimming">Swimming</option>
              <option value="futsal">Futsal</option>
              <option value="news">News</option>
              <option value="offer">Offer</option>
              <option value="event">Event</option>
              <option value="other">Other</option>
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
