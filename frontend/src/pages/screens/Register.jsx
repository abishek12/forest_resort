import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    let response =await registerUser(fullname, email, password, phoneNo);

    if(response.status === 201){
        navigate("/login");
    }
  };

  return (
    <>
      <HeaderV1 />
      <div className="register-page tw-flex tw-justify-center tw-item-center tw-h-fit tw-pt-10 ">
        {loading ? (
          <Loader />
        ) : (
          <div className="tw-bg-[#b1f0b4]  tw-px-12 tw-pt-10 tw-w-[350px] md:tw-w-[500px] tw-rounded-md">
            <Form onSubmit={submitHandler} className="form-register" style={{ marginTop: "2em" }}>
              <h3 className="tw-font-bold tw-text-4xl tw-w-full tw-text-center tw-pt-12">Sign Up</h3>
              {error && <Message variant="danger">{error}</Message>}
              <div className="tw-p-2 tw-leading-3 tw-mb-5">
                <label className=" ">Full Name</label>
                <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
              </div>
              <div className="tw-p-2 tw-leading-3 tw-mb-5 ">
                <label>Email Address</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="tw-p-2 tw-leading-3 tw-mb-5">
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
              </div>
              <div className="tw-p-2 tw-leading-3 tw-mb-5">
                <label>Password</label>
                <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className="tw-flex tw-gap-2 tw-items-center">
                  <div type="button" className="tw-w-fit" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <MdCheckBox className="checkbox" /> : <MdCheckBoxOutlineBlank className="checkbox" />}
                  </div>
                  <label className="tw-text-base show"> Show Password</label>
                </div>
              </div>
              <div className="tw-w-full tw-pt-6 tw-pb-4">
                <button type="submit" className="register">
                  <span>Register</span>
                </button>
                <div className="go-back-to-login">
                    {/* <p>Go back to <Link to ="/LoginScreen">Login</Link></p> */}
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
