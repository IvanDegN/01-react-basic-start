import { differences } from "../data"
import Button from "./Button/Button";
import { useState } from "react";

const Differences = () =>{
    const [contentType, setContentType] = useState(null);

  const onClick = (type) =>{
    console.log('hi', type);
    setContentType(type)
  }

    return(
        <section>
        <h3>Чем мы отличаемся от других</h3>

        <Button isActive={contentType === 'way'} onClick={()=> {onClick('way')} }>Кнопка way</Button>
        <Button isActive={contentType === 'easy'} onClick={()=> {onClick('easy')}}>Кнопка easy</Button>
        <Button isActive={contentType === 'program'} onClick={()=> {onClick('program')}}>Кнопка program</Button>
        
        {!contentType && <p>Нажми на кнопку</p>}

        {contentType && <p>{differences[contentType]}</p>}
      </section>  
    )

}

export default Differences