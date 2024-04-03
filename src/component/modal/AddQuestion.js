import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function AddQuestion(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Question
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              placeholder="capital of turkey"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Reply</Form.Label>
            <Form.Control type="text" placeholder="Ankara" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn w-100 btn-block card-btn btn-primary-color btn-primary"
          onClick={props.onHide}
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddQuestion;
