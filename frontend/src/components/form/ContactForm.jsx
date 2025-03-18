import React, { useState } from "react";
import { toast } from "react-toastify";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { Button, Form } from "react-bootstrap";
import { createContact } from "../../actions/contactActions";

const ContactForm = () => {
  const [fullname, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);  // To manage loading state
  const [error, setError] = useState(null);  // To manage error state

  const handleForm = async (event) => {
    event.preventDefault();
    
    // Start the loading process
    setLoading(true);
    setError(null);  // Clear any previous errors

    try {
      let response = await createContact({
        fullname,
        subject,
        email,
        message,
      });

      // Check if the response was successful
      if (response.status === 201) {
        toast.success("Thanks For Your Message");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Something went wrong while submitting the form.");
      }
    } catch (error) {
      // Handle any errors that occur
      setError(error.message);  // Set the error state
      toast.error(`Error: ${error.message}`);  // Display the error toast
    } finally {
      // Reset loading state after form submission attempt
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-form-style-one -tw-mt-12">
        <h2 className="title -tw-mt-12">
          <span>Send us a Message</span>
        </h2>
        <Form onSubmit={handleForm} className="contact-form">
          <Form.Group className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <Form.Control
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Full Name*"
                  type="text"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </Form.Group>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <Form.Control
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <span className="alert-error"></span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <Form.Control
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Subject*"
                    type="text"
                    autoComplete="off"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <span className="alert-error"></span>
                </div>
              </div>
            </div>
          </div>

          <Form.Group className="row">
            <div className="col-lg-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  placeholder="Your message*"
                  autoComplete="off"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
          </Form.Group>

          <div className="row">
            <div className="col-lg-12">
              <button
                type="submit"
                className="tw-bg-[#02952A] tw-rounded-full tw-px-4"
                disabled={loading}  // Disable the button when loading
              >
                {loading ? "Sending..." : "Send Message"}{" "}
                {loading && <i className="fa fa-spinner fa-spin"></i>} {/* Display spinner */}
              </button>
            </div>
          </div>
          
          {error && (
            <div className="col-lg-12">
              <div className="alert alert-danger">
                {error}  {/* Show error message if there is one */}
              </div>
            </div>
          )}
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
