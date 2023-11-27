import { Field,ErrorMessage  } from 'formik'

import css from './Input.module.css'


// const NumberInput = () => (
//   <ul className={css.listNum}>
//     {Array.from('380954835493').map((digit, index) => (
//       <li key={index} className={`${css.itemNum} ${css[`animationDelay${index + 1}`]}`}>
//         {digit}
//       </li>
//     ))}
//   </ul>
// );

export default function Input() {
    
   return (
      <div className={css.container}>

      <label className={css.label} >
           {/* <p>Name</p> */}
         <Field  placeholder='Name' className={css.inp}  type="text" name="name" />
         <ErrorMessage name="name">
                 {() => <div className={css.error}>Please enter your name</div>}
         </ErrorMessage>
      </label>
      
      
      <label className={css.label} >
          {/* <p>Number</p>   */}
         <Field className={css.inp}  placeholder="Email" type="email" name="email" />
         <ErrorMessage name="email">
                 {() => <div className={css.error}>Enter your email</div>}
         </ErrorMessage>
      </label>
      <label className={css.label} >
          {/* <p>Number</p>   */}
         <Field className={css.inp}  placeholder="Password" type="password" name="password" />
         <ErrorMessage name="password">
                 {() => <div className={css.error}>Please enter your sting</div>}
         </ErrorMessage>
      </label>
         
      </div>
 )

}