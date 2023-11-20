
import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from "yup";

import { useDispatch ,useSelector} from 'react-redux';
// import { addNewContact } from 'redux/slice';
import * as contactsAPI from '../../redux/contact/contacts-api'
import *as contactOperations from '../../redux/contact/contactOperations'

import Input from '../Input/Input'
import Button from '../Button/Button'
import css from './Form.module.css'


const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number:Yup.number().required('Required')
})



export default function ContactForm ()  {

const dispatch = useDispatch();
const contactsList = useSelector(state =>   state.contacts.contact);
// console.log('contactsList: ', contactsList);


// const pushedContacts = (newContact) => {

// dispatch(contactsAPI.fetchAddNewContact(newContact))
  
// };
  
const handleSubmit = (values, action) => {

  const { name, number } = values
  if (name) {
    const newContacts = {
        
    id: nanoid(),
    name: name,
    number: number,
    favorite: false
  };
console.log('newContacts: ', newContacts);
  const namePerson = newContacts.name;
  const condition = contactsList.some(contact => contact.name.toLowerCase() === namePerson.toLowerCase());
  if (condition) {
   alert(`${namePerson} is already in contacts`);
   return
  };

    dispatch(contactOperations.newContact(newContacts))
        
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
            name: '',
            number: ''
          }}
          onSubmit={handleSubmit}>
        
          <Form className={css.forma} autoComplete="off">
            
            <Input />
            
            {/* <ul className={css.listNum}>
  {Array.from('380954835493').map((digit, index) => (
    <li key={index} className={`${css.itemNum}  ${css[`animationDelay${index + 1}`]}`}>{digit}</li>
  ))}
</ul> */}
            <ul className={css.listBtn}>
              <li><Button onClick={onClickCancel} type={'button'} styles1={'style'} text={'Cancel'} /></li>
              <li><Button type={'submit'} styles1={'style'} styles2={'blue'} text={'Save'} /></li>
            </ul>
    
          </Form>
        </Formik>
      </div>
    )
  
};

