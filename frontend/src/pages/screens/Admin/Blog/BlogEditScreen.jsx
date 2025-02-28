import axios from "axios";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import FormContainer from "../../../../components/FormContainer";
import { listBlogInfo, updateBlog } from "../../../../actions/blogActions";
import { BLOG_UPDATE_RESET } from "../../../../constants/blogConstants";
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

  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  const blogUpdate = useSelector((state) => state.blogUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = blogUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BLOG_UPDATE_RESET });
      navigate("/admin/blogs");
    } else {
      if (!blog.title || blog._id !== blogId) {
        dispatch(listBlogInfo(blogId));
      } else {
        setTitle(blog.title);
        setAuthor(blog.author);
        setImages(Array.isArray(blog.images) ? blog.images : []);
        setCategory(blog.category);
        setDescription(blog.description);
      }
    }
  }, [dispatch, navigate, blogId, blog, successUpdate]);

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

  const quillRef = useRef(null);

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
          } else {
            toast.error("Failed to insert the image into the editor.");
          }
        } catch (error) {
          toast.error("Image upload failed. Please try again.");
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

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBlog({
        _id: blogId,
        title,
        author,
        images,
        category,
        description,
      })
    );
  };

  return (
    <>
      <NavLink to="/admin/blogs" className="btn-bg mt-3 ml-5">
        Back
      </NavLink>
      <FormContainer>
        <h1 className="data-table-title">Edit Blog</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
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

            <div>
              <Button type="submit" className="cs_btn cs_style_1 tw-mt-20">
                <span>Update</span>
              </Button>
            </div>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default BlogEditScreen;
