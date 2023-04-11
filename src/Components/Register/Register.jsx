import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.sfrmRef = React.createRef();
    this.lfrmRef = React.createRef();
    this.userNameSignUp = React.createRef();
    this.userNameLogin = React.createRef();
    this.emailSignUp = React.createRef();
    this.passwordSignUp = React.createRef();
    this.passwordLogin = React.createRef();
    this.sloaderRef = React.createRef();
    this.lloaderRef = React.createRef();
    this.msgConSignin = React.createRef();
    this.msgConLogin = React.createRef();
    this.state = {
      loginOrSignup: "signUp",
      currentUser: [],
    };
  }
  changeForm = (formType, frmref) => {
    frmref.current.reset();
    this.setState({ loginOrSignup: formType });
  };

  showMsg = (msgRef, loaderRef, text, bgcolor) => {
    loaderRef.current.classList.remove("hidden");
    msgRef.current.classList.add(bgcolor);
    msgRef.current.textContent = text;
    setTimeout(() => {
      loaderRef.current.classList.add("hidden");
      msgRef.current.classList.remove("hidden");
    }, 1000);
  };

  loggedInUser(i) {
    let logged_in_user = {
      username: `${i.username}`,
      email: `${i.email}`,
      password: `${i.password}`,
    };
    localStorage.setItem("Logged-in-user", JSON.stringify(logged_in_user));
  }

  checkUser = () => {
    let LSUsers = JSON.parse(localStorage.getItem("Booking-Users"));
    for (const i of LSUsers) {
      if (
        i.username === this.userNameLogin.current.value &&
        i.password === this.passwordLogin.current.value
      ) {
        let array = [];
        array.push(i);
        this.setState({ currentUser: array }, () => {
          this.msgConLogin.current.classList.remove("bg-red-500");
          this.showMsg(
            this.msgConLogin,
            this.lloaderRef,
            "Logged in Succcessfuly",
            "bg-green-500"
          );
          this.loggedInUser(i);
          setTimeout(() => {
            window.location.href = "http://localhost:3000";
          }, 1500);
        });
      } else {
        this.msgConLogin.current.classList.remove("bg-green-500");
        this.showMsg(
          this.msgConLogin,
          this.lloaderRef,
          "User Not Found !",
          "bg-red-500"
        );
      }
    }
  };

  loginUser = (e) => {
    e.preventDefault();
    this.checkUser();
  };

  setUser = (e) => {
    e.preventDefault();
    let usersArray = [];
    let userObj = {
      username: this.userNameSignUp.current.value,
      email: this.emailSignUp.current.value,
      password: this.passwordSignUp.current.value,
    };
    let userFromLS = localStorage.getItem("Booking-Users");
    if (userFromLS) {
      usersArray = JSON.parse(userFromLS);
    } else {
      usersArray = [];
    }
    usersArray.push(userObj);
    this.showMsg(
      this.msgConSignin,
      this.sloaderRef,
      "User added succesfuly!",
      "bg-green-500"
    );
    localStorage.setItem("Booking-Users", JSON.stringify(usersArray));
    setTimeout(() => {
      this.setState({ loginOrSignup: "login" });
      this.sfrmRef.current.reset();
    }, 2500);
  };

  render() {
    return (
      <div>
        <main className="f-size-r w-screen flex flex-col items-center mt-16 px-2">
          {this.state.loginOrSignup === "signUp" ? (
            <div className="px-4 xl:py-5 lg:py-3 md:py-3 flex flex-col frm-con items-center register-form">
              <form
                ref={this.sfrmRef}
                onSubmit={(e) => this.setUser(e)}
                action=""
                className="gap-3 flex flex-col w-2/5"
              >
                <h1 className="w-full xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
                  Create an account
                </h1>
                <div className="gap-1 w-full flex flex-col mt-3">
                  <label htmlFor="">Username :</label>
                  <input
                    ref={this.userNameSignUp}
                    required
                    type="text"
                    name=""
                    className="w-full p-2 bg-transparent outline-none border-1 border-solid txtUsername-r"
                    id=""
                  />
                </div>
                <div className="gap-1 w-full flex flex-col mt-3">
                  <label htmlFor="">Eamil address :</label>
                  <input
                    ref={this.emailSignUp}
                    required
                    type="email"
                    name=""
                    className="w-full p-2 bg-transparent outline-none border-1 border-solid txtEmail-r"
                    id=""
                  />
                </div>
                <div className="gap-1 w-full flex flex-col mt-3">
                  <label htmlFor="">Password :</label>
                  <input
                    ref={this.passwordSignUp}
                    required
                    type="password"
                    name=""
                    className="w-full p-2 bg-transparent outline-none border-1 border-solid txtPass-r"
                    id=""
                  />
                </div>
                <button
                  id="submit"
                  type="submit"
                  className="font-b mt-2 py-3 text-white outline-none"
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => this.changeForm("login", this.sfrmRef)}
                  className="text-blue-600 show-sign-in"
                >
                  Already have an account ? Sign in
                </button>
                <div className="w-full msg-con-signup">
                  <div
                    ref={this.msgConSignin}
                    className="hidden w-full h-10 flex items-center justify-center text-white"
                  ></div>
                </div>
                <span ref={this.sloaderRef} className="loader hidden"></span>
              </form>
              <div className="h-1px w-2/5 mt-7 bg-red-500 relative justify-center flex flex-col items-center justify-center">
                <p className="absolute bg-white">or use one of these options</p>
                <div className="border-1 border-solid w-full h-full"></div>
              </div>
              <div className="h-20 mt-4 flex justify-evenly items-center gap-2 p-1 w-2/5">
                <div className="w-20 h-full border-1 flex border-solid justify-center items-center p-2 ">
                  <svg
                    id="facebook"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                  </svg>
                </div>
                <div className="w-20 h-full border-1 flex border-solid justify-center items-center p-2 ">
                  <svg
                    viewBox="0 0 262 262"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    role="img"
                  >
                    <path
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      fill="#EB4335"
                    ></path>
                  </svg>
                </div>
                <div className="w-20 h-full border-1 flex border-solid justify-center items-center p-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    role="img"
                  >
                    <path d="M14.25 15.75v4.768a1.982 1.982 0 0 1-1.982 1.982H5.732a1.982 1.982 0 0 1-1.983-1.981V4.983A1.985 1.985 0 0 1 5.733 3H7.5a.75.75 0 0 0 0-1.5H5.733A3.483 3.483 0 0 0 2.25 4.983v15.536A3.482 3.482 0 0 0 5.733 24h6.535a3.482 3.482 0 0 0 3.482-3.482V15.75a.75.75 0 0 0-1.5 0zM3 19.5h12a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zM20.25 6.75a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0zm1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0zm-4.676-2.194l-2.9 3.873h-.002l-1.499-1.5a.75.75 0 1 0-1.06 1.061l1.5 1.5a1.502 1.502 0 0 0 2.26-.16l2.901-3.874a.75.75 0 0 0-1.2-.9z"></path>
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <div className="px-4 xl:py-5 lg:py-3 md:py-3 flex flex-col frm-con items-center sign-in-form">
              <form
                onSubmit={(e) => this.loginUser(e)}
                ref={this.lfrmRef}
                action=""
                className="gap-3 flex flex-col w-2/5"
              >
                <h1 className="w-full xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl max-sm:text-lg font-b">
                  Sign in
                </h1>
                <div className="gap-1 w-full flex flex-col mt-3">
                  <label htmlFor="">Username :</label>
                  <input
                    ref={this.userNameLogin}
                    required
                    type="text"
                    name=""
                    className="w-full p-2 bg-transparent outline-none border-1 border-solid txtUsername-s"
                    id=""
                  />
                </div>
                <div className="gap-1 w-full flex flex-col mt-3">
                  <label htmlFor="">Password :</label>
                  <input
                    ref={this.passwordLogin}
                    required
                    type="password"
                    name=""
                    className="w-full p-2 bg-transparent outline-none border-1 border-solid txtPass-s"
                    id=""
                  />
                </div>
                <button
                  type="submit"
                  id="submit"
                  className="font-b mt-2 py-3 outline-none text-white"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => this.changeForm("signUp", this.lfrmRef)}
                  className="text-blue-600 show-register"
                >
                  Not a member yet ? Register now
                </button>
                <div className="w-full msg-con-login">
                  <div
                    ref={this.msgConLogin}
                    className="hidden w-full h-10 flex items-center justify-center text-white"
                  ></div>
                </div>
                <span ref={this.lloaderRef} className="loader hidden"></span>
              </form>
              <div className="h-1px w-2/5 mt-7 bg-red-500 relative justify-center flex flex-col items-center justify-center">
                <p className="absolute bg-white">or use one of these options</p>
                <div className="border-1 border-solid w-full h-full"></div>
              </div>
              <div className="h-20 mt-4 flex justify-evenly items-center gap-2 p-1 w-2/5">
                <div className="w-20 h-full border-1 flex border-solid justify-center items-center p-2 ">
                  <svg
                    id="facebook"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                  </svg>
                </div>
                <div className="w-20 h-full border-1 flex border-solid justify-center items-center p-2 ">
                  <svg
                    viewBox="0 0 262 262"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    role="img"
                  >
                    <path
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      fill="#EB4335"
                    ></path>
                  </svg>
                </div>
                <div className="w-20 h-full border-1 flex border-solid justify-center items-center p-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    role="img"
                  >
                    <path d="M14.25 15.75v4.768a1.982 1.982 0 0 1-1.982 1.982H5.732a1.982 1.982 0 0 1-1.983-1.981V4.983A1.985 1.985 0 0 1 5.733 3H7.5a.75.75 0 0 0 0-1.5H5.733A3.483 3.483 0 0 0 2.25 4.983v15.536A3.482 3.482 0 0 0 5.733 24h6.535a3.482 3.482 0 0 0 3.482-3.482V15.75a.75.75 0 0 0-1.5 0zM3 19.5h12a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zM20.25 6.75a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0zm1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0zm-4.676-2.194l-2.9 3.873h-.002l-1.499-1.5a.75.75 0 1 0-1.06 1.061l1.5 1.5a1.502 1.502 0 0 0 2.26-.16l2.901-3.874a.75.75 0 0 0-1.2-.9z"></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default Register;
