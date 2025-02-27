import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ActivateAccount = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Extract the activation token from the URL
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      activateUserAccount(token);
    } else {
      setError("Activation token is missing.");
    }
  }, [token]);

  console.log(token)

  const activateUserAccount = async (token) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(
        "http://localhost:8888/api/auth/activate-account",
        {
          token,
        }
      );

      console.log("Response: ", response)

      if (response.status === 200) {
        toast.success(
          "Account activated successfully! Redirecting to login..."
        );
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Activation failed. Please try again."
      );
      toast.error(
        err.response?.data?.message || "Activation failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-h-screen tw-bg-gray-100">
      <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-md tw-text-center">
        {loading ? (
          <p>Activating your account...</p>
        ) : error ? (
          <p className="tw-text-red-500">{error}</p>
        ) : (
          <p>Your account is being activated. Please wait...</p>
        )}
      </div>
    </div>
  );
};

export default ActivateAccount;
