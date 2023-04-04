import { useState } from 'react'
import GlobalStyles from './components/global/Global'
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../themes"
import { StyledHeader } from './components/header/Header.styled'
import Nav from './components/header/Nav'
import Heading from './components/main/Heading'
import { StyledMain } from './components/main/Main.styled'
import ProjectsModal from './components/modals/ProjectsModal';


function App() {
  const [ projectsOpen, setProjectsOpen ] = useState(false);

  return (
    <ThemeProvider theme={mainTheme}>
      <>
      <GlobalStyles />

        <StyledHeader>
          <Nav />
        </StyledHeader>

        <StyledMain>
          <Heading />
          <button onClick={() => setProjectsOpen(true)} className="main-project-btn">Projects</button>
        </StyledMain>

        {
          projectsOpen ? <ProjectsModal />  : null
        }

      </>
    </ThemeProvider>
  )
}

export default App
