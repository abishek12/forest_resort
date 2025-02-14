import React, { useState } from "react";
import { toast } from "react-toastify";
import BoxReveal from "../ui/magic_ui/box-reveal";
import FormContainer from "../FormContainer";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createContact } from "../../actions/contactActions";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault();
    dispatch(
      createContact({
        name,
        email,
        phone,
        message,
      })
    );
    console.log("DATA:::", name);
    console.log("DATA2:::", email);
    // event.target.reset();
    toast.success("Thanks For Your Message");
  };

  return (
    <>
      <div className="contact-form-style-one">
        <h4 className="sub-title">
          <BoxReveal>Have Questions?</BoxReveal>
        </h4>
        <h2 className="title">
          <BoxReveal>Send us a Message</BoxReveal>
        </h2>
        <Form onSubmit={handleForm} className="contact-form">
          <Form.Group className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <Form.Control
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="row">
            <div className="col-lg-6">
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
            <div className="col-lg-6">
              <div className="form-group">
                <Form.Control
                  className="form-control no-arrows"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="off"
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="row">
            <div className="col-lg-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  placeholder="Your message *"
                  autoComplete="off"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
          </Form.Group>
          <div className="row">
            <div className="col-lg-12">
              <Button type="submit" className="tw-bg-[#228c22]">
                <i className="fa fa-paper-plane"></i> Get in Touch
              </Button>
            </div>
          </div>
          <div className="col-lg-12 alert-notification">
            <div id="message" className="alert-msg"></div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
