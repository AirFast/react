import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <article className={styles.post}>{props.text}</article>
    );
}

export default Post;