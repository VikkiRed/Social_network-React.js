import styles from "./Dialogues.module.css";

import Message from './Messages/Messages';
import DialoguesItem from './DialoguesItem/DialoguesItem';

const Dialogues = (props) => {

    let state = props.messagesPage;

    let dialoguesElements = state.dialogues
        .map (dialogue => <DialoguesItem name={dialogue.name} key={dialogue.id} id={dialogue.id} />);

    let messagesElements = state.messages
        .map (messages => <Message message={messages.message} key={messages.id} id={messages.id} />);

    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
        
    return ( 
        <div className={styles.dialogues}>
            <div className={styles.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={styles.messages}>
               <div>{messagesElements}</div> 
               <div>
                <div><textarea value={newMessageBody} 
                                onChange={onNewMessageChange}
                placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send message</button></div>
               </div>
            </div>
            
            
        </div>
     );
}
 
export default Dialogues;