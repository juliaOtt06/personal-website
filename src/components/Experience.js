import React from "react"
import "./Experience.css"
import bg from "./images/background3.jpg"

const Expereince = () => {
    return (
        <div
            id="experience"  
            className="experince-background"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="experience">
                

                <section className="experience-intro">
                    <h1>Experience</h1>
                    <p>This is my work experience</p>
                </section>

                <section className="experience-content">
                    <h1>Uvic Computer Help Desk</h1>
                    <p>description of job</p>
                </section> 
            </div>
            </div>
    );
};

export default Expereince