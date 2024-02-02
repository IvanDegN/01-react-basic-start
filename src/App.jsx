
import Header from "./components/Header/Header"
import Teach from "./components/Teach"
import Differences from "./components/Differences"
import Intro from "./components/Intro"
import Tab from "./components/Tab"
import { useState } from "react"
import Feedback from "./components/Feedback"



function App() {
const [tab, setTab] = useState('fb');

  
  return (
    <>
        <Header/>
        <main>
        <Intro/>
        <Tab active={tab} onChange={ (current) => setTab(current)  }/>
        {tab === 'fb' && <Feedback/>}

        {tab === 'main' && 
        <>
        <Teach/>   
        <Differences/>
        </>
        }
        </main>
    </>
  )
}

export default App
