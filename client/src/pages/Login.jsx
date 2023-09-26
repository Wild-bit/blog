import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="password" />
        <button>Login</button>
        <span>
          没有账号？<Link to="/register">注册</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
