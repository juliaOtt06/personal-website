import React from "react";
import "./Home.css";
import me from "./images/me.JPG";
import bg from "./images/background.jpg";


const Home = () => {
    return (
        <div 
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

                <div id="contact" className="contact" >
                    <h3>Contact</h3>
                    <p>
                        You can reach me at{" "}
                        <a href="mailto:ottenbreitjulia06@gmail.com">
                            ottenbreitjulia06@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home; 

