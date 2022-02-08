import styles from './ListForm.module.css'
import React, { useState } from 'react'
import Overlay from '../ListDisplay/Overlay'
const ListForm = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [message, setMessage] = useState('')

    const persone = {
        name: enteredName,
        age: enteredAge,
        id: Math.random().toString(),
    }


    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length > 0 && enteredAge.trim().length > 0 && enteredAge > 0) {
            props.onUserCreate(persone);
            setEnteredName('');
            setEnteredAge('');
        }
        else if ((enteredName.trim().length === 0) || (enteredAge.trim().length === 0)) {
            setMessage("Plese Enter Valid NAME and AGE (Non Empty Values)")
            setIsValid(true)
        }
        else {
            setIsValid(true)
            setMessage("Please Enter the valid age (>0) ")
        }
    }

    const nameHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const btnState = (state) => {
        if (state === true) {
            setIsValid(false)
        }
    }
    return (
        <div className={styles['form-style']}>
            <form className={styles.FormContainer} onSubmit={submitHandler}>
                <label htmlFor="uname">Username</label>
                <input type="text" id="uname" placeholder='Shreyansh' onChange={nameHandler} value={enteredName} />
                <label htmlFor="age">AgeYears</label>
                <input type="number" id="age" placeholder='21' onChange={ageHandler} value={enteredAge} />
                <button type="submit">Add User</button>
                {isValid ? <Overlay onMessage={message} onBtnClick={btnState} /> : ''}
            </form>
        </div>
    )
}
export default ListForm