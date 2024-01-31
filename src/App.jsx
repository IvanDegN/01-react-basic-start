
import Header from "./components/Header"
import {ways} from "./data"
import { differences } from "./data"
import Card from "./components/Card"
import Button from "./components/Button/Button"
import Diff from "./components/Diff"
import { useState } from "react"


function App() {
  const [contentType, setContentType] = useState(null);

  //console.log('render')

  const onClick = (type) =>{

    console.log('hi', type);
    setContentType(type)


  }

  // let TabContent = null

  // if(contentType){
  //   TabContent = <p>{differences[contentType]}</p>
  // }
  // else{
  //   TabContent = <p>Нажми на кнопку</p>
  // }

  return (
    <div>
        <Header/>
        <main>
      <section>
        <h3>Наш подход к обучению</h3>
        <ul>
          {ways.map( item =>   <Card key={item.title} {...item} /> )}
          {/* <Card title={ways[0].title} description={ways[0].description}/>
          <Card {... ways[1]}/>
          <Card {... ways[2]}/>
          <Card {... ways[3]}/> */}
        </ul>
      </section>
      <section>
        <h3>Чем мы отличаемся от других</h3>

        <Button isActive={contentType === 'way'} onClick={()=> {onClick('way')} }>Кнопка way</Button>
        <Button isActive={contentType === 'easy'} onClick={()=> {onClick('easy')}}>Кнопка easy</Button>
        <Button isActive={contentType === 'program'} onClick={()=> {onClick('program')}}>Кнопка program</Button>
        

        {/* <p>{ contentType ? differences[contentType] : <p>Нажми на кнопку</p>   }</p>

        { !contentType ? <p>Нажми на кнопку</p> : null  }

        { contentType ? differences[contentType] : null  } */}

        {!contentType && <p>Нажми на кнопку</p>}

        {contentType && <p>{differences[contentType]}</p>}

        {/* {TabContent} */}

      </section>  
        </main>
    </div>
  )
}

export default App
