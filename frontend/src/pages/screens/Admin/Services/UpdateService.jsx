import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const UpdateService = () => {
  let { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "futsal",
    courtSize: "",
    surfaceType: "",
    price: "",
    address: "",
    contact: "",
    images: [],
  });

  const [imagePreview, setImagePreview] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await axios.get(`/services/${id}`);
            const data = response.data.item;

            // Handle optional chaining safely
            const futsalData = data.futsal || {};
            const availabilityData = data.availability || {};

            // Set the form data with the fetched values
            setFormData({
                name: data.name,
                description: data.description,
                type: data.type,
                courtSize: futsalData.courtSize || "",
                surfaceType: futsalData.surfaceType || "",
                price: data.price,
                address: availabilityData.address || "",
                contact: availabilityData.contact || "",
                images: data.images || [],
            });

            // Set image previews if images exist
            if (data.images && data.images.length > 0) {
                setImagePreview(data.images.map((image) => image.url));
            }

            setLoading(false); // Data has been fetched, set loading to false
        } catch (error) {
            console.error("Error fetching service:", error);
            toast.error("Failed to fetch service details.");
            setLoading(false); // Set loading to false even if there's an error
        }
    };

    fetchItems();
}, [id]);

  console.log(formData);


  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });

    // Preview images
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreview(previews);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the payload
    const payload = {
      name: formData.name,
      description: formData.description,
      type: formData.type,
      price: formData.price,
      availability: {
        address: formData.address,
        contact: formData.contact,
      },
      futsal: {
        courtSize: formData.courtSize,
        surfaceType: formData.surfaceType,
      },
      images: formData.images,
    };

    try {
      const response = await axios.put(`/services/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Service updated successfully!");
    } catch (error) {
      console.error("Error updating service:", error);
      toast.error(error.response?.data?.message || "Error updating service.");
    }
  };

  // Show loading state while fetching data
  if (loading) {
    return <Container className="mt-5">Loading...</Container>;
  }

  return (
    <Container className="mt-5">
      <h2>Edit Service</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="courtSize">
              <Form.Label>Court Size</Form.Label>
              <Form.Control
                type="text"
                name="courtSize"
                value={formData.courtSize}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="surfaceType">
              <Form.Label>Surface Type</Form.Label>
              <Form.Control
                type="text"
                name="surfaceType"
                value={formData.surfaceType}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="contact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="images">
              <Form.Label>Upload Images</Form.Label>
              <Form.Control
                type="file"
                name="images"
                multiple
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Image Previews */}
        <Row className="mt-3">
          {imagePreview.map((src, index) => (
            <Col key={index} md={3}>
              <img src={src} alt="Preview" className="img-fluid rounded" />
            </Col>
          ))}
        </Row>

        <Button className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateService;