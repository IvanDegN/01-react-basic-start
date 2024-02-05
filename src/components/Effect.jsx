import { useEffect, useState, useCallback } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import UseInput from '../hooks/useInput'


const Effect = () =>{

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const input = UseInput()

    const fetchUsers = useCallback( async () => {
            setLoading(true)
          const response =  await fetch('https://jsonplaceholder.typicode.com/users')
          const users = await response.json()
            setUsers(users)
            setLoading(false)
    }, [] )

    useEffect(() => {
        fetchUsers()
    },[fetchUsers])
   
    return(
        <section>
            <h3>Effect</h3>

            <Button style={{marginBottom: '1rem'}} onClick={() => setShow(true) }>Открыть модальное окно</Button>

            <Modal open={show}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti quos cupiditate labore explicabo quis fuga suscipit. Vero assumenda corrupti iure ab ipsa recusandae qui, deleniti veritatis maxime vel perspiciatis.</p>
                <Button onClick={ () => setShow(false) }>Close Modal</Button>
            </Modal>

            
            

            {loading && <p>Loading...</p>}

            {!loading &&
            <>
            <input type="text" className='control' {...input}  /> 
            <ul>
                {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map(user => <li key={user.id}>{user.name}</li>)}
            </ul> 
            </>
            }

        </section>
    )
}

export default Effect