import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
// import FormContainer from "../components/FormContainer";
import { loginUser } from "../../actions/authentication/userLogin";
import "./styles.css";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";

const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const emailRef = useRef(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

 const redirect = "/admin/dashboard";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
      <>
      <HeaderV1/>
    <div className="login-page">
      {loading ? <Loader /> : (
        <div className="tw-bg-[#b1f0b4] tw-px-12 tw-w-[350px] md:tw-w-[500px] tw-rounded-md">
          <div className="row">
            <div className="" style={{ marginBottom: "1.6em" }}>
              <Form onSubmit={submitHandler} className="form-login" style={{ marginTop: "2em" }}>
                <div>
                  <h3 className="tw-font-bold tw-text-4xl tw-w-full tw-text-center">Sign In</h3>
                  <div className=" tw-p-2">
                    <div className="tw-leading-3 tw-mb-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmail}
                        ref={emailRef}
                        />
                      <div/>
                    </div>
                    <div className="tw-leading-3">
                      <label>Password</label>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                      <div className="tw-flex tw-gap-2">
                        <div type="button" className="tw-w-fit" onClick={togglePasswordVisibility}>
                          {showPassword ? <MdCheckBox className="checkbox" /> : <MdCheckBoxOutlineBlank className="checkbox" />}
                        </div>
                        <label className="tw-text-base show"> Show Password</label>
                      </div> 
                    <div>
                      <div className="tw-w-full tw-pt-10">
                      <button type="submit" className="login">
                        <span>Login</span>
                      </button>
                      </div>
                      <p>Don't have an Account? <span> <Link to="/register">Create Account</Link> </span> </p>
                    </div>
                  </div>
                        <div>
                        {error && <Message variant="danger">{error}</Message>}
                        </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
    <FooterV1/>
      </>
  );
};

export default LoginScreen;
