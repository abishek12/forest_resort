import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import {
  listUsers,
} from "../../../../actions/authentication/userList";
import { deleteUser } from "../../../../actions/userActionsOrg";
import { updateUserRole } from "../../../../actions/authentication/userProfile";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (role = "") => {
    try {
      setLoading(true);
      const data = await listUsers("", "", 1, 10, "desc", role);
      if (data.error) {
        setError(data.error);
      } else {
        setUsers(data);
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handlePromoteToAdmin = async (userId) => {
    try {
      setLoading(true);
      const response = await updateUserRole(userId, "admin");
      if (response.message === "Role updated successfully") {
        fetchUsers(); // Refresh user list
      }
      setLoading(false);
    } catch (error) {
      setError("Failed to update role");
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        setLoading(true);
        const response = await deleteUser(userId);
        if (response.message === "User deleted successfully") {
          fetchUsers(); // Refresh user list
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to delete user");
        setLoading(false);
      }
    }
  };

  return (
    <div className="blog-list">
      <h1>Users</h1>

      <div className="filter-container col-3 mb-4">
        <label htmlFor="" className="form-label">
          Status
        </label>
        <select
          className="form-select"
          onChange={(e) => fetchUsers(e.target.value)}
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
            {users?.map((user, index) => (
              <tr key={uuid()}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.phone_no}</td>
                <td>{dateTimeFormat(user.createdAt)}</td>
                <td className="dt-cell-action">
                  {/* Delete User */}
                  <button
                    className="btn mx-2"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    <MdDeleteOutline />
                  </button>

                  {/* Promote to Admin */}
                  {!user.roles?.admin && (
                    <button
                      className="btn"
                      onClick={() => handlePromoteToAdmin(user._id)}
                    >
                      <IoCheckmarkDoneOutline />
                    </button>
                  )}
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
