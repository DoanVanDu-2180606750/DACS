import React from "react";
import './Login.scss';

class SignIN extends React.Component {
    render() {
        return (
            <div className="body" >
                <div className="wrapper">
                    <form id="login-form">
                        <div className="close-btn" onClick={this.props.closeLoginForm}>
                            <i className="fas fa-times"></i>
                        </div>
                        <h1>Đăng nhập vào Friday Music</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Tên người dùng" required />
                            <i className="bx bx-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Mật khẩu" required />
                            <i className="bx bx-lock-alt"></i>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember Me
                            </label>
                            <a href="." onClick={this.props.showForgetPasswordForm}> Forgot Password</a>
                        </div>
                        <button type="button" className="btn" onClick={this.props.toggleLogin}>Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="." onClick={this.props.showRegisterForm}>Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIN;
