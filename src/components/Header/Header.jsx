import { useState } from "react";
import logo from '/logo-name.svg';
import {styled} from 'styled-components'
//import './Header.css'

 const StyleHeader = styled.header`
height: 50px;
display: flex;
padding: 0 2rem;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ccc;
background: #fafafa;
`

 const Header = () => {

    const [time, setTime] = useState(new Date());

    setInterval(() => {
      setTime(new Date())
      
    }, 1000);

    return(
        <StyleHeader>
          <img src={logo} alt="logo" />
          {/* <h3>Your current city is: Saint-peterburg</h3> */}
          
          <span> time right now: {time.getHours()}:{time.getMinutes() < 10 ? '0' + time.getMinutes()  : time.getMinutes()}</span>
          
        </StyleHeader>
    )
  }

  export default Header