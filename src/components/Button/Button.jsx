import css from './Button.module.css'

export default function Button({ type, text, id='',click }) {
    return (
        
        <button className={css.style} onClick={click} id={id} type={type}>{text}</button>
    )
}