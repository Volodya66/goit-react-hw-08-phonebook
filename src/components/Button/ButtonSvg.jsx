
import css from './ButtonSvg.module.css'

export default function BtnSvg ({onClick,children}) {
  
return (
    
    <>
    
        <button className={css.svg} type="button" onClick={onClick} >{ children}</button>
    
    
    </>

)

}
