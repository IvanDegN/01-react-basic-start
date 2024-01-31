import { useState } from "react";
import logo from '/logo-name.svg';

 const Header = () => {

    const [time, setTime] = useState(new Date());

    setInterval(() => {
      setTime(new Date())
      
    }, 1000);

    return(
        <header>
          <img src={logo} alt="logo" />
          {/* <h3>Your current city is: Saint-peterburg</h3> */}
          
          <span> time right now: {time.getHours()}:{time.getMinutes() < 10 ? '0' + time.getMinutes()  : time.getMinutes()}</span>
          
        </header>
    )
  }

  export default Header