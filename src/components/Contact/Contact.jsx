import { useRef, useState } from "react";
import { EMAIL, TELEPHONE } from "../../Constants";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import "./Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [error, setError] = useState(null);
  const formRef = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current.name.value) {
      setError("Name is required");
      return;
    }
    if (!formRef.current.email.value) {
      setError("Email is required");
      return;
    }
    if (!formRef.current.message.value) {
      setError("Message is required");
      return;
    }
    try {
      await emailjs
        .sendForm(
          "service_isyf2b9",
          "template_84llydk",
          formRef.current,
          "lRQEHERgGdBoUqxEY"
        )
        .then(() => {
          console.log("Message sent!");
          alert("Message sent!");
          setError(null);
          formRef.current.reset();
        });
    } catch (error) {
      console.log("Form submission error!");
    }
  };

  return (
    <section className="section p-5" id="contact">
      <div className="container-xl w-100 flex">
        <h1 className="contact-title">Contact</h1>
        <h3 className="contact-text">
          You can get in touch with me through the form below. I'll be happy to
          discuss your project or answer any questions about freelancing
          services, don't hesitate to reach out!
        </h3>
        <div className="contact-parent">
          <div className="contact-info">
            <div className="contact-item">
              <div className="svg-bg">
                <EmailIcon className="svg" fontSize="large" />
              </div>
              <a href={`mailto:${EMAIL}`}>
                <h4>{EMAIL}</h4>
              </a>
            </div>
            <div className="contact-item">
              <div className="svg-bg">
                <PhoneIcon className="svg" fontSize="large" />
              </div>
              <a href={`tel:${TELEPHONE}`}>
                <h3>{TELEPHONE}</h3>
              </a>
            </div>
          </div>

          <div className="container">
            <div className="form">
              <form ref={formRef} onSubmit={sendEmail} id="form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control p-4"
                    id="name"
                    name="name"
                    autoComplete="true"
                    placeholder="Name"
                  />
                  {error && <div className="error">{error}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control p-4"
                    id="email"
                    name="email"
                    autoComplete="true"
                    placeholder="example@email.com"
                  />
                  {error && <div className="error">{error}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control p-4"
                    id="message"
                    name="message"
                    rows="4"
                    autoComplete="false"
                    placeholder="Write your message here..."
                  ></textarea>
                  {error && <div className="error">{error}</div>}
                </div>

                <button className="custom-btn" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
