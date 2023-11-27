
import { Formik, Form } from 'formik';
//? import { nanoid } from 'nanoid'
import * as Yup from "yup";

import { useDispatch } from 'react-redux';
// import { addNewContact } from 'redux/slice';
// import * as contactsAPI from '../../redux/contact/contacts-api'
//? import *as contactOperations from '../../redux/contact/contactOperations'
import {loginUsers} from '../../../redux/connectionsAPI/auth-operations'

import  InputLogin from '../InputLogin/InputLogin'
import Button from '../../Button/Button'
import css from './FormLogin.module.css'


const schema = Yup.object().shape({
    emailLogin: Yup.string().required('Required'),
    passwordLogin:Yup.string().required('Required')
})

export default function FormLogin ()  {
  
const dispatch = useDispatch();

const handleSubmit = (values, action) => {
  // console.log('values: ', values);

  const { emailLogin, passwordLogin} = values
  if (emailLogin) {
    const newContacts = {
    email: emailLogin,
    password: passwordLogin,
  };
    console.log(newContacts)
  dispatch(loginUsers(newContacts))      
    action.resetForm();
    }
  };

 const onClickCancel = () => {
    alert('Хиии, потицяй трошки пальчиками, я лінива телефонна книга')
  };
    
return(
      <div className={css.wrapper}>
        <Formik
          validationSchema={schema}
          initialValues={{
            emailLogin: "",
            passwordLogin: "",
          }}
          onSubmit={handleSubmit}>
        
          <Form className={css.forma} autoComplete="off">
            
            <InputLogin />
            
 
            <ul className={css.listBtn}>
              <li><Button id='3' onClick={onClickCancel} type={'button'} styles1={'style'} text={'Cancel'} /></li>
              <li><Button  id='4' type={'submit'} styles1={'style'} styles2={'blue'} text={'Save'} /></li>
            </ul>
    
          </Form>
        </Formik>
      </div>
    )


}
