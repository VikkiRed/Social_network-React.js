import './profile.css';


import avatar from './../../img/avatar.jpg';

const Profile = () => {
    return ( 
        <div className='profile-wrapper'>
            <div className='profile-background'>
            </div>
            
                <div className='avatar-container'>
                    <img className='avatar-icon' src={avatar} alt="avatar" />
                </div>
            <div className=''>
                <h1>Just Handsome</h1>
                <p>Fat & sad, but very talented junior!</p>
            </div>
            
            
        </div>
     );
}
 
export default Profile;