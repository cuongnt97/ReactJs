import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

export default function ModalHeader() {
  return (
    <div className="modal-header">
      <h5 className="modal-title">Modal title</h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
  );
}
