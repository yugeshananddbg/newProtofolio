import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/userAction";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

    const { loading, message, error } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, dispatch]);

  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained " disabled={loading}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
