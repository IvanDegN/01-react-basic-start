import { useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

const Effect = () =>{

    const [show, setShow] = useState(false)

   

    const openModal = () =>{
        setShow(true)
    }

    return(
        <section>
            <h3>Effect</h3>

            <Button onClick={openModal}>Открыть модальное окно</Button>

            <Modal open={show}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti quos cupiditate labore explicabo quis fuga suscipit. Vero assumenda corrupti iure ab ipsa recusandae qui, deleniti veritatis maxime vel perspiciatis.</p>
                <Button onClick={ () => setShow(false) }>Close Modal</Button>
            </Modal>

            
            

            

        </section>
    )
}

export default Effect