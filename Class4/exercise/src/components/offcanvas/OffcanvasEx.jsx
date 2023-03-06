import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

function OffcanvasEx() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <>
      <Button variant="primary" onClick={toggleShow}>
        Open Offcanvas
      </Button>
      <Offcanvas show={show} onHide={toggleShow}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Example Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Hello, world! This is an example offcanvas.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasEx;
