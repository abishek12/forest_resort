import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import FormContainer from "../../../../components/FormContainer";
import { createBlog } from "../../../../actions/blogActions";
import "./BlogCreateScreen.scss";

const BlogCreateScreen = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(userInfo.userId);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [status, setStatus] = useState("draft");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const [categories, setCategories] = useState([]);
  const [allTags, setAllTags] = useState([]);

  const [searchCategory, setSearchCategory] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

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
        const categoryResponse = await axios.get(
          "http://localhost:8888/api/category"
        );
        setCategories(categoryResponse.data.items);

        const tagResponse = await axios.get("http://localhost:8888/api/tag");
        setAllTags(tagResponse.data.items);
      } catch (error) {
        setError("Failed to fetch categories or tags.");
      }
    };

    fetchCategoriesAndTags();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category._id);
    setSearchCategory(category.title);
  };

  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag._id)) {
      setSelectedTags([...selectedTags, tag._id]);
    }
    setSearchTag("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("user", author);
      formData.append("category", selectedCategory);
      formData.append("tags", JSON.stringify(selectedTags));
      formData.append("content", content);
      formData.append("description", description);
      formData.append("status", status);

      if (image) {
        formData.append("featured_image", image);
      }

      await createBlog(formData);

      toast.success("Blog created successfully!");
      navigate("/admin/blogs");
    } catch (error) {
      toast.error(error);
      setError(error);
    } finally {
      setUploading(false);
    }
  };

  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const filteredTags = allTags.filter((tag) =>
    tag.title.toLowerCase().includes(searchTag.toLowerCase())
  );

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
              value={userInfo.fullname}
              readOnly
              required
            />
          </Form.Group>

          <Form.Group controlId="category">
            <Form.Label className="form-item">Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search and select a category"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              disabled={!!selectedCategory}
            />
            {!selectedCategory && searchCategory && (
              <div className="search-results">
                {filteredCategories.map((cat) => (
                  <div
                    key={cat._id}
                    className="search-item"
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat.title}
                  </div>
                ))}
              </div>
            )}
          </Form.Group>

          <Form.Group controlId="tags">
            <Form.Label className="form-item">Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search and add tags"
              value={searchTag}
              onChange={(e) => setSearchTag(e.target.value)}
            />
            {searchTag && (
              <div className="search-results">
                {filteredTags.map((tag) => (
                  <div
                    key={tag._id}
                    className="search-item"
                    onClick={() => handleTagSelect(tag)}
                  >
                    {tag.title}
                  </div>
                ))}
              </div>
            )}
            <div className="selected-tags">
              {selectedTags.map((tagId) => {
                const tag = allTags.find((t) => t._id === tagId);
                return (
                  <span key={tagId} className="tag">
                    {tag.title}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedTags(selectedTags.filter((id) => id !== tagId))
                      }
                    >
                      ×
                    </button>
                  </span>
                );
              })}
            </div>
          </Form.Group>

          <Form.Group controlId="featuredImage">
            <Form.Label className="form-item">Featured Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label className="form-item">Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
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