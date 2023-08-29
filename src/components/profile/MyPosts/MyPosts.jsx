import styles from "./MyPosts.module.css";

import Post from "./post/Post";
import { useRef } from "react";


const MyPosts = (props) => {
    let postsElements = props.posts.map (posts => 
        <Post message={posts.message} likesCount={posts.likesCount} />);
       
    let newPostElement = useRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
            <div className={styles.postsContainer} >
                <h3>My posts</h3>
                
                <textarea onChange={onPostChange} 
                    ref={newPostElement} value={props.newPostText}/>
                
                <button onClick={onAddPost}>Add post</button>
               
                {postsElements}
            
            </div>
        );
}
 
export default MyPosts;