
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
    number:Yup.number().required()
})



export default function ContactForm ()  {

const dispatch = useDispatch();
let contactsList = useSelector(state =>   state.contact.value);


const pushedContacts = (newContact) => {

 const namePerson = newContact.name;
//  console.log('namePerson: ', namePerson);
 const condition = contactsList.some(contact => contact.name.toLowerCase() === namePerson.toLowerCase());
//  console.log('condition: ', condition);
 
if (condition) {
  alert(`${namePerson} is already in contacts`);
  return
};

 dispatch(addNewContact(newContact))
  
};
  
 const handleSubmit = (values, action) => {

   
   
  const { name,number } = values
    if (name) {
    const newContacts = {
      id: nanoid(),
      name: name,
      number: number
    };

      pushedContacts(newContacts);
  }
    action.resetForm();
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
        
    <Form  autoComplete="off">
            
    <Input/>
    <Button type={'submit'} text={'Add contact'}/>
    </Form>
    </Formik> 
    </div>
    )

};

