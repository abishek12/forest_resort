import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import { listContactInfo } from "../../../../actions/contactActions";

const ContactViewScreen = () => {
  const { id } = useParams();
  const contactId = id;

  const dispatch = useDispatch();

  const contactDetails = useSelector((state) => state.contactDetails);
  const { loading, error, contact } = contactDetails;

  useEffect(() => {
    dispatch(listContactInfo(contactId));
  }, [dispatch, contactId]);

  return (
    <>
      <NavLink to="/admin/contacts" className="btn-bg mt-3 ml-5">
        Back
      </NavLink>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div style={{ marginBottom: '20px', marginTop: '40px' }}>
          <h4>Name:</h4>
          <p>{contact.name}</p>
          <hr />

          <h4 style={{ marginTop: '10px' }}>Email:</h4>
          <p>{contact.email}</p>
          <hr />

          <h4 style={{ marginTop: '10px' }}>Phone:</h4>
          <p>{contact.phone}</p>
          <hr />

          <h4 style={{ marginTop: '10px' }}>Message:</h4>
          <p>{contact.message}</p>
          <hr />
        </div>
      )}
    </>
  );
};

export default ContactViewScreen;
