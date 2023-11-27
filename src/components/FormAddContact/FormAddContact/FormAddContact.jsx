
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { createNewContact } from 'redux/contactAPI/contactOperations';

import { useDispatch, useSelector } from 'react-redux';

// import *as contactOperations from '../../../redux/contact/contactOperations'

import Input from '../InputAddContacts/InputAddContact';
import Button from '../../Button/Button'
import css from './FormAddContact.module.css'


const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number:Yup.number().required('Required')
})



export default function ContactForm ({closeModal})  {

const dispatch = useDispatch();
  const contactsList = useSelector(state => state.contact.contacts);
  const loadContact = useSelector(state => state.contact.loadingAddContact);


  
const handleSubmit = (values, action) => {

  const { name, number } = values
  if (name) {
    const newContacts = {
        
        name: name,
        number: number,
    };
    // console.log('newContacts: ', newContacts);
      const namePerson = newContacts.name;
      const condition = contactsList.some(contact => contact.name.toLowerCase() === namePerson.toLowerCase());
      if (condition) {
           alert(`${namePerson} is already in contacts`);
           return
          };
        
        dispatch(createNewContact(newContacts))
        
    action.resetForm();
    }
  };

  const onClickCancel = () => {
    alert('Хиии, потицяй трошки пальчиками, я лінива телефонна книга');
    closeModal()
  };

    return (
      <div className={css.wrapper}>
        <Formik
          validationSchema={schema}
          initialValues={{
            name: '',
            number: ''
          }}
          onSubmit={handleSubmit}>
          <Form className={css.forma} autoComplete="off">
            
            <Input />
            
  
            <ul className={css.listBtn}>
              <li><Button onClick={onClickCancel} id='1' type={'button'} styles1={'style'} text={'Cancel'} /></li>
              <li><Button type={'submit'} id='2' styles1={'style'} styles2={'blue'} text={ loadContact? "Loading...":"Save" } /></li>
            </ul>
    
          </Form>
        </Formik>
      </div>
    )
  
};