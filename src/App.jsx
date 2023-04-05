import GlobalStyles from './components/global/Global'
import { ThemeProvider } from "styled-components"
import { mainTheme } from "../themes"
import { StyledHeader } from './components/header/Header.styled'
import Nav from './components/header/Nav'
import Heading from './components/main/Heading'
import { StyledMain } from './components/main/Main.styled'


function App() {

  return (
    <ThemeProvider theme={mainTheme}>
      <>
      <GlobalStyles />

        <StyledHeader>
          <Nav />
        </StyledHeader>

        <StyledMain>
          <Heading />
        </StyledMain>

      </>
    </ThemeProvider>
  )
}

export default App
