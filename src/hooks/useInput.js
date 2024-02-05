import { useState } from "react"

const UseInput = (defaultValue = '') =>{
   const [value, setValue] = useState(defaultValue)

   return{
    value,
    onChange: (event) => setValue(event.target.value)
   }
}

export default UseInput