import React from "react";
import styles from "./style.section4.module.css";
import { Container } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const testimoni = [
  {
    img: "assets/img/img_photo1.png",
    rating: "",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    name: "John Dee 32, Bromo",
  },
  {
    img: "assets/img/img_photo2.png",
    rating: "",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    name: "John 30, Bromo",
  },
  {
    img: "assets/img/img_photo1.png",
    rating: "",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    name: "John Dee 32, Bromo",
  },
  {
    img: "assets/img/img_photo2.png",
    rating: "",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    name: "Dee 32, Bromo",
  },
];

export default function Section4() {
  return (
    <>
      <Container className={styles.containerFluid}>
        <h1 className={styles.h1}>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>

        <div className="row mt-5">
          <div className="col-12 m-auto">
            <div className="owlCarousel">
              {testimoni.map((a) => (
                <div className={styles.item}>
                  <img
                    src={a.img}
                    alt="img"
                    className={styles.img}
                  />
                  <div className={styles.testimoni}>
                    <div className={styles.ratingContainer}>
                        <StarFill className={styles.checked}/>
                        <StarFill className={styles.checked}/>
                        <StarFill className={styles.checked}/>
                        <StarFill className={styles.checked}/>
                        <StarFill className={styles.checked}/>
                    </div>
                    <p className={styles.quote}>
                      “{a.quote}”
                    </p>
                    <p className={styles.name}>{a.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
