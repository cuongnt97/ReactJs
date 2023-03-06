import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

export default function Modal() {
  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader />
          <ModalBody />
          <ModalFooter/>
        </div>
      </div>
    </div>
  );
}
