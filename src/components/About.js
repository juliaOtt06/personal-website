// About.js
import React, { useState } from "react";
import "./About.css";
import bg from "./images/background2.jpg";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.JPG";

const slides = [
  { img: img1, title: "Hiking", text: "I enjoy the outside yayy." },
  { img: img2, title: "Climbing", text: "I love bouldering." },
  { img: img3, title: "Music", text: "I like music." },
  { img: img4, title: "Travel", text: "I love to travel." },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const next = () => {
    setIndex((i) => (i + 1) % slides.length);
    setAnimKey((k) => k + 1);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  };

  const goTo = (i) => {
    setIndex(i);
    setAnimKey((k) => k + 1);
  };

  return (
    <div
      id="about"
      className="about-background"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="about">
        <section className="about-me">
          <h1>Get to know</h1>
          <h2>About Me</h2>

          <p className="about-bio">
            Hi! I’m a third-year Computer Science student at the University of
            Victoria, also pursuing a minor in Education. I’m passionate about
            creating thoughtful, user-friendly software and collaborating with
            others to bring ideas to life. I’m currently seeking a co-op position
            where I can apply what I’ve learned, take on new challenges, and
            continue growing as a developer. I’m very social, easy to get along
            with, and love working with people. I enjoy learning, solving
            problems, and contributing to projects that make a real impact.
          </p>
        </section>

        <div className="about-card">
          <button
            className="arrow-btn left"
            onClick={prev}
            aria-label="Previous slide"
            type="button"
          >
            &larr;
          </button>

          <div className="about-swipe-container" key={animKey}>
            <img
              src={slides[index].img}
              alt={slides[index].title}
              className="about-img"
            />

            <div className="about-text">
              <h2>{slides[index].title}</h2>
              <p>{slides[index].text}</p>

              <div className="about-dots" aria-label="Slide indicator">
                {slides.map((s, i) => (
                  <button
                    key={s.title}
                    className={`dot ${i === index ? "active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to ${s.title}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            className="arrow-btn right"
            onClick={next}
            aria-label="Next slide"
            type="button"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
