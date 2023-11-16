
// import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from "yup";

import { useDispatch ,useSelector} from 'react-redux';
import { addNewContact } from 'redux/slice'; 

import Input from '../Input/Input'
import Button from '../Button/Button'
import css from './Form.module.css'


const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number:Yup.number().required('Required')
})



export default function ContactForm ()  {

const dispatch = useDispatch();
let contactsList = useSelector(state =>   state.contact.value);


const pushedContacts = (newContact) => {

//  const namePerson = newContact.name;

//  const condition = contactsList.some(contact => contact.name.toLowerCase() === namePerson.toLowerCase());
 
// if (condition) {
//   alert(`${namePerson} is already in contacts`);
// return
// };

 dispatch(addNewContact(newContact))
  
};
  
 const handleSubmit = (values, action, add) => {

  const { name,number } = values
    if (name) {
    const newContacts = {
      id: nanoid(),
      name: name,
      number: number
    };

const namePerson = newContacts.name;
const condition = contactsList.some(contact => contact.name.toLowerCase() === namePerson.toLowerCase());
if (condition) {
  alert(`${namePerson} is already in contacts`);
return
};

      
      pushedContacts(newContacts);
  }
    action.resetForm();
}

const onClick = (resetForm) => {
  resetForm();
}

    return (
    <div className={css.wrapper}>
    <Formik
        validationSchema={schema}
        initialValues={{
        name: '',
        number: ''
    }}
        onSubmit={handleSubmit}>
        
    <Form  className={css.forma} autoComplete="off">
            
    <Input/>
    <ul className={css.listBtn}>
      <li><Button onClick={({ resetForm }) => onClick(resetForm)} type={'button'} styles1={'style'} text={'Cancel'}/></li>
      <li><Button type={'submit'} styles1={'style'} styles2={'blue'} text={'Save'}/></li>
    </ul>
    
    </Form>
    </Formik> 
    </div>
    )

};

