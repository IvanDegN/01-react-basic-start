import {ways} from '../data'
import Card from './Card'

const Teach = () =>{

    return(
        <section>
        <h3>Наш подход к обучению</h3>
        <ul>
          {ways.map( item =>   <Card key={item.title} {...item} /> )}
          
        </ul>
      </section>
    )
}

export default Teach