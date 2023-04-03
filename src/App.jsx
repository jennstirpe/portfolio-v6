import { useState } from 'react'
import GlobalStyles from './components/global/Global'
import Nav from './components/header/Nav'
import Heading from './components/main/Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GlobalStyles />

      <header>
        <Nav />
      </header>

      <main>
        <Heading />
      </main>

    </>
  )
}

export default App
