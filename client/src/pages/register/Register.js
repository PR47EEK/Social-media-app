import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chit-Chat</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Chit-Chat App.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              required
              placeholder="Username"
              ref={username}
              className="loginInput"
            />
            <input
              required
              placeholder="Email"
              type="email"
              ref={email}
              className="loginInput"
            />
            <input
              required
              placeholder="Password"
              type="password"
              ref={password}
              minLength="6"
              className="loginInput"
            />
            <input
              required
              placeholder="Password Again"
              type="password"
              ref={passwordAgain}
              minLength="6"
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/login">
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
