import css from './Button.module.css'

export default function Button({ type, text, id='',click, styles1, styles2, onClick }) {
    
     const buttonClass = styles1 ? css[styles1] : '';
    const additionalClass = styles2 ? css[styles2] : ''; 
    return (
        
        <button  className={`${buttonClass} ${additionalClass}`} onClick={click} id={id} type={type}>{text}</button>
    )
}