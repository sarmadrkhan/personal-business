import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Col, Row } from "react-bootstrap";
const Contact = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <Row className={styles.contactContainer}>
        <Col className={styles.textColumn}>
          <p className={styles.mapText}>
            Welcome to Raees Herbal Dawakhana, your trusted healthcare provider. Our clinic is dedicated to delivering high-quality, compassionate care to our patients.
            <br />
            <br />
            Should you have any questions about our services or wish to schedule an appointment, please don't hesitate to reach out to us using the contact information provided below:
          </p>
          <p>
            Contact Numbers:
            <br />
            📞 +92 318 5449397 
            <br />
            📞 +92 332 7839369
          </p>
          <p>
            Address:
            <br />
            Raees Herbal Dawakhana
            <br />
            New Morgrah Road
            <br />
            Rawalpindi, Punjab, 46000
            <br />
            Pakistan
          </p>
        </Col>
        <Col className={styles.mapColumn}>
          {loading && <div className={styles.spinner}></div>}
          <iframe
            title="clinic-location-google-maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13300.280501416377!2d73.0800464!3d33.5515543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff33340b0255b%3A0xdeeb92d075359d8!2sRaees%20Herbal%20Dawakhana!5e0!3m2!1sen!2s!4v1683642961203!5m2!1sen!2s"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            onLoad={handleLoad}
          />
        </Col>
      </Row>
    </>
  );
};

export default Contact;
