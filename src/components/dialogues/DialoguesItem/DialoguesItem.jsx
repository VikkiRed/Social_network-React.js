import styles from './../Dialogues.module.css';
import { NavLink } from "react-router-dom";

const DialoguesItem = (props) => {
    let path = "/dialogues/" + props.id;
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialoguesItem;