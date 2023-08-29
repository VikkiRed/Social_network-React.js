const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogues: [
        {id: 1, name: 'Viktoria'},
        {id: 2, name: 'Elena'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Alexander'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Gleb'}
    ],
    messages: [
        {id: 1, message: 'Hi, bro!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Welcome!'},
        {id: 4, message: 'Yo-yo! I\'m here!!!!' },
        {id: 5, message: 'How are you?'},
        {id: 6, message: 'Learn Java Script'}
    ],
    newMessageBody: ''
}

const dialoguesReducer = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state, 
                newMessageBody: action.body
            };
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            return {
                ...state, 
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;    
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
    ({ type:  UPDATE_NEW_MESSAGE_BODY, body: body });    

export default dialoguesReducer;