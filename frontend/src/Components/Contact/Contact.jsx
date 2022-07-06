import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Contact.scss";

import { contactUs } from "../../Actions/userAction";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();


  const {
    loading,
    message: alertMessage,
    error,
  } = useSelector((state) => state.update);

  const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [ error, alertMessage, dispatch]);

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form className="contactContainerForm" 
        onSubmit={contactFormHandler}
        >
          <Typography variant="h4">Contact Me</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit" 
          disabled={loading}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;