const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2
};

const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( users => {
                    if (users.id === action.userId) {
                        return {...users, followed: true}
                    }
                        return users;
                    })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( users => {
                    if (users.id === action.userId) {
                        return {...users, followed: false}
                        }
                        return users;
                    })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }    
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }                
        default:
            return state;
    }
}

export const followAC = (userId) =>({type: FOLLOW, userId});
export const unfollowAC = (userId) =>({type: UNFOLLOW, userId});
export const setUsersAC = (users) =>({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;