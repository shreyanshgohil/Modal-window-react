import styles from './ListUsers.module.css'
import Users from './Users'
const ListUsers = (props) => {

    const deleHandler = (id) => {
        props.onDelete(id);
    }

    return (
        <div className={styles.ListUsersContainer}>
            {props.users.map((user) => {
                return <Users user={user.name} age={user.age} key={user.id} id={user.id} onDelete={deleHandler} />
            })}
        </div>
    )
}
export default ListUsers