import React, { useState } from "react";
import Style from "./signin.module.css";
import Image from "./image/background.png";
import isEmail from "validator/es/lib/isEmail";
// import isPassword from "validator/es/lib/isStrongPassword";
import isPhone from "validator/es/lib/isMobilePhone";

function Signin() {
  const [error, seterror] = useState("");
  const [error_mssg, seterror_mssg] = useState("");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");

  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [checkbox, setcheckbox] = useState("");

  const create_account = () => {
    seterror("");
    seterror_mssg("");
     if (!isEmail(email)) {
      seterror("email_error");
      seterror_mssg("Email is invalid");
    } else if (password!==repassword) {
      seterror("repassword_error");
      seterror_mssg("password is not matched");
    } else if (!isPhone(phone, "en-IN")) {
      seterror("phone_error");
      seterror_mssg("Phone is invalid");
    }else{

    }
  };


  const onChange_repass=(e)=>{
    if(e.target.value!==password){
      seterror("repassword_error");
      seterror_mssg("password is not matched");
    }else{
      seterror("");
      seterror_mssg("");
    }
    setrepassword(e.target.value)


  }
  const onChange_phone=(e)=>{
    if(!isPhone(e.target.value,"en-IN")){
      seterror("phone_error");
      seterror_mssg("phone number is not valid");
    }else{
      seterror("");
      seterror_mssg("");
    }
    setphone(e.target.value)
  }

  return (
    <div className={Style.mainDiv}>
      {/* image section */}
      <div className={Style.backgroundSec}>
        {/* image */}
        <div className={Style.imgSec}>
          <img src={Image} alt="not found" />

          {/* Text bottom the image */}
          <div className={Style.textSec}>
            <span className={Style.textSecHeading}>Choose a data range</span>
            <br />
            <span className={Style.textSecPara}>
              you can create an account by using <br />
              Email id and strong password
            </span>
          </div>
        </div>
      </div>
      <form style={{width:"inherit"}}
        onSubmit={(e) => {
          e.preventDefault();
          create_account();
        }}
      >
        {/* create account section */}
        <div className={Style.createAccountSec}>
          <p>Create an Account</p>

          {/* email adress section */}
          <span className={Style.CreateAccountTitle}>your email adress</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className={Style.input}
            required
          />
          {error === "email_error" && (
            <span className={Style.CreateAccountTitle} style={{ color: "red" }}>
              {error_mssg}{" "}
            </span>
          )}
          <br />

          {/* password section */}
          <span className={Style.CreateAccountTitle}>your password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className={Style.input}
            required
          />
          {error === "Password_error" && (
            <span className={Style.CreateAccountTitle} style={{ color: "red" }}>
              {error_mssg}{" "}
            </span>
          )}
          <br />

          {/* confirm password */}
          <span className={Style.CreateAccountTitle}>
            confirm your password
          </span>
          <input
            type="password"
            value={repassword}
            onChange={onChange_repass}
            className={Style.input}
            required
          />
          {error === "repassword_error" && (
            <span className={Style.CreateAccountTitle} style={{ color: "red" }}>
              {error_mssg}{" "}
            </span>
          )}
          <br />

          {/* enter name section */}
          <span className={Style.CreateAccountTitle}>your full name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            className={Style.input}
            required
          />

          {/* phone number section */}
          <span className={Style.CreateAccountTitle}>your phone number</span>
          <input
            type="number"
            value={phone}
            onChange={onChange_phone}
            className={Style.input}
            required
            maxLength={10}
          />
          {error === "phone_error" && (
            <span className={Style.CreateAccountTitle} style={{ color: "red" }}>
              {error_mssg}{" "}
            </span>
          )}
          <br />

          {/* checkbox section */}
          <div className="chekbox">
            <input
              type="checkbox"
              value={checkbox}
              onChange={(e) => {
                setcheckbox(e.target.value);
              }}
              className={Style.input}
              required
            />
            <span className={Style.checkboxTitle}>
              I need and agree Terms and Conditions
            </span>
            {error === "check_error" && (
              <span
                className={Style.CreateAccountTitle}
                style={{ color: "red" }}
              >
                {error_mssg}{" "}
              </span>
            )}
            <br />
          </div>
          <br />

          <button className={Style.button} type="submit" value="Submit">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
