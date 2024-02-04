import classes from './Button.module.css'

const Button = ({children, onClick, isActive}) =>{

//console.log(classes)

    return(
        <button className={ isActive ? `${classes.button} ${classes.active}` : classes.button  } onClick={onClick}>{children}</button>
    )  
}

export default Button