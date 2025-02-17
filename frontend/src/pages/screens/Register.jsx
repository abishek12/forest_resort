import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import axios from "axios";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./styles.css";

// actions
import {registerUser} from "../../actions/authentication/userRegister";

const RegisterScreen = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const redirect = "/admin/dashboard";
  
    useEffect(() => {
      if (userInfo) {
        navigate(redirect);
      }
    }, [navigate, userInfo, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await registerUser(fullname, email, password, phoneNo);
  
      if (response && response.status === 201) {
        navigate("/login");
      } else {
        setError(response.data?.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderV1 />
      <div className="register-page tw-flex tw-justify-center tw-item-center tw-h-fit tw-pt-10 ">
        {loading ? (
          <Loader />
        ) : (
          <div className="tw-bg-[#b1f0b4]  tw-px-20 tw-pt-5 tw-w-[300px] md:tw-w-[500px] tw-rounded-md">
            <Form onSubmit={submitHandler} className="form-register" style={{ marginTop: "2em" }}>
              <h3 className="tw-font-bold tw-text-4xl tw-w-full tw-text-center tw-pt-12">Sign Up</h3>
              {error && <Message variant="danger">{error}</Message>}
              <div className="tw-p-2 tw-leading-2">
                <label className=" tw- ">Full Name</label> <br></br>
                <input className="tw-px-2" type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
              </div>
              <div className="tw-p-2 tw-leading-2 ">
                <label>Email Address</label> <br></br>
                <input className="tw-px-2 " type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="tw-p-2 tw-leading-2">
                <label>Phone Number</label> <br></br>
                <input className="tw-px-2" type="text" placeholder="Phone Number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
              </div>
              <div className="tw-p-2 tw-leading-2">
                <label>Password</label> <br></br>
                <input className="tw-px-2" type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className="tw-flex tw-gap-2 tw-items-center">
                  <div type="button" className="tw-w-fit" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <MdCheckBox className="checkbox" /> : <MdCheckBoxOutlineBlank className="checkbox" />}
                  </div>
                  <label className="tw-text-base show">Show Password</label>
                </div>
              </div>
              <div className="tw-w-full tw-pt-4 tw-pb-4">
                <button type="submit" className="register tw-bg-green-700">
                  <span>Register</span>
                </button>
                <div className="go-back-to-login tw-font-black">
                    <p> Already have an account? <Link to ="/login">Login</Link></p>
                </div>
              </div>
            </Form>
          </div>
        )}
      </div>
      <FooterV1 />
    </>
  );
};

export default RegisterScreen;
