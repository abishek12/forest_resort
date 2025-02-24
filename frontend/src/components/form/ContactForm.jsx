import React, { useState } from "react";
import { toast } from "react-toastify";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { Button, Form } from "react-bootstrap";

import { createContact } from "../../actions/contactActions";

const ContactForm = () => {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleForm = async (event) => {
    event.preventDefault();

    try {
      let response = await createContact({ fullname, email, phoneNo, message });
      if (response.status === 201) {
        toast.success("Thanks For Your Message");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setPhoneNo("");
      }
    } catch (error) {
      toast.error(error);
      console.log(`Error: ${error}`);
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
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="Phone Number*"
                    type="number"
                    onChange={(e) => setPhoneNo(e.target.value)}
                    autoComplete="off"
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
              <button type="submit" className="tw-bg-[#02952A] tw-rounded-full tw-px-4">
                Send Message <i className="fa fa-paper-plane"></i>
                </button>
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
