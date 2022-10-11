import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Contact() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          GitHub:
          <link href="https://github.com/madrodgerflynn">@madrodgerflynn</link>
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Contact;
