import { useState } from 'react'
import Button from './Button/Button'

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

            <form action="">
                <label htmlFor="name">Ваше имя</label>
                <input style={{border: form.error ? '1px solid red' : null }} type="text" id="name" className="control" value={form.inputValue} onChange={changeValueInput}/>

                <label htmlFor="reason">Причина обращения</label>
                <select name="" id="reason" className="control" value={form.selectValue} onChange={ (event) => setForm(prev => ({...prev, selectValue: event.target.value}) )}>
                    <option value="Ошибка">Ошибка</option>
                    <option value="Нужна помощь">Нужна помощь</option>
                    <option value="Предложение">Предложение</option>
                </select>
            </form>

           { /* <pre> */} 
                {/* Name: {form.inputValue}
                <br />
                Select: {form.selectValue} */}
               {/* {JSON.stringify(form,null,2)} */}
           { /* </pre> */ }

            <Button disabled={form.error} isActive={!form.error}>Отправить</Button>

            

        </section>
    )
}

export default Feedback