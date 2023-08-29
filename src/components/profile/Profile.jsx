import './profile.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

    return ( 
        <div className='profile-wrapper'>
            <div className='profile-background'>
            </div>
            
            <ProfileInfo />    
            <MyPostsContainer store ={props.store}/>
        </div>
     );
}
 
export default Profile;