import React, { useState} from "react" //useState, used to track what slide user is on
import "./Experience.css"
import bg from "./images/background3.jpg"

import uvic from "./images/uvic2.png"
import berwick from "./images/berwick2.png"
import boathouse from "./images/boathouse2.png"
import roots from "./images/roots2.png"

const experiences = [
    {
        id: "uvic",
        logo: uvic,
        title: "UVic Computer Help Desk",
        role: "Computer Help Desk Analyst",
        date: "September 2025 - Present",
        description: [
          <>Provide technical support to students, faculty, and staff for campus network access, Microsoft 365, Multi-Factor Authentication, and device-related issues.</>,
          <>Troubleshoot and resolve hardware, software, and account-related problems while maintaining clear and professional communication.</>,
          <>Develop strong problem-solving and customer service skills in a fast-paced IT support environment.</>
        ]
    },
    {
        id: "Berwick House",
        logo: berwick,
        title: "Berwick House Retirement Community",
        role: "Receptionist and Maintanence Workder",
        date: "June 2025 - August 2025",
        description: [
          <>Responded promptly to resident emergencies by assessing situations, contacting emergency services, and documenting incidents accurately.</>,
          <>Managed incoming calls and inquiries, redirecting requests to appropriate departments and ensuring timely follow-up.</>,
          <>Supported daily resident needs, including assistance with basic technology and administrative tasks.</>
        ]
    },
    {
        id: "Boathouse",
        logo: boathouse,
        title: "Boathouse Canada",
        role: "Shift Supervisor",
        date: "June 2024 - March 2025",
        description: [
          <>Supported store operations by managing cash transactions, exchanges, and returns with accuracy and efficiency.</>,
          <>Acted as manager on duty, overseeing staff and ensuring smooth daily operations.</>,
          <>Delivered consistent customer service in high-pressure retail environments.</>
        ]
    },
    {
        id: "Roots",
        logo: roots,
        title: "Roots",
        role: "Sales Associate",
        date: "August 2022 - September 2023",
        description: [
          <>Provided attentive customer service in a fast-paced retail environment, assisting customers with product selection and purchases.</>,
          <>Supported store operations through cash handling, closing procedures, and maintaining an organized sales floor.</>,
          <>Upheld visual standards by organizing merchandise and ensuring consistent store presentation.</>
        ]
    }
];

const Experience = () => {
    const [active, setActive] = useState(experiences[0]); /* active = variable, setActive = updates variable */
                                                          
    return (
      <div
        id="experience"
        className="experince-background"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="experience">
  
          <section className="experience-intro">
            <h1>Where I've worked</h1>
            <h2>Experience</h2>
          </section>
  
          <section className="experience-layout">
  
            <div className="experience-buttons">
              {experiences.map((exp) => ( //.map makes a button for each experince in experiences, exp is the variable name
                                          // exp exist only inside .map
                <button
                  key={exp.id} // reacted uses key to track which element is which, and helps it upadte efficeinthy when state changes
                  className={`logo-button ${
                    active.id === exp.id ? "active" : "" // if the buttons experience is currently active then add active to the class
                  }`}
                  onClick={() => setActive(exp)} // when user clicks button, update state
                                                // use => becuase that runs on click
                >
                  <img src={exp.logo} alt={exp.title} /> {/* displays the image for the burron */}
                </button>
              ))}
            </div>
  
            {/* EXPERIENCE DETAILS */}
            <div className="experience-content glass">
              <h2>{active.title}</h2>
              <div className="role-line">
                <h3>{active.role}</h3>
                {active.date && <span className="role-date">{active.date}</span>}
              </div>

              {Array.isArray(active.description) ? (
                <ul className="experience-bullets">
                  {active.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{active.description}</p>
              )}
            </div>
  
          </section>
        </div>
      </div>
    );
  };
  
export default Experience;

