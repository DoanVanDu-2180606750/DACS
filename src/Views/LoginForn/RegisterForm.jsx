import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Handle register logic here
  };

  return (
    <div className="body">
      <div className="wrapper">
        <form id="register-form">
          <div className="close-btn" onClick={this.props.closeRegisterForm}>
            <i className="fas fa-times"></i>
          </div>
          <h1>Đăng ký tài khoản</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Tên người dùng"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Mật khẩu"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="button" className="btn" onClick={handleRegister}>
            Register
          </button>

          <div className="register-link">
            <p>Already have an account? <a href="." onClick={this.props.showLoginForm}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;