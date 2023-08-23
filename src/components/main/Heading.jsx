import { StyledHeading } from "./styled/Heading.styled"

export default function Heading() {
  return (
    <StyledHeading>
      
        <div className="animate__animated animate__fadeInUp">
          <h1 className="heading-name">Jennifer Stirpe</h1>
          <h2 className="heading-title">Front-End Web Developer</h2>
        </div>
        
        <ul className="socials">
          <li className="social">
            <a href="https://www.linkedin.com/in/jenniferstirpe/" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          </li>
          <li className="social">
            <a href="https://github.com/jennstirpe" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github-square"></i></a>
          </li>
        </ul>

        
    </StyledHeading>
  )
}
