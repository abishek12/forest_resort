import React, { useEffect } from "react";
import "./ContactViewed.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  listContacts,
  removeContact,
  createContact,
} from "../../../../actions/contactActions";
import { CONTACT_CREATE_RESET } from "../../../../constants/contactConstants";
import { Link, useNavigate } from 'react-router-dom';
import {
  MdEditSquare,
  MdOutlineDelete,
  MdOutlinePanoramaFishEye,
  MdPreview
} from "react-icons/md";

const TABLE_HEADS = [
  "Name",
  "Email",
  "Phone",
  "Message",
  "Actions",
];

const ContactViewed = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contactList = useSelector((state) => state.contactList);
  const { contacts } = contactList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const contactCreate = useSelector((state) => state.contactCreate);
  const {
    success: successCreate,
    contact: createdContact,
  } = contactCreate;

  const contactDelete = useSelector((state) => state.contactDelete);
  const {
    success: successDelete,
  } = contactDelete;

  useEffect(() => {
    dispatch({ type: CONTACT_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/contact/${createdContact._id}/create`);
    } else {
      dispatch(listContacts());
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdContact,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(removeContact(id));
    }
  };

  const createContactHandler = () => {
    dispatch(createContact());
  };

  // const [showDropdown, setShowDropdown] = useState(false);
  // const handleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // const dropdownRef = useRef(null);

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setShowDropdown(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const userDelete = useSelector((state) => state.userDelete);
  // const { success: successDelete } = userDelete;

  // const deleteHandler = (id) => {
  //   if (window.confirm("Are you sure")) {
  //     dispatch(deleteUser(id));
  //   }
  // };

  const filteredContacts = contacts?.filter(contact => contact.viewed === "Yes");

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Viewed Responses</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredContacts?.map((contact) => (
              // return (
              <tr key={contact._id}>
                {/* <td>{contact._id}</td> */}
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.message}</td>
                <td className="dt-cell-action">
                  <Link to={`/admin/contact/${contact._id}/view`}>
                    <MdPreview />
                  </Link>
                  <Link onClick={() => deleteHandler(contact._id)}>
                    <MdOutlineDelete />
                  </Link>
                </td>
              </tr>
            )
              // }
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ContactViewed;