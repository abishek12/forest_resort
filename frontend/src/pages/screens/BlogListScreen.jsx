import React, { useEffect } from "react";
// import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Paginate from "../../components/Paginate";
import {
  listDoctors,
  removeDoctor,
  createDoctor,
} from "../../actions/doctorActions";
import { DOCTOR_CREATE_RESET } from "../../constants/doctorConstants";
import { Icon } from '@iconify/react';

const BlogListScreen = () => {
  const navigate = useNavigate();
  const { pageNumber } = useParams() || 1;
  // const pageNumber = 1;
  // const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors, page, pages } = doctorList;

  const doctorDelete = useSelector((state) => state.doctorDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = doctorDelete;

  const doctorCreate = useSelector((state) => state.doctorCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    doctor: createdDoctor,
  } = doctorCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: DOCTOR_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/doctor/${createdDoctor._id}/create`);
    } else {
      dispatch(listDoctors("", pageNumber));
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdDoctor,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(removeDoctor(id));
    }
  };

  const createDoctorHandler = () => {
    dispatch(createDoctor());
  };

  return (
    <>
      <Link to="/" className="btn btn-light m-5">
        Go Back
      </Link>
      <div style={{ padding: 50 }}>
        <Row className="align-items-center">
          <Col>
            <h1>Doctors</h1>
          </Col>
          <Col className="text-right">
            <Button className="my-6" onClick={createDoctorHandler}>
              <Icon icon="fa6-solid:plus" /> Create Doctor
            </Button>
          </Col>
        </Row>
        {loadingDelete && <Loader />}
        {errorDelete && <Message variant="danger">{errorDelete}</Message>}
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant="danger">{errorCreate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>DEPARTMENT</th>
                  <th>DESIGNATION</th>
                  <th>CATEGORY</th>
                  <th>PHONE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor._id}>
                    <td>{doctor._id}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.department}</td>
                    <td>{doctor.designation}</td>
                    <td>{doctor.category}</td>
                    <td>{doctor.phonenumber}</td>
                    <td>
                      <Link to={`/admin/doctor/${doctor._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <Icon icon="fa6-solid:pencil" />
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(doctor._id)}
                      >
                        <Icon icon="fa6-solid:trash" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Paginate pages={pages} page={page} isAdmin={true} />
          </>
        )}
      </div>
    </>
  );
};

export default BlogListScreen;
