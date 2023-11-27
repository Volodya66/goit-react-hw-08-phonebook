
import css from './ButtonSvg.module.css'

export default function BtnSvg ({children}) {
   
  
return (
    
    <>
    
        <button className={css.svg} type="button"  >{ children}</button>
    
    
    </>

)

}
