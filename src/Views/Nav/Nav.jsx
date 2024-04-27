import React from "react";
import './Nav.scss';
import logo from '../../Assets/Images/logo.png';
import SignIN from "../LoginForn/Signin";
import ForgetPass from "../LoginForn/ForgetPass";
import RegisterForm from "../LoginForn/RegisterForm";

class Nav extends React.Component {
    state = {
        showLogin: false,
        showForgetPassword: false,
        showRegister: false
    };

    toggleLogin = () => {
        this.setState(prevState => ({
            showLogin: !prevState.showLogin,
            showForgetPassword: false,
            showRegister: false
        }));
    };

    showForgetPasswordForm = () => {
        this.setState({
            showForgetPassword: true,
            showLogin: false,
            showRegister: false
        });
    };

    closeLoginForm = () => {
        this.setState({
            showLogin: false,
             // Close the register form when closing login form
        });
    };

    closeRegisterForm = () => {
        this.setState({
            showRegister: false
        });
    }

    closeForgetPasswordForm = () => {
        this.setState({
            showForgetPassword: false
        });
    };

    showRegisterForm = () => {
        this.setState({
            showRegister: true,
            showLogin: false,
            showForgetPassword: false
        });
    };

    showLoginForm = () => {
        this.setState({
            showRegister: false,
            showLogin: true,
            showForgetPassword: false
        });
    };

    onSubmitForgetPassword = () => {
        // Logic for submitting forget password form
        // Probably an API call or other operations
        console.log("Forget Password form submitted");
    };

    render() {
        return (
            <>
                <nav className="Nav">
                    <ul>
                        <div className="nameweb">
                            <img src={logo} alt="Logo" />
                            <li><a href=".">FM</a></li>
                        </div>
                        <div className="list">
                            <li><a href=".">BXH</a></li>
                            <li><a href=".">BXH MV</a></li>
                            <li><a href=".">Bài Hát</a></li>
                            <li><a href=".">MV</a></li>
                            <li><a href=".">Nghệ Sĩ</a></li>
                        </div>
                        <div className="function">
                            <div className="search">
                                <input type="search" className="ipsearch" placeholder="Search..." />
                                <span className="icon"><i className="fa fa-search"></i></span>
                            </div>
                            <li><a href="."><i className="fa-regular fa-heart"></i></a></li>
                            <li><button className="btn" onClick={this.toggleLogin}>Đăng Nhập</button></li>
                            <li><button className="btn" onClick={this.showRegisterForm}>Đăng Ký</button></li>
                        </div>
                    </ul>
                </nav>
                <div>
                    {this.state.showLogin && 
                        <SignIN 
                            toggleLogin={this.toggleLogin} 
                            showForgetPasswordForm={this.showForgetPasswordForm} 
                            showRegisterForm={this.showRegisterForm} 
                            closeLoginForm={this.closeLoginForm} 
                        />
                    }
                    {this.state.showForgetPassword && 
                        <ForgetPass 
                            onSubmitForgetPassword={this.onSubmitForgetPassword} 
                            showLoginForm={this.showLoginForm} 
                            closeForgetPasswordForm= {this.closeForgetPasswordForm}
                        />
                    }
                    {this.state.showRegister && 
                        <RegisterForm 
                            onRegister={this.register} 
                            showLoginForm={this.showLoginForm}
                            closeRegisterForm={this.closeRegisterForm} 
                        />
                    }
                </div>
            </>
        );
    }
}

export default Nav;
