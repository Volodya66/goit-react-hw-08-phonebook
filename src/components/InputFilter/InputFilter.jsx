import css from './InputFilter.module.css'

export default function Filter({parameterTracker,value}) {

    return (
        <div className={css.style}>
        <p>Find contacts by name</p>
        <label className={css.label} htmlFor="name" >
            <input className={css.inp} onChange={parameterTracker} value={value} type="text" name="name"/>
        </label>
        </div>
    )
}