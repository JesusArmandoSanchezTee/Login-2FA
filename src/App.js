import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <div class="main">
      <div>
        <form>
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required="" />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <div class="google">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                window.location.assign('/home');
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
