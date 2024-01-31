
import Header from "./components/Header"

import Button from "./components/Button/Button"
import { useState } from "react"
import Teach from "./components/Teach"
import Differences from "./components/Differences"


function App() {

  return (
    <div>
        <Header/>
        <main>
      <Teach/>
      <Differences/>
        </main>
    </div>
  )
}

export default App
