import React, { useRef } from "react";
import "./Contact.css";

import TextField from "@mui/material/TextField";
import { Button } from "reactstrap";
import emailjs from "@emailjs/browser";

const styles = {
  container: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
    xs: 12,
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    marginBottom: 100,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    border: "1px solid #000000",
  },
  title: {
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "bold",
    fontSize: 60,
  },
  subtitle: {
    margin: "auto",
  },
  formLabel: {
    fontFamily: "Geist",
    fontSize: 60,
    marginTop: 2,
  },
  textField: {
    width: "100%",
    marginBottom: 20,
    border: "2px solid #000000",
  },
};

export default function Contact() {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_isyf2b9",
        "template_84llydk",
        formRef.current,
        "vUQTrNwa1tjI-hvrI"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    alert("Message sent!");
  };

  return (
    <>
      <h1 className="contact-text-image-mask">Contact me</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Send me an email, let's talk!</h3>

        <form ref={formRef} onSubmit={sendEmail}>
          <TextField
            type="text"
            id="first-name"
            label="First Name"
            variant="outlined"
            name="first-name"
            autoComplete="true"
            style={styles.textField}
          />

          <TextField
            type="text"
            id="last-name"
            label="Last Name"
            variant="outlined"
            name="last-name"
            autoComplete="true"
            style={styles.textField}
          />

          <TextField
            id="email"
            label="Email"
            name="email"
            variant="outlined"
            autoComplete="true"
            style={styles.textField}
            type="email"
          />

          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            autoComplete="false"
            style={styles.textField}
          />

          <Button size="lg" className="button" type="submit">
            Send message
          </Button>
        </form>
      </div>
    </>
  );
}
