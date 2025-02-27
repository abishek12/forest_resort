import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./styles.css";

// actions
import { registerUser } from "../../actions/authentication/userRegister";

const RegisterScreen = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await registerUser(fullname, email, password, phoneNo);

      if (response && response.status === 201) {
        toast.success("Registration successful! Please login.");
        navigate("/login");
      } else {
        toast.error(
          response.data?.message || "Registration failed. Please try again."
        );
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderV1 />
      <div className="register-page tw-flex tw-justify-center tw-item-center tw-h-fit tw-pt-10">
        <div className="tw-bg-[#b1f0b4] tw-px-12 tw-w-[350px] md:tw-w-[500px] tw-rounded-md tw-pt-5 tw-mt-8">
          {" "}
          <Form
            onSubmit={submitHandler}
            className="form-register"
            style={{ marginTop: "2em" }}
          >
            <h3 className="tw-font-bold tw-text-4xl tw-w-full tw-text-center tw-pt-12">
              Sign Up
            </h3>

            <div className="tw-p-2 tw-leading-2">
              <label className=" ">Full Name</label> <br></br>
              <input
                className="tw-px-2 tw-w-full tw-rounded-lg tw-border-green-500"
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="tw-p-2 tw-leading-2 ">
              <label>Email Address</label> <br></br>
              <input
                className="tw-px-2 tw-w-full tw-rounded-lg tw-border-green-500"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="tw-p-2 tw-leading-2">
              <label>Phone Number</label> <br></br>
              <input
                className="tw-px-2 tw-w-full tw-rounded-lg tw-border-green-500"
                type="text"
                placeholder="Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
            <div className="tw-p-2 tw-leading-2">
              <label>Password</label> <br></br>
              <input
                className="tw-px-2 tw-w-full tw-rounded-lg tw-border-green-500"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="tw-flex tw-gap-2 tw-items-center">
                <div
                  type="button"
                  className="tw-w-fit"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <MdCheckBox className="checkbox" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="checkbox" />
                  )}
                </div>
                <label className="tw-text-base show">Show Password</label>
              </div>
            </div>
            <div className="tw-w-full tw-pt-4 tw-pb-4">
              <button type="submit" className="register tw-bg-green-700">
                <span>{loading ? "Registering..." : "Register"}</span>
              </button>
              <div className="go-back-to-login tw-font-black">
                <p>
                  {" "}
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <FooterV1 />
    </>
  );
};

export default RegisterScreen;
