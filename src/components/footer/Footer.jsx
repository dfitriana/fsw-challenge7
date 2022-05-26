import React from "react";
import styles from "./style.module.css";
import { Container, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <Container className={styles.container}>
          <div className={styles.item}>
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            <br />
            binarcarrental@gmail.com <br />
            081-233-334-808
          </div>

          <div className={styles.item}>
            <Nav.Link href="#section2" className={styles.itemLink}>
              Our Services
            </Nav.Link>
            <Nav.Link href="#section2" className={styles.itemLink}>
              Why Us
            </Nav.Link>
            <Nav.Link href="#section2" className={styles.itemLink}>
              Testimonial
            </Nav.Link>
            <Nav.Link href="#section2" className={styles.itemLink}>
              FAQ
            </Nav.Link>
          </div>

          <div className={styles.item}>
            Connect with us
            <div>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_facebook.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_instagram.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_twitter.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_mail.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
              <a className={styles.sosmedLink} href="index.html">
                <img
                  src="assets/img/icon_twitch.svg"
                  alt="icon"
                  className={styles.img}
                />
              </a>
            </div>
          </div>

          <div className={styles.item}>
            Copyright Binar 2022
            <a href="index.html">
              <img
                src="assets/img/logo.png"
                alt="logo"
                className={styles.logo}
              />
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
