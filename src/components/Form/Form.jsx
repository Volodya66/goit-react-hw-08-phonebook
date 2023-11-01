
// import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from "yup";

import Input from '../Input/Input'
import Button from '../Button/Button'
import css from './Form.module.css'


const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number:Yup.number().required()
})



export default function ContactForm ({newContact})  {

 const handleSubmit = (values, action) => {

  const { name,number } = values
    if (name) {
    const newContacts = {
      id: nanoid(),
      name: name,
      number: number
    };

    const foo = () => newContact(newContacts);
    foo();
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

