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
          <><strong>Provide</strong> technical support to students, faculty, and staff, assisting with issues related to the campus network, Microsoft 365, Multi-Factor authentication, and various devices.</>,
          <><strong>Troubleshoot</strong> and resolve hardware, software and account-related issues while maintaining clear and efficient communication.</>,
          <><strong>Strengthening</strong> problem-solving and communication skills in a dynamic, customer-focused IT environment.</>
        ]
    },
    {
        id: "Berwick House",
        logo: berwick,
        title: "Berwick House Retirement Community",
        role: "Receptionist and Maintanence Workder",
        date: "June 2025 - August 2025",
        description: [
          <><strong>Respond</strong> promptly to resident emergencies by assessing symptoms, contacting emergency services (e.g., 911), and reporting incidents appropriately.</>,
          <><strong>Serve</strong> as the acting manager on duty, providing leadership support by overseeing store operations.</>,
          <><strong>Deliver</strong> excellent customer service while maintaining accuracy and efficiency, even in high-pressure situations.</>
        ]
    },
    {
        id: "Boathouse",
        logo: boathouse,
        title: "Boathouse Canada",
        role: "Shift Supervisor",
        date: "June 2024 - March 2025",
        description: [
          <><strong>Assist</strong> in store operations by managing the cash register, processing transactions, and handling exchanges and returns efficiently.</>,
          <><strong>Serve</strong> as the acting manager on duty, providing leadership support by overseeing store operations.</>,
          <><strong>Deliver</strong> excellent customer service while maintaining accuracy and efficiency, even in high-pressure situations.</>
        ]
    },
    {
        id: "Roots",
        logo: roots,
        title: "Roots",
        role: "Sales Associate",
        date: "August 2022 - September 2023",
        description: [
          <><strong>Deliver</strong> personalized customer service, ensuring a welcoming and efficient shopping experience.</>,
          <><strong>support</strong> store closing procedures, including end-of-day cash handling, tidying the sales floor, and completing cleaning tasks.</>,
          <><strong>Maintain</strong> visual standards by refolding merchandise and organizing displays to enhance product presentation and overall visual appeal.</>
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
            <h1>Experience</h1>
            <p>A look at the roles I’ve held so far, where I’ve built technical skills, problem-solving abilities, and strong communication through hands-on experience.</p>
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

              {/* 🔽 THIS IS THE IMPORTANT PART 🔽 */}
              {/* If description is an array → show bullet points */}
              {/* If it's a string → show normal text */}
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

