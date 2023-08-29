import styles from './Post.module.css';

const Post = (props) => {
    return ( 
        <div className={styles.item}>
            
            <div className={styles.message}>{props.message}</div>
            <span>Like</span>{props.likesCount}
        </div>
     );
}
 
export default Post;