import React from "react";
import { images } from "./Data";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            More Information <br /> About The Best Beaches in Thailand
          </h2>
          <p className="about__description">
            Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha.
          </p>
          <a href="#places" className="button">
            Reserve a place
          </a>
        </div>
        <div className="about__img">
          {images.map((image, i) => (
            <div className="about__img-overlay" key={i}>
              <img
                src={image.image}
                alt="images-1"
                className={image.classes.join(" ")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
