import React from "react";
import "./Projects.css"
import bg from "./images/background2.jpg"

import project1 from "./images/personal-portfolio2.jpg"
import project2 from "./images/clinic2.jpg"

const projects = [
    {
        id: 1, 
        title: "Personal Portfolio",
        tech: "React | HTML | CSS",
        image: project1, //for now
        github: "https://github.com/juliaOtt06/personal-website",
        live: "https://juliaott06.github.io/personal-website/"
    },
    {
        id: 2, 
        title: "Clinic Patient Managment System",
        tech: "Pyhton | PyQt6 | JSON",
        image: project2,
        github: "https://github.com/juliaOtt06/clinic-managment-system"
    }
]

const Projects = () => {
    return (
        <div
            id="projects" // put the id here no navbar can jump to section and background photo will be nicely placed on screen
            className="projects-background"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="projects">

                <section className="projects-intro">
                    <h1>My recent work</h1>
                    <h2>Projects</h2>
                </section>

                <div className="project-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>

                            <img
                                src={project.image}
                                alt={project.tittle}
                                className="project-image"
                            />

                            <h2>{project.tittle}</h2>
                            <p classNmae="project-tech">{project.tech}</p>

                            <div className="project-buttons">
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                                
                                {project.live && (
                                    <a
                                      href={project.live}
                                      target="_blank"
                                      rel="nonreferrer"
                                      className="primary"
                                    >
                                        Visit Website
                                    </a>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;