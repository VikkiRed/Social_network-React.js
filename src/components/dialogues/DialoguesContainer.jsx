import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogues-reducer';
import Dialogues from './Dialogues';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogues);

export default DialoguesContainer;