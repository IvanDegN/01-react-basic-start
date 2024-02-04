import { useState } from 'react'
import Button from './Button/Button'

const Feedback = () =>{

    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('')

    const changeValueInput = (event) =>{
        const name = event.target.value;
       // console.log(name);
        setInputValue(name)
    }

    const changeValueSelect = (event) =>{
        const reason = event.target.value
        // console.log(reason);
        setSelectValue(reason)
    }

    return(
        <section>
            <h3>Обратная связь</h3>

            <form action="">
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" className="control" value={inputValue} onChange={changeValueInput}/>

                <label htmlFor="reason">Причина обращения</label>
                <select name="" id="reason" className="control" value={selectValue} onChange={changeValueSelect}>
                    <option value="Ошибка">Ошибка</option>
                    <option value="Нужна помощь">Нужна помощь</option>
                    <option value="Предложение">Предложение</option>
                </select>
            </form>

            <pre>
                Name: {inputValue}
                <br />
                Select: {selectValue}
            </pre>

            <Button>Отправить</Button>

            

        </section>
    )
}

export default Feedback