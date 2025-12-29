import React from "react";
import "./Contact.css";
import bg from "./images/background4.png";
import {
    SlEnvolopeLetter,
    SlSocialLinkedin,
    SlSocialGithub
} from "react-icons/sl";

const Contact = () => {
    return (
        <div
            id="contact"
            className="contact-background"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="contact-content">

                <p className="contact-subtitle">Get in touch</p>
                <h1 className="contact-title">Contact Me</h1>

                <div className="contact-layout">

                    {/* LEFT CARD */}
                    <div className="contact-card">
                        <div className="contact-icon-wrapper">
                            <SlEnvolopeLetter />
                        </div>

                        <h3 className="contact-card-title">Email</h3>
                        <p className="contact-email">
                            ottenbreitjulia06@gmail.com
                        </p>

                        <div className="contact-socials">
                            <a
                                href="https://www.linkedin.com/in/julia-ottenbreit-618b84353"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SlSocialLinkedin />
                            </a>

                            <a
                                href="https://github.com/juliaOtt06"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SlSocialGithub />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <form className="contact-form">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;
