import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Loader from "../../../../components/Loader";
import FormContainer from "../../../../components/FormContainer";
import { createBlog } from "../../../../actions/blogActions";
import "./BlogCreateScreen.scss";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";

const BlogCreateScreen = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  // const [authorbio, setAuthorBio] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const uploadFileHandler = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      toast.error("You can upload a maximum of 5 images.");
      setImages([]);
      return;
    }
    const data = new FormData();
    files.forEach((file) => data.append("images", file));

    const previewUrls = files.map((file) => URL.createObjectURL(file));

    setUploading(true);

    try {
      const { data: uploadedUrls } = await axios.post(
        "http://localhost:5000/api/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImages((prevImages) => [...prevImages, ...uploadedUrls]);
      console.log("Images state after upload:", [...prevImages, ...data]);
      setUploading(false);
    } catch (error) {
      if (error.response) {
        toast.error(
          `${error.response.data.message || "Error uploading images"}`
        );
      }
    } finally {
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
    try {
      dispatch(
        createBlog({
          title,
          author,
          // authorbio,
          images,
          category,
          description,
        })
      );
      toast.success("Blog created successfully");
      navigate("/admin/blogs");
    } catch (error) {
      toast.error("Error while creating blog.");
      console.log("Error: ", error);
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

          {/* <Form.Group controlId="authorbio">
            <Form.Label className="form-item">Author Bio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author Bio"
              value={authorbio}
              onChange={(e) => setAuthorBio(e.target.value)}
              required
            />
          </Form.Group> */}

          <Form.Group controlId="images">
            <Form.Label className="form-item">Images</Form.Label>
            <Form.Control
              type="file"
              label="Choose File"
              onChange={uploadFileHandler}
              multiple
              required
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
