import { StyledHeading } from "./Heading.styled"

export default function Heading() {
  return (
    <StyledHeading>
        <div>
          <h1 className="heading-name">Jennifer Stirpe</h1>
          <h2 className="heading-title">Frontend Web Developer</h2>
        </div>
        
        <ul className="socials">
          <li className="social">
            <a href="https://www.linkedin.com/in/jenniferstirpe/" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          </li>
          <li className="social">
            <a href="https://github.com/jennstirpe" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github-square"></i></a>
          </li>
        </ul>

        
    </StyledHeading>
  )
}
