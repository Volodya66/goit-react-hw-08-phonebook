
import { Formik, Form } from 'formik';
//? import { nanoid } from 'nanoid'
import * as Yup from "yup";

 import { useDispatch} from 'react-redux';
// import { addNewContact } from 'redux/slice';
// import * as contactsAPI from '../../redux/contact/contacts-api'
//? import *as contactOperations from '../../redux/contact/contactOperations'
import * as authOperations from '../../../redux/connectionsAPI/auth-operations'

import Input from '../InputRegister/Input'
import Button from '../../Button/Button'
import css from './Form.module.css'



const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email:Yup.string().required('Required'),
    password:Yup.string().required('Required')
})



export default function FormRegister ()  {

const dispatch = useDispatch();
// const contactsList = useSelector(state =>   state);

// console.log('contactsList: ', contactsList);



const handleSubmit = (values, action) => {

  const { name, password,email } = values
  if (name) {
    const newContacts = {
      name: name,
      email: email,
      password: password
    };
   
      
    // console.log('newContacts: ', newContacts);
    
    dispatch(authOperations.registerUsers(newContacts))
    action.resetForm();
  }
};


  const onClickCancel = () => {
    alert('Хиии, потицяй трошки пальчиками, я лінива телефонна книга')
  };

    return (
      <div className={css.wrapper}>
        <Formik
          validationSchema={schema}
          initialValues={{
            name: "",
            email: "",
            password: ""
          }}
          onSubmit={handleSubmit}>
        
          <Form className={css.forma} autoComplete="off">
            
            <Input />
            
 
            <ul className={css.listBtn}>
              <li><Button id='4'  onClick={onClickCancel} type={'button'} styles1={'style'} text={'Cancel'} /></li>
              <li><Button id='6' type={'submit'} styles1={'style'} styles2={'blue'} text={'Save'} /></li>
            </ul>
    
          </Form>
        </Formik>
      </div>
    )
  
};




//             <ul className={css.listNum}>
//   {Array.from('380954835493').map((digit, index) => (
//     <li key={index} className={`${css.itemNum}  ${css[`animationDelay${index + 1}`]}`}>{digit}</li>
//   ))}
// </ul> 

