import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

import { listUsers } from "../../../../actions/authentication/userList";
import Loader from "../../../../components/Loader";
import Message from "../../../../components/Message";
import { dateTimeFormat } from "../../../../utils/date-time";

const TABLE_HEADS = [
  "S.N",
  "Fullname",
  "Email",
  "Contact No.",
  "Joined Date",
  "Actions",
];

const User = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await listUsers("", 1, 10, "desc");
        if (data.error) {
          setError(data.error);
        } else {
          setUsers(data);
          setFilteredUsers(data);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleStatusFilter = (status) => {
    if (status === "") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter((user) => user.role === status)
      );
    }
  };

  return (
    <div className="blog-list">
      <h1>Users</h1>

      <div className="filter-container col-3 mb-4">
        <label htmlFor="" className="form-label">Status</label>
        <select
          className="form-select"
          onChange={(e) => handleStatusFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="admin">Admin</option>
          <option value="subscriber">Subscriber</option>
        </select>
      </div>
      
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <div className="data-table-diagram">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user, index) => (
              <tr key={uuid()}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.phone_no}</td>
                <td>{dateTimeFormat(user.createdAt)}</td>
                <td>
                  <Link>
                    <MdDeleteOutline />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
