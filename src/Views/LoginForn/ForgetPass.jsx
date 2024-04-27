import React from "react";
import './Login.scss';

class ForgetPass extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="wrapper">
                    <form id="forget-password-form">
                        <div className="close-btn" onClick={this.props.closeForgetPasswordForm}>
                            <i className="fas fa-times"></i>
                        </div>
                        <h1>Quên mật khẩu</h1>

                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                            <i className="bx bx-mail-send"></i>
                        </div>

                        <button type="button" className="btn" onClick={this.props.onSubmitForgetPassword}>
                            Submit
                        </button>

                        <div className="register-link">
                            <p>Remember your password? <a href="." onClick={this.props.showLoginForm}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ForgetPass;
