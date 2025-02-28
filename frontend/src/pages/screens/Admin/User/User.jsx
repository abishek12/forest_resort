import React, { useEffect, useRef, useState } from "react";
// import UserAction from "./UserAction";
import "./User.scss";

import { useDispatch, useSelector } from "react-redux";
import { usersList } from "../../../../actions/authentication/userList";
import {usersDelete} from "../../../../actions/authentication/userDelete"
import { Link, useNavigate } from 'react-router-dom';
// import { HiDotsHorizontal } from "react-icons/hi";
import {
  MdEditSquare,
  MdOutlineDelete
} from "react-icons/md";

const TABLE_HEADS = [
  "ID",
  "Name",
  "Email",
  "Admin",
  "Actions",
];



const User = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(usersList());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, successDelete, userInfo]);

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

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(usersDelete(id));
      navigate("/admin/dashboard");
    }
  };

  // const userDelete = useSelector((state) => state.userDelete);
  // const { success: successDelete } = userDelete;

  // const deleteHandler = (id) => {
  //   if (window.confirm("Are you sure")) {
  //     dispatch(deleteUser(id));
  //   }
  // };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Users</h4>
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
            {users?.map((user) => (
              // return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                {/* <td>{user.customer}</td> */}
                <td>
                  {user.isAdmin ? (
                    <span>Admin</span>
                  ) : (
                    <span>User</span>
                  )}
                  {/* <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${user.status}`}
                      ></span>
                      <span className="dt-status-text">{user.status}</span>
                    </div> */}
                </td>
                {/* <td>${user.amount.toFixed(2)}</td> */}
                <td className="dt-cell-action">
                  <Link to={`/admin/user/${user._id}/edit`}>
                    <MdEditSquare />
                  </Link>
                  <Link onClick={() => deleteHandler(user._id)}>
                    <MdOutlineDelete />
                  </Link>

                  {/* <button
                    type="button"
                    className="action-dropdown-btn"
                    onClick={handleDropdown}
                  >
                    <HiDotsHorizontal size={18} />
                    {showDropdown && (
                      <div className="action-dropdown-menu" ref={dropdownRef}>
                        <ul className="dropdown-menu-list" style={{ listStyle: 'none' }}>
                          <li className="dropdown-menu-item">
                            <Link to={`/admin/user/${user._id}/edit`} className="dropdown-menu-link">
                              Edit
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link className="dropdown-menu-link" onClick={() => deleteHandler(user._id)}>
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </button> */}
                  {/* <UserAction id={user._id} /> */}
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

export default User;