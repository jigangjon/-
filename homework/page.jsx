"use client";

import { useState } from "react";

export default function Home() {
  const [shownPassword, setShownPassword] = useState(false);

  function togglePasswordAppearance(event) {
    setShownPassword(event.target.checked);
  }

  return (
    <div className="page">
      <a href="">
        <img
          src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpwlfNic.png"
          alt="home page logo"
          className="homepage-logo"
        />
      </a>
      <div className="login-wrapper">
        <form
          className="login-form"
          action="https://httpbin.org/post"
          method="post"
        >
          <input
            className="login-input"
            type="text"
            name="id"
            placeholder="Username or Email"
          />
          <input
            className="login-input"
            type={shownPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <div className="password-options-wrapper">
            <div className="checkbox-wrapper">
              <div className="checkbox-label">
                <input
                  className="password-options"
                  type="checkbox"
                  id="show-password"
                  onChange={togglePasswordAppearance}
                  checked={shownPassword}
                />
                <label className="password-options" htmlFor="show-password">
                  Show password
                </label>
              </div>
              <div className="checkbox-label">
                <input
                  className="password-options"
                  type="checkbox"
                  id="remember"
                  name="remember"
                  value="remember"
                />
                <label className="password-options" htmlFor="remember">
                  Remember me
                </label>
              </div>
            </div>
            <a className="password-options forgot-password" href="">
              Forgot Password?
            </a>
          </div>
          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
        <div className="login-options">
          <div className="login-with">
            <a className="login-apple" href="">
              Log in with Apple
            </a>
            <a className="login-google" href="">
              Log in with Google
            </a>
            <a className="login-facebook" href="">
              Log in with Facebook
            </a>
          </div>
        </div>
      </div>
      <a className="sign-up" href="">
        <span className="question">New?&nbsp;</span> Sign up - and start playing
        chess!
      </a>
    </div>
  );
}
