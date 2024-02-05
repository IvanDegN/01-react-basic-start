import Button from "./Button/Button"

const Tab = ({active, onChange}) =>{
    return(
        <section style={{marginBottom: '1rem'}}>
            <Button isActive={active === 'main'} onClick={() => onChange('main')}>Главная</Button>
            <Button isActive={active === 'fb'} onClick={() => onChange('fb')}>Обратная связь</Button>
            <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Effect</Button>
        </section>
    )
}

export default Tab