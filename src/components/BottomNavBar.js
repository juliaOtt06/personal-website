import "./BottomNavBar.css";
import { SlHome, SlUser, SlWrench, SlFolder, SlEnvolope} from "react-icons/sl";

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
                <SlHome/> {/* renders a home icon */}
                <span>Home</span> {/* text label for button */}
            </button>

            <button onClick={() => scrollToSection("about")}>
                <SlUser/>
                <span>about</span>
            </button>

            <button onClick={() => scrollToSection("experience")}>
                <SlWrench/>
                <span>Experience</span>
            </button>

            <button onClick={() => scrollToSection("projects")}>
                <SlFolder/>
                <span>Projects</span>
            </button>

            <button onClick={() => scrollToSection("contact")}>
                <SlEnvolope/>
                <span>Contact</span>
            </button>
        </nav>
    );
};

export default BottomNavBar;