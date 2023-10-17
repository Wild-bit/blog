import React, { useState } from "react";
import { Link } from "react-router-dom";
import { apiRegister } from "../api/index";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRegister(inputs);
      console.log(res, "registerSuccess");
    } catch (error) {
      console.log(error, "register");
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <span>
          <Link to="/login">去登录</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
