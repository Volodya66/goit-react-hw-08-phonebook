import { Field,ErrorMessage  } from 'formik'

import css from './Input.module.css'

export default function Input() {
    
   return (
      <div className={css.container}>
      <label className={css.label} htmlFor="name">
           <p>Name</p>
         <Field  className={css.inp}  type="text" name="name" />
         <ErrorMessage  name='name'/>
      </label>
      <label className={css.label} htmlFor="number">
          <p>Number</p>  
         <Field className={css.inp} type="tel" name="number" />
         <ErrorMessage name="number">
                 {() => <div className={css.error}>Please enter numbers only</div>}
         </ErrorMessage>
            
      </label>
      </div>
 )

}