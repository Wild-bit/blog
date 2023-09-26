import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="text" placeholder="password" />
        <button>Register</button>
        <span>
          <Link to="/login">去登录</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
