import { Fragment, useState, useRef } from 'react'
import Button from './Button/Button'


const StateVsRef = () =>{
    const input = useRef()
    const [show, setShow] = useState(false)

    // const getValue = (event) =>{
    //     console.log(event.target.value)
    //     setValue(event.target.value)
    // }
    
    const handled = (event) =>{
        if(event.key == "Enter"){
            setShow(true)
            
        } 
    }

    return(
        
            <div>
                
                <h3>Input value: {show && input.current.value} </h3>
                <input ref={input} type="text" onKeyDown={handled} className='control'   />
                
            </div>
        
    )
}

const Feedback = () =>{

    const [form, setForm] = useState({
        inputValue: '',
        selectValue: 'Предложение',
        error: false,
    });

    // const [inputValue, setInputValue] = useState('')
    // const [selectValue, setSelectValue] = useState('')
    // const [error, setError] = useState(false)

    const changeValueInput = (event) =>{
        // const name = event.target.value;
        // setInputValue(name)
        // setError(name.trim().length === 0)
        setForm(prev => (
            {...prev,
            inputValue:  event.target.value,
            error: event.target.value.trim().length === 0, 
        }) )
        // setForm({
            
        //     selectValue: form.selectValue
        // })
    }

    // const changeValueSelect = (event) =>{
    //     // const reason = event.target.value
    //     // setSelectValue(reason)
    //     // setForm({
    //     //     selectValue: event.target.value
    //     // })
    // }

    // const toggleError = () =>{
    //     // setError( (prev) => !prev )
    //     // setError( (prev) => !prev )
        
    // }

    return(
        <section>
            <h3>Обратная связь</h3>

            {/* <Button onClick={toggleError}>Toggel error</Button> */}

            <form action="" style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Ваше имя</label>
                <input style={{border: form.error ? '1px solid red' : null }} type="text" id="name" className="control" value={form.inputValue} onChange={changeValueInput}/>

                <label htmlFor="reason">Причина обращения</label>
                <select name="" id="reason" className="control" value={form.selectValue} onChange={ (event) => setForm(prev => ({...prev, selectValue: event.target.value}) )}>
                    <option value="Ошибка">Ошибка</option>
                    <option value="Нужна помощь">Нужна помощь</option>
                    <option value="Предложение">Предложение</option>
                </select>
                <Button disabled={form.error} isActive={!form.error}>Отправить</Button>
                
            </form>
            <StateVsRef/>
            
            
           { /* <pre> */} 
                {/* Name: {form.inputValue}
                <br />
                Select: {form.selectValue} */}
               {/* {JSON.stringify(form,null,2)} */}
           { /* </pre> */ }
        </section>

        
    )
}

export default Feedback