import React, { useState } from 'react';
import { Button, Nav, Navbar, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const titleClickHandler = () => {
		handleShow();
	};

	return (
		<>
			<Navbar bg="dark" variant="dark" className={styles.navbar}>
				<Navbar.Brand className={styles.title}>
					Raees Herbal Clinic
				</Navbar.Brand>
				<Nav className={styles.navlinks}>
					<Link to="/appointment">Appointments</Link>
					<Link to="/review">Reviews</Link>
					<Link to="/contact">Contact Us</Link>
					<Link to="/store">Store</Link>
				</Nav>
				<Button variant='dark' onClick={titleClickHandler}>DO NOT CLICK</Button>
			</Navbar>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Alert</Modal.Title>
				</Modal.Header>
				<Modal.Body>💲300 transferred 💸 to Sarmad Raees Khan's account. Should've followed the clear instructions. HeHeHe 😈</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Header;
