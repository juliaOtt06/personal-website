import React from "react";
import "./Home.css";
import me from "./images/me.JPG";
import bg from "./images/background1.jpg";
import About from "./About";  
import Expereince from "./Experience";

const Home = () => {
    return (
        <> {/* lets us return multiple elements */}
            <div 
                id="home"
                className="home-background"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="home-content">

                    <h1 className="title">I'm JULIA</h1>
                    <h2 className="subtitle">Welcome to my website</h2>

                    <div className="image">
                        <img src={me} alt="A picture of me" className="me-img" />
                    </div>

                    <p className="description">
                        This is my space on the web—more updates and projects coming soon!
                    </p>

                </div>
            </div>

            <About />
            <Expereince/>
        </>
    );
};

export default Home;
