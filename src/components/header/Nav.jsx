import { StyledNav } from "./Nav.styled"

export default function Nav() {
  return (
    <StyledNav>
      <ul className="nav-list">
        <li><button className="nav-item">Projects</button></li>
        <li><button className="nav-item">Contact</button></li>
        <li><button className="nav-item">About</button></li>
      </ul>
    </StyledNav>
  )
}
