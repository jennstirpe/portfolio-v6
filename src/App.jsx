import { useState } from 'react'
import GlobalStyles from './components/global/Global'
import { ThemeProvider } from "styled-components"
import { mainTheme } from "../themes"
import { StyledHeader } from './components/header/styled/Header.styled'
import Nav from './components/header/Nav'
import Heading from './components/main/Heading'
import { StyledMain } from './components/main/styled/Main.styled'
import { StyledShadow } from './components/global/Shadow.styled'
import WorkModal from './components/modals/WorkModal'


function App() {
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ workModal, setWorkModal ] = useState(false)

  function showShadow() {
    setModalOpen(true);
  }

  function hideShadow()  {
    setModalOpen(false)
  }

  function toggleWork() {
    if (workModal) {
      setWorkModal(false)
    } else {
      setWorkModal(true)
    }
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
          <button className={workModal ? "work-modal_btn open" : "work-modal_btn"} onClick={toggleWork}>
            {workModal ? "Close x" : "Work"}
          </button>
          {
            workModal ? <WorkModal /> : null
          }
          
        </StyledMain>

      </>
    </ThemeProvider>
  )
}

export default App
