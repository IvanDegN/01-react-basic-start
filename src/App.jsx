
import Header from "./components/Header"

import Button from "./components/Button/Button"
import { useState } from "react"
import Teach from "./components/Teach"
import Differences from "./components/Differences"
import Intro from "./components/Intro"



function App() {

  return (
    <>
        <Header/>
        <main>
        <Intro/>
      <Teach/>
      <Differences/>
        </main>
    </>
  )
}

export default App
