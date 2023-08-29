import styles from './Users.module.css';
import userPhoto from './../../img/userPhoto.jpg';

let Users = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize );

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);}
    }

    return  <div>
            <div>
                { pages.map ( p => {
                   return <span className={props.currentPage === p && styles.selectedPage }
                   onClick = { (e) => {props.onPageChanged(p) }}>{p}</span>
                })}
                
            </div>
             {
            props.users.map(users => <div key={users.id}>
                <div>
                    <div className={styles.userPhotoContainer}>
                        <img src={users.photos.small != null ? users.photos.small : userPhoto} 
                        className={styles.userPhoto} alt="userAvatar" />
                    </div>
                    <div>
                        { users.followed 
                            ? <button onClick = { () => {props.unfollow(users.id) } }>Unfollow</button>
                            : <button onClick = { () => {props.follow(users.id) } }>Follow</button> }
                    </div>
                </div>
                <div>
                    <div>{users.name}</div>
                    <div>{users.status}</div>
                </div>   
                <div>
                    <div>{users.id}</div>
                    <div>{users.id}</div>
                </div>  
            </div>)   
            }
            </div>
}

export default Users;