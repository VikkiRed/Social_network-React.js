import styles from './ProfileInfo.module.css';

import avatar from './../../../img/avatar.jpg';

const ProfileInfo = () => {
    return ( 
        <div className={styles.profileInfo}>
            <div className={styles.avatarContainer}>
                    <img className={styles.avatarIcon} src={avatar} alt="avatar" />
                </div>
                <div className={styles.profileDescription}>
                    <h1>Just Handsome</h1>
                    <p>Fat & sad, but very talented junior!</p>
                </div>
        </div>
    );
}
 
export default ProfileInfo;