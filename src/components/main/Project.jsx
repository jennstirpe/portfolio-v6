import { useState } from "react"
import { StyledProject } from "./Project.styled"
import CloseBtn from "../global/CloseBtn";

export default function Project({ project }) {
    const [detailsActive, setDetailsActive] = useState(false);
    const [descActive, setDescActive] = useState(false);

    function toggleAll() {
        if (detailsActive)  {
            setDetailsActive(false)
        } else  {
            setDetailsActive(true)
        }

        if(descActive) {
            setDescActive(false)
        }
    }

  return (
    <StyledProject >
        <div onClick={() => toggleAll()} aria-label="Toggle project details" className="project-card" style={!detailsActive ? {"backgroundImage": `url(${project.img})`} : null}>

            {
                detailsActive ? (
                    <div className={descActive ? "project-details hidden" : "project-details"}>
                        <h4 className="project-name">{project.name}</h4>
                        <div className="project-tech-list">
                            {
                                project.tech.map(tech => {
                                    return <span key={tech} className="project-tech">{tech}</span>
                                })
                            }
                        </div>
                        <button onClick={() => setDescActive(true)} className="project-modal-btn">More Info</button>

                        <div className="project-links">
                            <a className="project-link" href={project.github} aria-label="GitHub repository"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                            <a className="project-link" href={project.link} aria-label="Live site"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                        </div>
                    </div>
                ) : (
                    <div className="card-header">
                        <h3 className="card-header-name">{project.name}</h3>
                        {
                            project.img === "" ? <p className="card-header-status">Status: Active</p> : null
                        }
                    </div>
                )
            }

            {
                descActive ? (
                    <div className="project-desc-modal">
                        <button onClick={() => setDescActive(false)} className="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <p className="project-desc">{project.description}</p>
                    </div>
                ) : null
            }
        </div>
    </StyledProject>
  )
}