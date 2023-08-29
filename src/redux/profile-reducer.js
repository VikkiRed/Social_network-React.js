const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'My first React-project! I\'m happy girl :)', likesCount: 11},
            {id: 2, message: 'Hello!', likesCount: 10},
            {id: 3, message: 'Wake up, friend! You\'ve screwed up!', likesCount: 2},
            {id: 4, message: 'Forever young', likesCount: 7 },
            {id: 5, message: 'Never look back, bro!', likesCount: 3},
            {id: 6, message: 'Follow your heart...', likesCount: 17}
        ],
        newPostText: ''
}

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;    
    } 
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;