import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { MdPreview, MdPayment } from "react-icons/md";
import { HiThumbUp } from "react-icons/hi";
import { Badge } from "react-bootstrap";

import { listAppointments } from "../../../../actions/appointmentActions";
import { dateTimeFormat } from "../../../../utils/date-time";
import PaymentModal from "./BookingPaymentModel";
import PaginationControls from "./BookingPagination";
import "./Appointment.scss";

const TABLE_HEADS = [
  "S.N",
  "Name",
  "Phone",
  "Service",
  "Date",
  "Time",
  "Status",
  "Actions",
];

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
    limit: 10,
  });
  const [showModal, setShowModal] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  const fetchAppointments = async (pageNumber = 1) => {
    const fetchedData = await listAppointments(
      "",
      pageNumber,
      pagination.limit
    );
    if (fetchedData) {
      setAppointments(fetchedData.items);
      setPagination({
        currentPage: fetchedData.pagination.currentPage,
        totalPages: fetchedData.pagination.totalPages,
        totalRecords: fetchedData.pagination.totalRecords,
        limit: pagination.limit,
      });
    }
  };

  useEffect(() => {
    fetchAppointments(pagination.currentPage);
  }, [pagination.currentPage]);

  // function to handle modal of payment
  const handlePaymentClick = (paymentInfo) => {
    setPaymentData(paymentInfo);
    setShowModal(true);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, currentPage: pageNumber }));
    }
  };

  return (
    <>
      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Appointment Responses</h4>
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
              {appointments?.map((appointment, index) => (
                <tr key={uuid()}>
                  <td>{index + 1}</td>
                  <td>{appointment.user.fullname}</td>
                  <td>{appointment.user.phone_no}</td>
                  <td>{appointment.service.name}</td>
                  <td>{dateTimeFormat(appointment.date)}</td>
                  <td>
                    {appointment.timeSlot.start} - {appointment.timeSlot.end}
                  </td>
                  <td>
                    <Badge bg="secondary">{appointment.status}</Badge>
                  </td>
                  <td className="dt-cell-action">
                    <Link to={`/admin/appointment/${appointment._id}/view`}>
                      <MdPreview />
                    </Link>
                    <Link onClick={() => viewedHandler(appointment._id)}>
                      <HiThumbUp />
                    </Link>
                    <Link
                      onClick={() => handlePaymentClick(appointment.payment)}
                    >
                      <MdPayment />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Component */}
        <PaginationControls
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      </section>

      {/* Payment Modal Component */}
      <PaymentModal
        show={showModal}
        onHide={() => setShowModal(false)}
        paymentData={paymentData}
      />
    </>
  );
};

export default Appointment;
