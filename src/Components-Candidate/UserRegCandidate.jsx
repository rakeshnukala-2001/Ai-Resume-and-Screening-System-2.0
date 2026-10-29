import React, { useState } from "react";
import "./UserRegCandidate.css";
import regImg from "../assets/LoginAssets/candidate-registration.png";
import openEye from "../assets/LoginAssets/ShowPasswordIcon.png";
import closeEye from "../assets/LoginAssets/HidePassword.png";

const initialForm = {
  role: "Candidate",
  fullName: "",
  email: "",
  mobile: "",
  degree: "",
  gender: "",
  dob: "",
  password: "",
  confirmPassword: "",
  agree: false,
};

const Register = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [verified, setVerified] = useState({ email: false, mobile: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // field edit pannina verification reset
    if (name === "email" || name === "mobile") {
      setVerified((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleVerify = (field) => {
    if (field === "email") {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
      if (!ok) {
        setError("Please enter a valid email address.");
        return;
      }
    }
    if (field === "mobile") {
      const ok = /^\d{10}$/.test(form.mobile);
      if (!ok) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }
    }
    setError("");
    // TODO: inga OTP send / verify API call podunga, success aana mattum setVerified
    setVerified((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verified.email || !verified.mobile) {
      setError("Please verify your email and mobile number.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Password and confirm password must match.");
      return;
    }
    if (!form.agree) {
      setError("Please accept the terms of service and privacy policy.");
      return;
    }
    setError("");
    console.log("Register data:", form);
    // TODO: API call inga podunga
  };

  return (
    <div className="reg-page">
      {/* LEFT SIDE */}
      <section className="reg-left">
        <p className="reg-platform">
          AI Education &amp; Workforce Development Platform
        </p>

        <h1 className="reg-heading">
          Build Your Future with.
          <br />
          The Right Opportunities.
        </h1>

        <p className="reg-sub">
          Join here and take the next step in your career journey.
          <br />
          Get discovered by top recruiters and unlock new possibilities.
        </p>

        <h2 className="reg-tagline">
          Discover Opportunities. Build Your Career.
        </h2>

        <img
          src={regImg}
          alt="Career illustration"
          className="reg-illustration"
        />

        <div className="reg-quote">
          <svg
            className="reg-quote-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12a9 9 0 0 0-15.5-6.2L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 15.5 6.2L21 16" />
            <path d="M16 16h5v5" />
          </svg>
          <p>
            Better training today,
            <br />
            Brighter opportunities tomorrow.
          </p>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="reg-right">
        <form className="reg-form" onSubmit={handleSubmit} noValidate>
          <h2 className="reg-title">Your Journey Starts Here</h2>
          <p className="reg-title-sub">
            Join our ecosystem of professional employers.
          </p>

          <div className="field full">
            <label htmlFor="role">Select your role</label>
            <div className="select-wrap">
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
              >
                <option value="Candidate">Candidate</option>
                <option value="Employer">Employer</option>
                <option value="Trainer">Trainer</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <div className="verify-wrap">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className={`verify-btn ${verified.email ? "verified" : ""}`}
                  onClick={() => handleVerify("email")}
                  disabled={verified.email}
                >
                  {verified.email ? " Verified" : "Verify"}
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="mobile">Mobile Number</label>
              <div className="verify-wrap">
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="123567890"
                  value={form.mobile}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className={`verify-btn ${verified.mobile ? "verified" : ""}`}
                  onClick={() => handleVerify("mobile")}
                  disabled={verified.mobile}
                >
                  {verified.mobile ? " Verified" : "Verify"}
                </button>
              </div>
            </div>

            <div className="field">
              <label htmlFor="degree">Degree</label>
              <input
                id="degree"
                name="degree"
                type="text"
                placeholder="B.Tech Computer Science"
                value={form.degree}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="gender">Gender</label>
              <div className="select-wrap">
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                className="date-input"
                value={form.dob}
                onChange={handleChange}
                onClick={(e) => e.target.showPicker && e.target.showPicker()}
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="pw-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img src={showPassword ? openEye : closeEye} alt="" />
                </button>
              </div>
            </div>
            <div className="field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="pw-wrap">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  <img src={showConfirm ? openEye : closeEye} alt="" />
                </button>
              </div>
            </div>
          </div>

          <label className="agree">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <span>
              I agree to the <a href="/terms">Terms of service</a> and{" "}
              <a href="/privacy">privacy policy</a> regarding my administrative
              access.
            </span>
          </label>

          {error && <p className="reg-error">{error}</p>}

          <button type="submit" className="reg-submit">
            Complete Registration
          </button>

          <p className="reg-login">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Register;
