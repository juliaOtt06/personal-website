import "./BottomNavBar.css";
import {FaHome, FaUser, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const BottomNavBar = () => { /* function */
    const scrollToSection = (id) => { /* to keep function private */
        const section = document.getElementById(id); /* searches through html that the browser creates when reacts app runs */
        if (section) {
            section.scrollIntoView({ behavior: "smooth"});
        }
    };

    return (
        <nav className="bottom-nav">
            <button onClick={() => scrollToSection("home")}> {/*when the user presses this button go to this section */}
                <FaHome/> {/* renders a home icon */}
                <span>Home</span> {/* text label for button */}
            </button>

            <button onClick={() => scrollToSection("about")}>
                <FaUser/>
                <span>about</span>
            </button>

            <button onClick={() => scrollToSection("experience")}>
                <FaTools/>
                <span>Experience</span>
            </button>

            <button onClick={() => scrollToSection("projects")}>
                <FaFolderOpen/>
                <span>Projects</span>
            </button>

            <button onClick={() => scrollToSection("contact")}>
                <FaEnvelope/>
                <span>Contact</span>
            </button>
        </nav>
    );
};

export default BottomNavBar;