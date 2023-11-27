import { Field,ErrorMessage  } from 'formik'

import css from './InputLogin.module.css'


// const NumberInput = () => (
//   <ul className={css.listNum}>
//     {Array.from('380954835493').map((digit, index) => (
//       <li key={index} className={`${css.itemNum} ${css[`animationDelay${index + 1}`]}`}>
//         {digit}
//       </li>
//     ))}
//   </ul>
// );

export default function InputLogin() {
    
return (
    <div className={css.container}>
        
    <label className={css.label} >
       
         <Field className={css.inp}  placeholder="Email" type="email" name="emailLogin" />
         <ErrorMessage name="emailLogin">
                 {() => <div className={css.error}>Enter your email</div>}
         </ErrorMessage>
    </label>

      
      
     <label className={css.label} >
          {/* <p>Number</p>   */}
         <Field className={css.inp}  placeholder="Password" type="password" name="passwordLogin" />
         <ErrorMessage name="passwordLogin">
                 {() => <div className={css.error}>Please enter your password</div>}
         </ErrorMessage>
      </label>
      
    
         
      </div>
 )

}