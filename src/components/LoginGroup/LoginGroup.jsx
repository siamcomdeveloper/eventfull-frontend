/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Login } from "../../icons/Login";
import { Login1 } from "../../icons/Login1";
import "./style.css";

export const LoginGroup = ({ whiteLogin, className, icon = <Login1 className="login-2" />, loginLink, SignupLink }) => {
  return (
    <div className={`login-group ${className}`}>
      <div className="overlap-group-wrapper">
        <div className={`overlap-group white-login-${whiteLogin}`}>
          {/* <div className="frame-7">
            <a className="frame-8" href='/user-login'>
              <img className="img" alt="Google" src="https://c.animaapp.com/gLSDdAkA/img/icons8-google-1-1.svg" />
              <div className="text-wrapper-9">Sign in with Google</div>
            </a>
          </div>
          <div className="frame-9">
            <a className="frame-10" href='/user-login'>
              <img className="img" alt="Apple logo" src="https://c.animaapp.com/gLSDdAkA/img/icons8-apple-logo-1.svg" />
              <div className="text-wrapper-9">Sign in with Apple</div>
            </a>
          </div> */}
          {/* {whiteLogin === "orange-login" && <Login className="login-2" />} */}

          {whiteLogin === "default" && (
            <>
              <a className="login-btn" href={loginLink}>
                {icon}
                <span className="LOGIN signup">LOGIN</span>
              </a>
              <a className="rectangle" href={SignupLink}><span className="LOGIN signin">SIGN UP</span></a>
            </>
          )}

          <div className="LOGIN">
            {whiteLogin === "orange-login" && <>LOGIN</>}

            {/* {whiteLogin === "default" && <>LOGIN&nbsp;&nbsp;&nbsp;&nbsp; SIGN UP</>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

LoginGroup.propTypes = {
  whiteLogin: PropTypes.oneOf(["orange-login", "default"]),
};
