import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './Appointment.module.css';

const Appointment = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBookingClick = () => {
    handleShow();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Book an Appointment</h2>
      <p className={styles.text}>Ready to take the next step? Book a consultation with our experts to discuss your needs and how we can help.</p>
      <button className={styles.button} onClick={handleBookingClick}>Book Now</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Booked</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hooray! You successfully booked an appointment.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Appointment;
