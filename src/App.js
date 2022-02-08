import React, { useState } from 'react'
import styles from './App.module.css';
import ListForm from './Components/ListForm/ListForm';
import ListUsers from './Components/ListDisplay/ListUsers';

const DUMMY_USERS = [

]

function App() {
  const [defaultUsers, setChangedUser] = useState(DUMMY_USERS);


  const userHandler = (user) => {
    setChangedUser((prevUsers) => {
      return [user, ...prevUsers]
    })
  }

  const deleteHandler = (id) => {
    setChangedUser((prevUsers) => {
      const updatedGoals = prevUsers.filter(goal => {
        return goal.id !== id
      });
      return updatedGoals
    })
  }

  return (
    <div className={styles.App}>
      <ListForm onUserCreate={userHandler} />
      {defaultUsers.length === 0 && ''}
      {defaultUsers.length > 0 && <ListUsers users={defaultUsers} onDelete={deleteHandler} />}
      {/* {defaultUsers.length === 0 ? '' : <ListUsers users={defaultUsers} onDelete={deleteHandler} />} */}
    </div>
  );
}

export default App;
