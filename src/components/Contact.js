import React, {useRef} from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import bg from "./images/background4.png";
import {SlEnvolope, SlSocialLinkedin, SlSocialGithub} from "react-icons/sl";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_iqx80kw",
            "template_4g1oz0h",
            form.current,
            "IIHtlzk8FsSdeBeQQ"
        ).then(
            () => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message.");
                console.error(error);
            }
        );
    };

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

                    <div className="contact-card">
                        
                        <div className="contact-row">
                            <a
                                href="mailto:ottenbreitjulia06@gmail.com"
                                className="contact-icon-link"
                                aria-label="Send email"
                            >
                                <SlEnvolope className="contact-row-icon" />
                            </a>

                            <span className="contact-text">
                                ottenbreitjulia06@gmail.com
                            </span>
                        </div>

                        <div className="contact-row">
                            <a
                                href="https://www.linkedin.com/in/julia-ottenbreit-618b84353"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-icon-link"
                                aria-label="LinkedIn profile"
                            >
                                <SlSocialLinkedin className="contact-row-icon" />
                            </a>

                            <span className="contact-text">
                                Julia Ottenbreit
                            </span>
                        </div>

                        <div className="contact-row">
                            <a
                                href="https://github.com/juliaOtt06"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-icon-link"
                                aria-label="GitHub profile"
                            >
                                <SlSocialGithub className="contact-row-icon" />
                            </a>

                            <span className="contact-text">
                                juliaOtt06
                            </span>
                            </div>
                    </div>

                    <form 
                        className="contact-form"
                        ref={form}
                        onSubmit={sendEmail}>
                        <input 
                            type="text" 
                            placeholder="Name"
                            name="from_name"
                            required />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            name="from_email" 
                            required />
                        <textarea 
                            placeholder="Your Message"
                            name="message"
                            required />
                        <button 
                            type="submit">Send Message </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;
