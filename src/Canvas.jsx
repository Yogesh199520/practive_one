import {useState, React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Offcanvas, Header, Title, Body} from 'react-bootstrap';
function Canvas({ name, ...props }){
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Button 
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} className="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Test() {
  return (
    <>
      {['end', 'start', 'top', 'bottom'].map((placement, idx) => (
        <Canvas key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Canvas;