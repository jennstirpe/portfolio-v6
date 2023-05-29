import { useState } from 'react'
import GlobalStyles from './components/global/Global'
import { ThemeProvider } from "styled-components"
import { mainTheme } from "../themes"
import { StyledHeader } from './components/header/Header.styled'
import Nav from './components/header/Nav'
import Heading from './components/main/Heading'
import { StyledMain } from './components/main/Main.styled'
import { StyledShadow } from './components/global/Shadow.styled'
import ProjectsSection from './components/main/ProjectsSection'


function App() {
  const [ modalOpen, setModalOpen ] = useState(false);

  function showShadow() {
    setModalOpen(true);
  }

  function hideShadow()  {
    setModalOpen(false)
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <>
      <GlobalStyles />
        
        <StyledHeader>
          <Nav showShadow={showShadow} hideShadow={hideShadow} />
        </StyledHeader>

        {
          modalOpen ? <StyledShadow></StyledShadow> : null
        }

        <StyledMain>
          <Heading />
          <ProjectsSection />
        </StyledMain>

      </>
    </ThemeProvider>
  )
}

export default App
