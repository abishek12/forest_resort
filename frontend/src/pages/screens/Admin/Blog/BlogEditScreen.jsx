import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Loader from "../../../../components/Loader";
import FormContainer from "../../../../components/FormContainer";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import { updateBlog } from "../../../../actions/blogActions";

const BlogEditScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const blogId = id;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [userId, setUserId] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("draft");
  const [error, setError] = useState(null);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  // Category and Tag states
  const [categories, setCategories] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const quillRef = useRef(null);

  // Fetch blog details, categories and tags
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories and tags first
        const [{ data: categories }, { data: tags }] = await Promise.all([
          axios.get("/category"),
          axios.get("/tag"),
        ]);

        setCategories(categories.items);
        setAllTags(tags.items);

        // Then fetch blog details
        const { data: blogData } = await axios.get(`/blog/${blogId}`);
        setTitle(blogData?.item?.title || "");
        setAuthor(blogData?.item.user?.fullname || "");
        setUserId(blogData?.item?.user?._id);
        setImage(blogData?.item.featured_image || null);
        setContent(blogData.item.content || "");
        setDescription(blogData.item.description || "");
        setStatus(blogData.item.status || "draft");

        // Set initial category and tags after all data is loaded
        if (blogData.item.category) {
          setSelectedCategory(blogData.item.category._id);
          setSearchCategory(
            categories.items.find((c) => c._id === blogData.item.category._id)
              ?.title || ""
          );
        }

        if (blogData.item.tags) {
          setSelectedTags(blogData.item.tags.map((tag) => tag._id));
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        toast.error("Failed to load blog data");
      }
    };

    fetchData();
  }, [blogId]);

  // Quill modules
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    },
  };

  // Category and tag handlers
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

  const removeTag = (tagId) => {
    setSelectedTags(selectedTags.filter((id) => id !== tagId));
  };

  // Filter categories and tags based on search
  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const filteredTags = allTags.filter((tag) =>
    tag.title.toLowerCase().includes(searchTag.toLowerCase())
  );

  // Form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoadingUpdate(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("user", userId);
      formData.append("content", content);
      formData.append("description", description);
      formData.append("status", status);
      formData.append("category", selectedCategory);
      selectedTags.forEach((tagId) => {
        formData.append("tags[]", tagId); 
      });
      if (image) {
        formData.append("featured_image", image);
      }

      console.log("--- FormData Contents ---");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
      console.log("-------------------------");

      await updateBlog(blogId, formData);

      toast.success("Blog updated successfully!");
      // navigate("/user/blogs");
    } catch (error) {
      console.error("Update error:", error);
      toast.error(error.response?.data?.message || "Failed to update blog");
    } finally {
      setLoadingUpdate(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <NavLink to="/admin/blogs" className="btn-bg mt-3 ml-5">
        Back
      </NavLink>
      <FormContainer>
        <h1 className="data-table-title">Edit Blog</h1>
        {loadingUpdate && <Loader />}

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
              readOnly
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
                return tag ? (
                  <span key={tagId} className="tag">
                    {tag.title}
                    <button
                      type="button"
                      onClick={() => removeTag(tagId)}
                      className="tag-remove"
                    >
                      ×
                    </button>
                  </span>
                ) : null;
              })}
            </div>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label className="form-item">Featured Image</Form.Label>
            <Form.Control
              type="file"
              label="Choose File"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image && (
              <img
                src={
                  typeof image === "string" ? image : URL.createObjectURL(image)
                }
                alt="Preview"
                className="image-preview mt-2"
                style={{ maxHeight: "200px" }}
              />
            )}
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label className="form-item">Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Label className="form-item">Short Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter short content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label className="form-item">Description</Form.Label>
            <ReactQuill
              ref={quillRef}
              modules={modules}
              theme="snow"
              value={description}
              onChange={setDescription}
              className="blog-description-input"
              placeholder="Write your story here..."
            />
          </Form.Group>

          <Button
            type="submit"
            className="cs_btn cs_style_1 tw-mt-20"
            disabled={loadingUpdate}
          >
            {loadingUpdate ? "Updating..." : "Update Blog"}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default BlogEditScreen;
