import styles from './Users.module.css'

const Users = (props) => {

    const clikHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <div className={styles.UserContainer}>
            <p onClick={clikHandler}>{props.user} is {props.age} years old</p>
        </div>
    )
}
export default Users