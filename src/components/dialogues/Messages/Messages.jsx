import styles from './../Dialogues.module.css';

const Message = (props) => {
    return (
        <div className={styles.dialogue}>{props.message }</div>
    )
}

export default Message;