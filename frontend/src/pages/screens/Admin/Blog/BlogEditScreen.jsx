import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Loader from "../../../../components/Loader";
import FormContainer from "../../../../components/FormContainer";
import ReactQuill from "react-quill";

const BlogEditScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const blogId = id;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blog, setBlog] = useState({});
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [errorUpdate, setErrorUpdate] = useState(null);
  const [successUpdate, setSuccessUpdate] = useState(false);

  const quillRef = useRef(null);

  // Fetch the blog details
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const { data } = await axios.get(`/blog/${blogId}`);
        setBlog(data.item);
        setTitle(data.item.title || "");
        setAuthor(data.item.user.fullname || "");
        setImages(data.item.featured_image ? [data.item.featured_image] : []);
        setCategory(data.item.category.title || "");
        setDescription(data.item.description || "");
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog details.");
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  // Handle image upload
  const uploadFileHandler = async (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file) => formData.append("images", file));
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data: uploadedUrls } = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        config
      );

      setImages(uploadedUrls);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  // Handle image upload to Cloudinary
  const handleImageUpload = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "forest_arena");

        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dykya5ncm/upload",
            formData
          );

          const imageUrl = response.data.secure_url;

          const quill = quillRef.current?.getEditor();
          if (quill) {
            const range = quill.getSelection();
            quill.insertEmbed(range.index, "image", imageUrl);
          }
        } catch (error) {
          console.error("Image upload failed. Please try again.");
        }
      }
    };
  }, []);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
      ],
      handlers: {
        image: handleImageUpload,
      },
    },
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoadingUpdate(true);
    setErrorUpdate(null);

    try {
      const updatedBlog = {
        _id: blogId,
        title,
        author,
        images,
        category,
        description,
      };

      await axios.put(`/api/blog/${blogId}`, updatedBlog);
      setSuccessUpdate(true);
      setLoadingUpdate(false);
      navigate("/admin/blogs");
    } catch (error) {
      setErrorUpdate("Failed to update the blog.");
      setLoadingUpdate(false);
    }
  };

  // Only render form after data is loaded
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <NavLink to="/admin/blogs" className="btn-bg mt-3 ml-5">
        Back
      </NavLink>
      <FormContainer>
        <h1 className="data-table-title">Edit Blog</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="title">
            <Form.Label className="form-item">Title</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="author">
            <Form.Label className="form-item">Author</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="images">
            <Form.Label className="form-item">Images</Form.Label>
            <Form.Control
              type="file"
              label="Choose File"
              onChange={uploadFileHandler}
              multiple
            />
            {uploading && <Loader />}
            {images.length > 0 && (
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

          <Button type="submit" className="cs_btn cs_style_1 tw-mt-20">
            <span>Update</span>
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default BlogEditScreen;
