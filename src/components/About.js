import React, { useState } from "react";
import "./About.css";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

const slides = [ // array of objects
    {
        img: img1,
        title: "Hiking",
        text: "I enjoy the outisde yayy."
    },
    {
        img: img2,
        title: "Climbing",
        text: "I love bouldering"
    },
    {
        img: img3,
        title: "Music",
        text: "I like music"
    }
];

const About = () => {
    const [index, setIndex] = useState(0); //useState(0) sets the first slide (index 0) to be shown as default
                                           //index stores which slide ur on
                                           //setIndex updates index 
    const next = () => setIndex((i) => (i + 1) % slides.length); //moves slides forwards
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length); //moves slides backwards

    return (
    
        <div id="about" className="about">

            <section className="about-me">
                <h1>About me</h1>
                <p>This is who I am</p>
            </section>

            <div className="about-swipe-container">

                <img //gets image for current slide
                src={slides[index].img} 
                alt={slides[index].title} 
                className="about-img"
                />

                <div className="about-text"> {/* displays text for current slide */}
                <h2>{slides[index].title}</h2> 
                <p>{slides[index].text}</p>
                </div>

            </div>

            <div className="about-buttons">
                <button onClick={prev}>&larr;</button> {/* larr is arrow pointing left */}
                <button onClick={next}>&rarr;</button> {/* rarr is arrow pointing right */}
            </div>

        </div>
    );
};

export default About; 