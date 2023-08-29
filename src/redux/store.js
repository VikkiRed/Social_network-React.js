import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'My first React-project! I\'m happy girl :)', likesCount: 11},
                {id: 2, message: 'Hello!', likesCount: 10},
                {id: 3, message: 'Wake up, friend! You\'ve screwed up!', likesCount: 2},
                {id: 4, message: 'Forever young', likesCount: 7 },
                {id: 5, message: 'Never look back, bro!', likesCount: 3},
                {id: 6, message: 'Follow your heart...', likesCount: 17}
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },   
        sidebar: {
    
        } 
    },
    _callSubscriber() {
        console.log('state change');
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
   
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialoguesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);  
    }
}


export default store;

window.store = store;