import css from './InputFilter.module.css'

import { useDispatch } from 'react-redux'
import { setStatusFilter } from 'redux/contactAPI/contactReducer'


export default function Filter() {

const dispatch = useDispatch()

const actualNames=(evt)=>{
    const inputValue = evt.target.value.toLowerCase();
    dispatch(setStatusFilter(inputValue));
    return

}


    return (
        <div className={css.style}>

        <label className={css.label} htmlFor="name" >
            <input className={css.inp} placeholder='Search' onChange={actualNames}  type="text" name="name"/>
        </label>
        </div>
    )
}