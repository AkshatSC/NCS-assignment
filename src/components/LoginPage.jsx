import React from "react";
import "./loginpage.css";
import rocket from "../animations/rocket.json";
import Lottie from "lottie-react";

function Loginpage(){
  return (
    <div className="outer">

        <div className="left-div">

              <div className="image-div">
                    <Lottie animationData={rocket}/>
              </div>

        </div>



        <div className="right-div">

              <div className="form-div">

                    <form action="">
                        <div className="heading">
                              <h1>Login</h1>
                        </div>

                        <div className="loginid-div">
                              <label for="loginid"><b>Login ID</b></label>
                        </div>
                        <input type="text" placeholder="Enter Login ID" name="loginid" required id="loginid"/>


                        <div className="password-div">
                              <label for="password"><b>Password</b></label>
                        </div>
                        <input type="password" placeholder="Enter password" name="password" required id="password"/>


                        <div className="remember">
                              <div className="remember-div-1">
                                <input className="checkbox" type="checkbox" name="remember"/><span> Remember me</span>
                              </div>
                              <div className="anchor-div">
                                <a href="/">Change password</a>
                              </div>
                        </div>
                        <div className="tandc">
                              <div className="tandc-div">
                                  <input className="checkbox" type="checkbox" name="TandC"/><span>Agree to <a className="underline" href="/">terms and conditions</a></span>
                              </div>
                        </div>
                        <div className="login-button-div">
                              <button className="login-button" type="submit">Login</button>
                        </div>
                        <div className="register-div">
                              <p className="register-p">Dont have an account <a href="/">Register here!</a></p>
                        </div>

                    </form>

              </div>

        </div>

    </div>
  );
}

export default Loginpage;
