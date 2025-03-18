import React, { useState, useEffect } from "react";
import { Container, Table, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";

import { getUserDetails } from "../../../../actions/authentication/userDetails";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import "./ProfileScreen.scss";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const historyData = [
    { id: 1, action: "Login", date: "2025-02-18", status: "Successful" },
    {
      id: 2,
      action: "Password Change",
      date: "2025-02-17",
      status: "Successful",
    },
    { id: 3, action: "Login", date: "2025-02-16", status: "Failed" },
  ];

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getUserDetails(userInfo.userId);
        if (data && data.item) {
          const { fullname, email, password } = data.item;
          setName(fullname);
          setEmail(email);
          setPassword(password);
        }
        setLoading(false);
      } catch (error) {
        setMessage("Failed to fetch user details");
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  // Handle the form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Row
        className="d-flex justify-content-center"
        style={{ minHeight: "100vh", marginTop: 80 }}
      >
        <Col>
          {message && <Message>{message}</Message>}{" "}
          {/* Display message if there is one */}
          <Tabs defaultActiveKey="profile" id="profile-tabs" className="mb-3">
            <Tab eventKey="profile" title="Profile">
              {/* Profile Tab */}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label className="form-item">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label className="form-item">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label className="form-item">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                  <Form.Label className="form-item">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <div>
                  <button type="submit" className="cs_btn cs_style_1 mt-3">
                    <span>Update</span>
                  </button>
                </div>
              </Form>
            </Tab>

            <Tab eventKey="history" title="History">
              {/* History Tab */}
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Action</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((entry) => (
                    <tr key={entry.id}>
                      <td>{entry.id}</td>
                      <td>{entry.action}</td>
                      <td>{entry.date}</td>
                      <td>{entry.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
