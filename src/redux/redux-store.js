import { combineReducers } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialoguesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});
let store = createStore (reducers);

window.Storage = store;

export default store;