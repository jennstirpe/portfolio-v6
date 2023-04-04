import { useState } from 'react'
import GlobalStyles from './components/global/Global'
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../themes"
import { StyledHeader } from './components/header/Header.styled'
import Nav from './components/header/Nav'
import Heading from './components/main/Heading'
import { StyledMain } from './components/main/Main.styled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={mainTheme}>
      <>
      <GlobalStyles />

        <StyledHeader>
          <Nav />
        </StyledHeader>

        <StyledMain>
          <Heading />
          <button className="main-project-btn">Projects</button>
        </StyledMain>

      </>
    </ThemeProvider>
  )
}

export default App
