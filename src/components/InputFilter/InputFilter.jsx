import css from './InputFilter.module.css'

import { useDispatch } from 'react-redux'

import { setStatusFilter } from 'redux/filterSlice'

export default function Filter() {

const dispatch = useDispatch()

const actualNames=(evt)=>{
    const inputValue = evt.target.value
    // console.log('imputValue: ', imputValue);
    dispatch(setStatusFilter(inputValue));
    return
//   const arrContacts = [...contact];
//   const contactsFiltered = filter.toLowerCase();
//   const filteredContacts = arrContacts.filter(contact => contact.name.toLowerCase().includes(contactsFiltered));
//   return filteredContacts;
}


    return (
        <div className={css.style}>
        {/* <p>Find contacts by name</p> */}
        <label className={css.label} htmlFor="name" >
            <input className={css.inp} placeholder='Search' onChange={actualNames}  type="text" name="name"/>
        </label>
        </div>
    )
}