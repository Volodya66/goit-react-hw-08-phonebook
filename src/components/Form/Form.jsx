
import React, { Component } from 'react';
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

class ContactForm extends Component{
    // state = {
    //     name: '',
    //     number: ''
    // }
    
handleSubmit = (values, action) => {
//   console.log(this.props)
  const { name,number } = values
    if (name) {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    };

    const foo = () => this.props.newContact(newContact);
    foo();
  }
    action.resetForm();
}
    
    render() {
    return (
    <div className={css.wrapper}>
    <Formik
        validationSchema={schema}
        initialValues={{
        name: '',
        number: ''
    }}
        onSubmit={this.handleSubmit}>
        
    <Form  autoComplete="off">
            
    <Input/>
    <Button type={'submit'} text={'Add contact'}/>
    </Form>
    </Formik> 
    </div>
    )
    }
}


export default ContactForm;