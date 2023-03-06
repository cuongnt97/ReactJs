import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function ModalFooter() {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
      <button type="button" className="btn btn-primary">
        Save changes
      </button>
    </div>
  );
}
