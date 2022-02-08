import styles from './Overlay.module.css'
const Overlay = (props) => {

    let state = false;
    const onCkickHandler = () => {
        state = true;
        props.onBtnClick(state);
    }

    document.addEventListener('keyup', (event) => {
        if (event.key === 'Escape') {
            state = true;
            props.onBtnClick(state);
        }
    })


    return (
        <div className={styles['container-overlay']}>
            <div className={styles.overlay}>
                <h1>Invalid Input</h1>
                <p>{props.onMessage}</p>
                <button onClick={onCkickHandler}>Okay</button>
            </div>
        </div>
    )
}
export default Overlay