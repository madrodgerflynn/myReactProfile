import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Email from "./Email";

function Contact() {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Contact Info
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Let's Connect!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            GitHub:
            <a href="https://github.com/madrodgerflynn">@madrodgerflynn</a>
          </p>
          <p>
            Email:
            <Email />
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

render(<Contact />);

export default Contact;
